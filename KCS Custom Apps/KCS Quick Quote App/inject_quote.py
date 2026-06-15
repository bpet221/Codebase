"""
inject_quote.py
---------------
Finds the most recently modified "New KCS Quote - *.html" file and injects
run/SKU/mod/insert data into it.

Usage:
    python3 inject_quote.py              # uses SAMPLE_RUNS below
    python3 inject_quote.py quote.json   # uses a JSON file you provide

The JSON format mirrors the runs array directly:
[
  {
    "name": "MAIN WALL RUN",
    "line": "Seaport",
    "finish": "White",
    "type": "RTA",
    "showMods": false,
    "showInserts": false,
    "rows": [
      {
        "label": "above fridge",
        "sku": "SW-W3636-RTA",
        "name": "Seaport White Wall Cabinet 36w 36h 12d",
        "w": "36", "h": "36", "d": "12",
        "price": "368",
        "mods": [],
        "inserts": [],
        "img": "",
        "conf": "High"
      }
    ]
  }
]
"""

import glob
import json
import os
import re
import subprocess
import sys
from datetime import datetime

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# ── Sample data (used when no JSON file is passed) ────────────────────────────
SAMPLE_RUNS = [
    {
        "name": "SINK/DW WALL - WALL CABINETS",
        "line": "Seaport",
        "finish": "White",
        "type": "RTA",
        "showMods": False,
        "showInserts": False,
        "rows": [
            {
                "label": "Double Door Wall Cabinet, Above DW",
                "sku": "SW-W2436-RTA",
                "name": "Seaport White Tall Wall Cabinet 24w 36h 12d",
                "w": "24",
                "h": "36",
                "d": "12",
                "price": "386",
                "mods": [],
                "inserts": [],
                "img": "",
                "conf": "High"
            }
        ]
    },
    {
        "name": "64.25IN WALL - WALL CABINETS",
        "line": "Seaport",
        "finish": "White",
        "type": "RTA",
        "showMods": False,
        "showInserts": False,
        "rows": [
            {
                "label": "Blind Corner Wall (Corner w/ Sink Wall)",
                "sku": "SW-WBC2436-RTA",
                "name": "Seaport White Blind Corner Wall 24w 36h 12d",
                "w": "24",
                "h": "36",
                "d": "12",
                "price": "462",
                "mods": [],
                "inserts": [],
                "img": "",
                "conf": "High"
            },
            {
                "label": "Wall Cabinet",
                "sku": "SW-W3636-RTA",
                "name": "Seaport White Tall Wall Cabinet 36w 36h 12d",
                "w": "36",
                "h": "36",
                "d": "12",
                "price": "510",
                "mods": [],
                "inserts": [],
                "img": "",
                "conf": "High"
            }
        ]
    },
    {
        "name": "FRIDGE WALL - WALL CABINETS",
        "line": "Seaport",
        "finish": "White",
        "type": "RTA",
        "showMods": False,
        "showInserts": False,
        "rows": [
            {
                "label": "Over-Fridge Wall Cabinet",
                "sku": "SW-W3618-RTA",
                "name": "Seaport White Mid-Height Wall Cabinet 36w 18h 12d",
                "w": "36",
                "h": "18",
                "d": "12",
                "price": "302",
                "mods": [],
                "inserts": [],
                "img": "",
                "conf": "High"
            },
            {
                "label": "Single Door Wall Cabinet",
                "sku": "SW-W1836-RTA",
                "name": "Seaport White Tall Wall Cabinet 18w 36h 12d",
                "w": "18",
                "h": "36",
                "d": "12",
                "price": "297",
                "mods": [],
                "inserts": [],
                "img": "",
                "conf": "High"
            },
            {
                "label": "Blind Corner Wall (Corner w/ Oven Wall)",
                "sku": "SW-WBC2436-RTA",
                "name": "Seaport White Blind Corner Wall 24w 36h 12d",
                "w": "24",
                "h": "36",
                "d": "12",
                "price": "462",
                "mods": [],
                "inserts": [],
                "img": "",
                "conf": "High"
            }
        ]
    },
    {
        "name": "OVEN WALL - WALL CABINETS",
        "line": "Seaport",
        "finish": "White",
        "type": "RTA",
        "showMods": False,
        "showInserts": False,
        "rows": [
            {
                "label": "Double Door Wall Cabinet",
                "sku": "SW-W2436-RTA",
                "name": "Seaport White Tall Wall Cabinet 24w 36h 12d",
                "w": "24",
                "h": "36",
                "d": "12",
                "price": "386",
                "mods": [],
                "inserts": [],
                "img": "",
                "conf": "High"
            },
            {
                "label": "Wall Cabinet Over Oven (Hood Vent Mod)",
                "sku": "SW-W3036-RTA",
                "name": "Seaport White Tall Wall Cabinet 30w 36h 12d",
                "w": "30",
                "h": "36",
                "d": "12",
                "price": "448",
                "mods": [],
                "inserts": [],
                "img": "",
                "conf": "High"
            },
            {
                "label": "Single Door Wall Cabinet",
                "sku": "SW-W1536-RTA",
                "name": "Seaport White Tall Wall Cabinet 15w 36h 12d",
                "w": "15",
                "h": "36",
                "d": "12",
                "price": "263",
                "mods": [],
                "inserts": [],
                "img": "",
                "conf": "High"
            },
            {
                "label": "Wall Cabinet",
                "sku": "SW-W3036-RTA",
                "name": "Seaport White Tall Wall Cabinet 30w 36h 12d",
                "w": "30",
                "h": "36",
                "d": "12",
                "price": "448",
                "mods": [],
                "inserts": [],
                "img": "",
                "conf": "High"
            }
        ]
    },
    {
        "name": "TRIM",
        "line": "Seaport",
        "finish": "White",
        "type": "RTA",
        "showMods": False,
        "showInserts": False,
        "rows": [
            {
                "label": "Crown Molding (64.25in Wall)",
                "sku": "SW-CM6",
                "name": "Seaport White Large Crown Molding 96w 4.25h 0.75d",
                "w": "96",
                "h": "4.25",
                "d": "0.75",
                "price": "182",
                "mods": [],
                "inserts": [],
                "img": "",
                "conf": "High"
            },
            {
                "label": "Crown Molding (Fridge Wall)",
                "sku": "SW-CM6",
                "name": "Seaport White Large Crown Molding 96w 4.25h 0.75d",
                "w": "96",
                "h": "4.25",
                "d": "0.75",
                "price": "182",
                "mods": [],
                "inserts": [],
                "img": "",
                "conf": "High"
            },
            {
                "label": "Crown Molding (Oven Wall)",
                "sku": "SW-CM6",
                "name": "Seaport White Large Crown Molding 96w 4.25h 0.75d",
                "w": "96",
                "h": "4.25",
                "d": "0.75",
                "price": "182",
                "mods": [],
                "inserts": [],
                "img": "",
                "conf": "High"
            },
            {
                "label": "Crown Backer (64.25in Wall)",
                "sku": "SW-CMR2",
                "name": "Seaport White Multi-Purpose Molding 96w 1.75h 2d",
                "w": "96",
                "h": "1.75",
                "d": "2",
                "price": "166",
                "mods": [],
                "inserts": [],
                "img": "",
                "conf": "High"
            },
            {
                "label": "Crown Backer (Fridge Wall)",
                "sku": "SW-CMR2",
                "name": "Seaport White Multi-Purpose Molding 96w 1.75h 2d",
                "w": "96",
                "h": "1.75",
                "d": "2",
                "price": "166",
                "mods": [],
                "inserts": [],
                "img": "",
                "conf": "High"
            },
            {
                "label": "Crown Backer (Oven Wall)",
                "sku": "SW-CMR2",
                "name": "Seaport White Multi-Purpose Molding 96w 1.75h 2d",
                "w": "96",
                "h": "1.75",
                "d": "2",
                "price": "166",
                "mods": [],
                "inserts": [],
                "img": "",
                "conf": "High"
            }
        ]
    },
    {
        "name": "SINK/DW WALL - BASE CABINETS",
        "line": "Seaport",
        "finish": "Driftwood",
        "type": "RTA",
        "showMods": False,
        "showInserts": False,
        "rows": [
            {
                "label": "Sink Base, Undermount",
                "sku": "SD-SB36-RTA",
                "name": "Seaport Driftwood Sink Base 36w 34.5h 24d",
                "w": "36",
                "h": "34.5",
                "d": "24",
                "price": "609",
                "mods": [],
                "inserts": [],
                "img": "",
                "conf": "High"
            },
            {
                "label": "Blind Corner Base (Corner w/ 64.25in Wall)",
                "sku": "SD-BBC39/42-RTA",
                "name": "Seaport Driftwood Blind Corner Base 33w 34.5h 24d",
                "w": "33",
                "h": "34.5",
                "d": "24",
                "price": "633",
                "mods": [],
                "inserts": [],
                "img": "",
                "conf": "High"
            },
            {
                "label": "Toe Kick",
                "sku": "SD-TK8",
                "name": "Seaport Driftwood Toe Kick Trim 96in",
                "w": "96",
                "h": "4.375",
                "d": "0.25",
                "price": "24",
                "mods": [],
                "inserts": [],
                "img": "",
                "conf": "High"
            }
        ]
    },
    {
        "name": "64.25IN WALL - BASE CABINETS",
        "line": "Seaport",
        "finish": "Driftwood",
        "type": "RTA",
        "showMods": False,
        "showInserts": False,
        "rows": [
            {
                "label": "3-Drawer Base",
                "sku": "SD-DB36-RTA",
                "name": "Seaport Driftwood 3-Drawer Base 36w 34.5h 24d",
                "w": "36",
                "h": "34.5",
                "d": "24",
                "price": "1097",
                "mods": [],
                "inserts": [],
                "img": "",
                "conf": "High"
            },
            {
                "label": "Toe Kick",
                "sku": "SD-TK8",
                "name": "Seaport Driftwood Toe Kick Trim 96in",
                "w": "96",
                "h": "4.375",
                "d": "0.25",
                "price": "24",
                "mods": [],
                "inserts": [],
                "img": "",
                "conf": "High"
            }
        ]
    },
    {
        "name": "FRIDGE WALL - BASE CABINETS",
        "line": "Seaport",
        "finish": "Driftwood",
        "type": "RTA",
        "showMods": False,
        "showInserts": False,
        "rows": [
            {
                "label": "Double Door Base",
                "sku": "SD-B24-RTA",
                "name": "Seaport Driftwood Double Door Base 24w 34.5h 24d",
                "w": "24",
                "h": "34.5",
                "d": "24",
                "price": "548",
                "mods": [],
                "inserts": [],
                "img": "",
                "conf": "High"
            },
            {
                "label": "Base Cabinet",
                "sku": "SD-B18-RTA",
                "name": "Seaport Driftwood Base Cabinet 18w 34.5h 24d",
                "w": "18",
                "h": "34.5",
                "d": "24",
                "price": "461",
                "mods": [],
                "inserts": [],
                "img": "",
                "conf": "High"
            },
            {
                "label": "Toe Kick",
                "sku": "SD-TK8",
                "name": "Seaport Driftwood Toe Kick Trim 96in",
                "w": "96",
                "h": "4.375",
                "d": "0.25",
                "price": "24",
                "mods": [],
                "inserts": [],
                "img": "",
                "conf": "High"
            }
        ]
    },
    {
        "name": "OVEN WALL - BASE CABINETS",
        "line": "Seaport",
        "finish": "Driftwood",
        "type": "RTA",
        "showMods": False,
        "showInserts": False,
        "rows": [
            {
                "label": "Blind Corner Base (Corner w/ Fridge Wall)",
                "sku": "SD-BBC39/42-RTA",
                "name": "Seaport Driftwood Blind Corner Base 33w 34.5h 24d",
                "w": "33",
                "h": "34.5",
                "d": "24",
                "price": "633",
                "mods": [],
                "inserts": [],
                "img": "",
                "conf": "High"
            },
            {
                "label": "Spice Pull-Out",
                "sku": "SD-BF06-PO-RTA",
                "name": "Seaport Driftwood Spice Pull-Out 6w 34.5h 24d",
                "w": "6",
                "h": "34.5",
                "d": "24",
                "price": "462",
                "mods": [],
                "inserts": [],
                "img": "",
                "conf": "High"
            },
            {
                "label": "3-Drawer Base",
                "sku": "SD-DB30-RTA",
                "name": "Seaport Driftwood 3-Drawer Base 30w 34.5h 24d",
                "w": "30",
                "h": "34.5",
                "d": "24",
                "price": "980",
                "mods": [],
                "inserts": [],
                "img": "",
                "conf": "High"
            },
            {
                "label": "Toe Kick",
                "sku": "SD-TK8",
                "name": "Seaport Driftwood Toe Kick Trim 96in",
                "w": "96",
                "h": "4.375",
                "d": "0.25",
                "price": "24",
                "mods": [],
                "inserts": [],
                "img": "",
                "conf": "High"
            }
        ]
    },
    {
        "name": "BAR RUN",
        "line": "Seaport",
        "finish": "White",
        "type": "RTA",
        "showMods": False,
        "showInserts": False,
        "rows": [
            {
                "label": "Side Cabinet, Left of Microwave",
                "sku": "SW-W2142-RTA",
                "name": "Seaport White Extra-Tall Wall Cabinet 21w 42h 12d",
                "w": "21",
                "h": "42",
                "d": "12",
                "price": "361",
                "mods": [],
                "inserts": [],
                "img": "",
                "conf": "High"
            },
            {
                "label": "Microwave Wall Cabinet",
                "sku": "SW-WM3042-RTA",
                "name": "Seaport White Microwave Wall Cabinet 30w 42h 12d",
                "w": "30",
                "h": "42",
                "d": "12",
                "price": "591",
                "mods": [],
                "inserts": [],
                "img": "",
                "conf": "High"
            },
            {
                "label": "Side Cabinet, Right of Microwave",
                "sku": "SW-W2142-RTA",
                "name": "Seaport White Extra-Tall Wall Cabinet 21w 42h 12d",
                "w": "21",
                "h": "42",
                "d": "12",
                "price": "361",
                "mods": [],
                "inserts": [],
                "img": "",
                "conf": "High"
            },
            {
                "label": "Finished Plywood Panel, Behind Bar Cabinets (1 of 2)",
                "sku": "SW-PLY-48\u00d796\u00d71/4",
                "name": "Seaport White Plywood Panel 48w 96h 0.25d",
                "w": "48",
                "h": "96",
                "d": "0.25",
                "price": "241",
                "mods": [],
                "inserts": [],
                "img": "",
                "conf": "High"
            },
            {
                "label": "Finished Plywood Panel, Behind Bar Cabinets (2 of 2)",
                "sku": "SW-PLY-48\u00d796\u00d71/4",
                "name": "Seaport White Plywood Panel 48w 96h 0.25d",
                "w": "48",
                "h": "96",
                "d": "0.25",
                "price": "241",
                "mods": [],
                "inserts": [],
                "img": "",
                "conf": "High"
            }
        ]
    }
]

