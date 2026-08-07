#!/usr/bin/env python3
"""
phase1_step1_scrape_base_cabinets.py

Phase 1 / Step 1 — PDF Scrape
Extracts SKU + Stock_Price from shiloh_06_base_cabinets.pdf using pdfplumber.
Enrichment columns (Width, Height, Depth, Doors, Drawers, Shelves) are left
blank — those are filled by the separate Step 2 enrichment pass.

Input:   /Users/blakepetipas/Documents/SK/Shiloh/Shiloh Catalog/shiloh_06_base_cabinets.pdf
Output:  <same folder as this script>/shiloh_base_cabinets_p1s1.csv

Output schema (14 columns):
  Cabinet_Name        — left blank (not tracked by this script)
  Cabinet_Category    — always "Base Cabinet"
  Cabinet_Sub_Type    — left blank (not tracked by this script)
  SKU                 — cabinet ordering code
  Stock_Price         — pre-upcharge catalog price (integer)
  Doors               — blank (Step 2)
  Drawers             — blank (Step 2)
  Shelves             — blank (Step 2)
  Width               — blank (Step 2)
  Height              — blank (Step 2)
  Depth               — blank (Step 2)
  Phase               — 1
  Run                 — 1
  Catalog_Page        — page code from PDF (e.g. I2, I79)

Special table handling:
  - MRT/MRTD multi-height tables: one row per SKU × height combination,
    SKU encoded as base + height string (e.g. MRT1264 1/2).
  - LPDC/LPC multi-height × multi-depth tables: one row per SKU × height × depth
    combination, SKU encoded as base + height + "-" + depth (e.g. LPDC3014-33).
    Depths are always 33, 36, 39, 42 (per catalog notes).

Dependencies:
  pip install pdfplumber --break-system-packages
"""

import csv
import re
import sys
from pathlib import Path

try:
    import pdfplumber
except ImportError:
    sys.exit("pdfplumber not installed. Run: pip install pdfplumber --break-system-packages")

# ── Config ────────────────────────────────────────────────────────────────────

PDF_PATH    = Path('/Users/blakepetipas/Documents/SK/Shiloh/Shiloh Catalog/shiloh_06_base_cabinets.pdf')
OUTPUT_FILE = Path(__file__).parent / 'shiloh_base_cabinets_p1s1.csv'

PHASE     = 1
RUN       = 1
CATEGORY  = 'Base Cabinet'
MIN_PRICE = 200          # Filters out accessory inserts (SR8=$100, SR11=$126)

# Depths for laundry pedestal cabinets (LPDC/LPC) — from catalog notes, always 33/36/39/42
LPDC_DEPTHS = [33, 36, 39, 42]

OUTPUT_COLS = [
    'Cabinet_Name', 'Cabinet_Category', 'Cabinet_Sub_Type',
    'SKU', 'Stock_Price',
    'Doors', 'Drawers', 'Shelves',
    'Width', 'Height', 'Depth',
    'Phase', 'Run', 'Catalog_Page',
]

# ── Regex patterns ────────────────────────────────────────────────────────────

RDQ = '\u201d'   # Right double quotation mark " (U+201D) used in this PDF

# Page codes appear at top or bottom of page text: I2, I79, etc.
PAGE_CODE_RE = re.compile(r'^I\d{1,2}$')

# MRT/MRTD height header: "64 1/2"Tall 67 1/2"Tall ..." (uses curly quote)
MRT_HDR_RE   = re.compile(rf'(\d+ 1/2){RDQ}Tall')

# LPDC/LPC height header: "14"Tall15"Tall..." (no spaces, curly quote)
LPDC_HDR_RE  = re.compile(rf'(\d{{2}}){RDQ}Tall')

# Standard SKU-price pair.
# Allows up to 8 uppercase letters, optional hyphen before first digit
# (covers BKI-9, BPOS-12, BTD-9, BWDMWSD15, etc.)
SKU_PRICE_RE = re.compile(r'\b([A-Z]{1,8}-?\d+[A-Z0-9-]*)\s+(\d{3,5})\b')

# Page/catalog reference codes to exclude (I2, C1, etc.)
SKIP_SKU_RE  = re.compile(r'^[IC]\d{1,2}$')

# ── Helpers ───────────────────────────────────────────────────────────────────

def find_page_code(lines):
    """Check first 3 and last 3 lines of a page for a code like I2 or I79."""
    for line in lines[:3] + lines[-3:]:
        if PAGE_CODE_RE.match(line.strip()):
            return line.strip()
    return ''


def make_row(sku, price, page_code):
    return {
        'Cabinet_Name':     '',
        'Cabinet_Category': CATEGORY,
        'Cabinet_Sub_Type': '',
        'SKU':              sku,
        'Stock_Price':      price,
        'Doors':            '',
        'Drawers':          '',
        'Shelves':          '',
        'Width':            '',
        'Height':           '',
        'Depth':            '',
        'Phase':            PHASE,
        'Run':              RUN,
        'Catalog_Page':     page_code,
    }

# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    if not PDF_PATH.exists():
        sys.exit(f'ERROR: PDF not found at {PDF_PATH}')

    rows = []

    with pdfplumber.open(PDF_PATH) as pdf:
        print(f'Opened: {PDF_PATH.name}  ({len(pdf.pages)} pages)')

        for page_num, page in enumerate(pdf.pages):
            text  = page.extract_text() or ''
            lines = text.split('\n')

            page_code = find_page_code(lines)

            # Detect multi-height table type for this page
            mrt_heights  = []   # list of strings: ["64 1/2", "67 1/2", ...]
            lpdc_heights = []   # list of ints:    [14, 15, 16, 17, 18]

            for line in lines:
                stripped = line.strip()
                h = MRT_HDR_RE.findall(stripped)
                if len(h) >= 3:
                    mrt_heights = list(h)      # already "64 1/2" etc. from capture group
                h2 = LPDC_HDR_RE.findall(stripped)
                if len(h2) >= 4:
                    lpdc_heights = [int(x) for x in h2]

            is_mrt  = bool(mrt_heights)
            is_lpdc = bool(lpdc_heights)

            for line in lines:
                stripped = line.strip()
                if not stripped:
                    continue

                # ── MRT / MRTD: multi-height mud room top tables ──────────────
                # Header: "64 1/2"Tall 67 1/2"Tall ..."
                # Data:   "MRT12 603 665 877 939 1001"
                # Output: one row per height (e.g. SKU = "MRT1264 1/2")
                if is_mrt:
                    m = re.match(r'^(MRT[A-Z0-9-]*\d+[A-Z0-9-]*)\s+([\d ]+)$', stripped)
                    if m:
                        base   = m.group(1)
                        prices = m.group(2).split()
                        for i, p in enumerate(prices):
                            if p.isdigit() and i < len(mrt_heights) and int(p) >= MIN_PRICE:
                                rows.append(make_row(f'{base}{mrt_heights[i]}', int(p), page_code))
                        continue

                # ── LPDC / LPC: multi-height × multi-depth laundry pedestal ──
                # Header: "14"Tall15"Tall16"Tall17"Tall18"Tall" (no spaces)
                # Data:   "LPDC30 820 840 860 880 900"
                # Output: one row per height × depth (e.g. SKU = "LPDC3014-33")
                if is_lpdc:
                    m = re.match(r'^(L[A-Z]+\d+)\s+([\d ]+)$', stripped)
                    if m:
                        base   = m.group(1)
                        prices = m.group(2).split()
                        for i, p in enumerate(prices):
                            if p.isdigit() and i < len(lpdc_heights) and int(p) >= MIN_PRICE:
                                for depth in LPDC_DEPTHS:
                                    rows.append(make_row(f'{base}{lpdc_heights[i]}-{depth}', int(p), page_code))
                        continue

                # ── Standard: all other SKU-price pairs on the line ───────────
                for sku, price in SKU_PRICE_RE.findall(stripped):
                    if SKIP_SKU_RE.match(sku):
                        continue
                    if int(price) < MIN_PRICE:
                        continue
                    rows.append(make_row(sku, int(price), page_code))

    if not rows:
        print('WARNING: No rows extracted.')
        sys.exit(1)

    with open(OUTPUT_FILE, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=OUTPUT_COLS)
        writer.writeheader()
        writer.writerows(rows)

    print(f'\n── Done ──────────────────────────────────────────────')
    print(f'  Rows written : {len(rows)}')
    print(f'  Output       : {OUTPUT_FILE}')
    print(f'──────────────────────────────────────────────────────')


if __name__ == '__main__':
    main()