CLIENT_NAME = "John Meltzer"


# ── Find most recently modified New KCS Quote file ────────────────────────────
def find_latest_quote():
    pattern = os.path.join(BASE_DIR, "New KCS Quote - *.html")
    files = glob.glob(pattern)
    if not files:
        raise FileNotFoundError(
            "No 'New KCS Quote - *.html' files found. Run generate_quote.py first."
        )
    return max(files, key=os.path.getmtime)


# ── Assign IDs to runs ────────────────────────────────────────────────────────
def assign_ids(runs):
    for i, run in enumerate(runs):
        run["id"] = f"r{i + 1}"
    return runs


# ── Build init block JS ───────────────────────────────────────────────────────
def build_init(client, runs):
    runs_json = json.dumps(runs, indent=2, ensure_ascii=False)
    return (
        "/* KCS_QUOTE_INIT_START */\n"
        f"      document.getElementById('clientName').value = {json.dumps(client)};\n"
        f"      runs = {runs_json};\n"
        "      renderAll();\n"
        "      /* KCS_QUOTE_INIT_END */"
    )


# ── Main ──────────────────────────────────────────────────────────────────────
def main():
    # Step 1: Always regenerate a fresh empty quote file first
    print("Running generate_quote.py...")
    result = subprocess.run(
        [sys.executable, os.path.join(BASE_DIR, "generate_quote.py")],
        capture_output=True, text=True
    )
    if result.returncode != 0:
        raise RuntimeError(f"generate_quote.py failed:\n{result.stderr}")
    print(result.stdout.strip())

    # Step 2: Load runs from JSON file or use sample
    if len(sys.argv) > 1:
        json_path = sys.argv[1]
        if not os.path.isabs(json_path):
            json_path = os.path.join(BASE_DIR, json_path)
        with open(json_path, "r", encoding="utf-8") as f:
            data = json.load(f)
        runs        = data.get("runs", data) if isinstance(data, dict) else data
        client_name = data.get("client", CLIENT_NAME) if isinstance(data, dict) else CLIENT_NAME
        print(f"Using data from: {json_path}")
    else:
        runs        = SAMPLE_RUNS
        client_name = CLIENT_NAME
        print("Using built-in sample data")

    runs = assign_ids(runs)

    # Find target file
    target = find_latest_quote()
    print(f"Target file:     {os.path.basename(target)}")

    with open(target, "r", encoding="utf-8") as f:
        html = f.read()

    # Replace init block (use rfind to skip the copy inside generateSaveableHTML)
    INIT_START = "/* KCS_QUOTE_INIT_START */"
    INIT_END   = "/* KCS_QUOTE_INIT_END */"
    idx_s = html.rfind(INIT_START)
    idx_e = html.rfind(INIT_END)
    if idx_s == -1 or idx_e == -1:
        raise RuntimeError("Could not find init markers in file.")
    idx_e += len(INIT_END)

    html = html[:idx_s] + build_init(client_name, runs) + html[idx_e:]

    with open(target, "w", encoding="utf-8") as f:
        f.write(html)

    total_rows = sum(len(r["rows"]) for r in runs)
    print(f"\n✅  Injected into: {os.path.basename(target)}")
    print(f"    Client:  {client_name}")
    print(f"    Runs:    {len(runs)}")
    print(f"    Cabinets:{total_rows}")


if __name__ == "__main__":
    main()