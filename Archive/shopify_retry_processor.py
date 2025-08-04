#!/usr/bin/env python3
"""
Enhanced Shopify Documentation Processor - Failed URLs Retry
Processes only the failed URLs from the previous run with improved error handling and retry logic.
"""

import os
import re
import requests
import time
from datetime import datetime
from urllib.parse import urlparse, unquote

# Configuration
BASE_PATH = "/Users/blakepetipas/Code Repos/Codebase/AI Markdown Files/Shopify-Store-Theme-Docs-7.29.25"
batch_size = 3  # Reduced batch size for better stability
initial_delay = 2.0  # Increased delay between batches
max_retries = 3  # Maximum retries per URL
timeout = 45  # Increased timeout for better success rate

# Failed URLs from the processing report
FAILED_URLS = [
    "https://shopify.dev/docs/storefronts/themes/architecture/layouts",
    "https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid/customize-checkout",
    "https://shopify.dev/docs/storefronts/themes/architecture/templates/json-templates",
    "https://shopify.dev/docs/storefronts/themes/architecture/templates/404",
    "https://shopify.dev/docs/storefronts/themes/architecture/templates",
    "https://shopify.dev/docs/storefronts/themes/architecture/templates/liquid-templates",
    "https://shopify.dev/docs/storefronts/themes/architecture/templates/customers-account",
    "https://shopify.dev/docs/storefronts/themes/architecture/templates/customers-login",
    "https://shopify.dev/docs/storefronts/themes/architecture/templates/customers-activate-account",
    "https://shopify.dev/docs/storefronts/themes/architecture/templates/index-template",
    "https://shopify.dev/docs/storefronts/themes/architecture/templates/metaobject",
    "https://shopify.dev/docs/storefronts/themes/architecture/sections",
    "https://shopify.dev/docs/storefronts/themes/architecture/blocks",
    "https://shopify.dev/docs/storefronts/themes/architecture/section-groups/migrate",
    "https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/targeting",
    "https://shopify.dev/docs/storefronts/themes/architecture/config",
    "https://shopify.dev/docs/storefronts/themes/architecture/config/markets-json",
    "https://shopify.dev/docs/storefronts/themes/architecture/locales",
    "https://shopify.dev/docs/storefronts/themes/best-practices/templates-sections-blocks",
    "https://shopify.dev/docs/storefronts/themes/best-practices/accessibility",
    "https://shopify.dev/docs/storefronts/themes/best-practices/merchant-stores",
    "https://shopify.dev/docs/storefronts/themes/best-practices/performance",
    "https://shopify.dev/docs/storefronts/themes/best-practices/deceptive-code",
    "https://shopify.dev/docs/storefronts/themes/best-practices/design",
    "https://shopify.dev/docs/storefronts/themes/best-practices/editor/integrate-sections-and-blocks",
    "https://shopify.dev/docs/storefronts/themes/best-practices/editor",
    "https://shopify.dev/docs/storefronts/themes/tools",
    "https://shopify.dev/docs/storefronts/themes/tools/liquid-doc",
    "https://shopify.dev/docs/storefronts/themes/tools/code-editor",
    "https://shopify.dev/docs/storefronts/themes/tools/theme-access",
    "https://shopify.dev/docs/storefronts/themes/tools/collaborator-accounts",
    "https://shopify.dev/docs/storefronts/themes/tools/online-editor",
    "https://shopify.dev/docs/storefronts/themes/tools/cli/environments",
    "https://shopify.dev/docs/storefronts/themes/tools/cli/language-server",
    "https://shopify.dev/docs/storefronts/themes/tools/lighthouse-ci",
    "https://shopify.dev/docs/storefronts/themes/tools/theme-check",
    "https://shopify.dev/docs/storefronts/themes/tools/cli/cli-2",
    "https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/app-block-missing-schema",
    "https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks",
    "https://shopify.dev/docs/storefronts/themes/tools/theme-check/configuration",
    "https://shopify.dev/docs/storefronts/themes/tools/theme-check/commands",
    "https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/asset-size-css",
    "https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/app-block-valid-tags",
    "https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/asset-size-app-block-css",
    "https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/capture-on-content-for-block",
    "https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/deprecate-bgsizes",
    "https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/deprecated-filter",
    "https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/deprecated-fonts-on-sections-and-blocks",
    "https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/empty-block-content",
    "https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/json-syntax-error",
    "https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/missing-render-snippet-arguments",
    "https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/matching-schema-translations",
    "https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/pagination-size",
    "https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/required-layout-theme-object",
    "https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/missing-template",
    "https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/translation-key-exists",
    "https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/unique-doc-param-names",
    "https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/unrecognized-content-for-arguments",
    "https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/undefined-object",
    "https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/valid-content-for-argument-types",
    "https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/valid-html-translation",
    "https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/valid-settings-key",
    "https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/variable-name",
    "https://shopify.dev/docs/storefronts/themes/troubleshooting",
    "https://shopify.dev/docs/storefronts/themes/tools/theme-inspector",
    "https://shopify.dev/docs/storefronts/themes/markets",
    "https://shopify.dev/docs/storefronts/themes/product-merchandising",
    "https://shopify.dev/docs/storefronts/themes/delivery-fulfillment",
    "https://shopify.dev/docs/storefronts/themes/product-merchandising/variants",
    "https://shopify.dev/docs/storefronts/themes/trust-security",
    "https://shopify.dev/docs/storefronts/themes/product-merchandising/recommendations/complementary-products",
    "https://shopify.dev/docs/storefronts/themes/product-merchandising/recommendations/related-products",
    "https://shopify.dev/docs/storefronts/themes/product-merchandising/gift-cards",
    "https://shopify.dev/docs/storefronts/themes/pricing-payments/b2b",
    "https://shopify.dev/docs/storefronts/themes/pricing-payments/accelerated-checkout/upgrade-accelerated-checkout",
    "https://shopify.dev/docs/storefronts/themes/markets/localization-discovery",
    "https://shopify.dev/docs/storefronts/themes/navigation-search/navigation",
    "https://shopify.dev/docs/storefronts/themes/navigation-search/search/predictive-search-ux",
    "https://shopify.dev/docs/storefronts/themes/navigation-search/filtering",
    "https://shopify.dev/docs/storefronts/themes/navigation-search/search",
    "https://shopify.dev/docs/storefronts/themes/navigation-search/filtering/tag-filtering",
    "https://shopify.dev/docs/storefronts/themes/os20/assessment",
    "https://shopify.dev/docs/storefronts/themes/store/test-theme/checklist",
    "https://shopify.dev/docs/storefronts/themes/store/review-process/common-theme-rejections",
    "https://shopify.dev/docs/storefronts/themes/store/success/prohibited-actions",
    "https://shopify.dev/docs/storefronts/themes/store/review-process/submit-theme"
]

def clean_filename(filename):
    """Clean filename for filesystem compatibility"""
    # Remove or replace invalid characters
    filename = re.sub(r'[<>:"/\\|?*]', '', filename)
    filename = filename.replace(' ', '-').lower()
    return filename[:50]  # Limit length

def extract_title_from_url(url):
    """Extract a title from the URL path"""
    parsed = urlparse(url)
    path_parts = [part for part in parsed.path.split('/') if part]
    
    if path_parts:
        title = path_parts[-1].replace('-', ' ').title()
        return title
    return "Documentation"

def create_folder_path(url):
    """Create folder path based on URL structure"""
    parsed = urlparse(url)
    path_parts = [part for part in parsed.path.split('/') if part and part != 'docs']
    
    # Skip the common prefix parts
    if len(path_parts) >= 3 and path_parts[:3] == ['storefronts', 'themes']:
        path_parts = path_parts[3:]  # Remove 'storefronts/themes' prefix
    
    # Create meaningful folder names
    folder_parts = []
    for part in path_parts[:-1]:  # Exclude the last part (it will be the filename)
        clean_part = part.replace('-', ' ').title()
        folder_parts.append(clean_part)
    
    return os.path.join(*folder_parts) if folder_parts else "Misc"

def fetch_content_with_retry(url, max_retries=max_retries):
    """Fetch content with exponential backoff retry logic"""
    jina_url = f"https://r.jina.ai/{url}"
    
    for attempt in range(max_retries):
        try:
            print(f"🔄 Attempt {attempt + 1}/{max_retries}: {extract_title_from_url(url)}")
            
            # Exponential backoff: 2^attempt seconds
            if attempt > 0:
                wait_time = 2 ** attempt
                print(f"⏱️  Waiting {wait_time}s before retry...")
                time.sleep(wait_time)
            
            response = requests.get(jina_url, timeout=timeout)
            
            if response.status_code == 200:
                return response.text
            elif response.status_code == 503:
                print(f"⚠️  Service unavailable (503), will retry...")
                continue
            else:
                print(f"❌ HTTP {response.status_code}: {url}")
                break
                
        except requests.exceptions.Timeout:
            print(f"⏰ Timeout on attempt {attempt + 1}")
            if attempt == max_retries - 1:
                print(f"❌ All attempts failed for: {url}")
        except requests.exceptions.RequestException as e:
            print(f"❌ Request error: {e}")
            break
    
    return None

def create_markdown_file(url, content):
    """Create markdown file with frontmatter"""
    title = extract_title_from_url(url)
    folder_path = create_folder_path(url)
    
    # Create full directory path
    full_folder_path = os.path.join(BASE_PATH, folder_path)
    os.makedirs(full_folder_path, exist_ok=True)
    
    # Create filename
    filename = f"{clean_filename(title)}.md"
    file_path = os.path.join(full_folder_path, filename)
    
    # Skip if file already exists and has content
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            existing_content = f.read()
            if len(existing_content) > 200:  # File has substantial content
                print(f"⏭️  Skipping existing file: {folder_path}/{filename}")
                return file_path
    
    # Extract sections from the folder path for better organization
    sections = folder_path.split(os.sep)
    
    # Create frontmatter
    frontmatter = f"""---
title: "{title}"
description: "Shopify theme documentation for {title.lower()}"
date: "{datetime.now().strftime('%Y-%m-%d')}"
source: "{url}"
sections: {sections}
tags: ["shopify", "themes", "documentation"]
---

"""
    
    # Combine frontmatter with content
    full_content = frontmatter + content
    
    # Write file
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(full_content)
    
    return file_path

def process_failed_urls():
    """Process all failed URLs with enhanced error handling"""
    total_urls = len(FAILED_URLS)
    successful = 0
    failed = 0
    start_time = time.time()
    
    print(f"🚀 Starting enhanced retry processing of {total_urls} failed URLs")
    print(f"📊 Configuration: batch_size={batch_size}, timeout={timeout}s, max_retries={max_retries}")
    print("=" * 60)
    
    # Process URLs in batches
    for i in range(0, total_urls, batch_size):
        batch = FAILED_URLS[i:i + batch_size]
        batch_num = (i // batch_size) + 1
        total_batches = (total_urls + batch_size - 1) // batch_size
        
        print(f"\n📦 Processing batch {batch_num}/{total_batches} ({len(batch)} URLs)")
        
        for url in batch:
            content = fetch_content_with_retry(url)
            
            if content:
                try:
                    file_path = create_markdown_file(url, content)
                    print(f"✅ Created: {file_path.replace(BASE_PATH, '')}")
                    successful += 1
                except Exception as e:
                    print(f"❌ Error creating file for {url}: {e}")
                    failed += 1
            else:
                print(f"❌ Failed to fetch: {url}")
                failed += 1
        
        # Progress update
        processed = min(i + batch_size, total_urls)
        progress = (processed / total_urls) * 100
        print(f"📈 Progress: {progress:.1f}% ({successful} successful, {failed} failed)")
        
        # Adaptive delay based on success rate
        if batch_num < total_batches:
            current_success_rate = successful / processed if processed > 0 else 0
            delay = initial_delay if current_success_rate > 0.7 else initial_delay * 2
            print(f"⏱️  Waiting {delay:.1f}s before next batch...")
            time.sleep(delay)
    
    # Final report
    total_time = time.time() - start_time
    final_success_rate = (successful / total_urls) * 100
    
    print("\n" + "=" * 60)
    print(f"🎉 Enhanced retry processing complete!")
    print(f"⏱️  Total time: {total_time:.1f} seconds")
    print(f"📊 Success rate: {final_success_rate:.1f}%")
    print(f"✅ Successful: {successful}")
    print(f"❌ Failed: {failed}")
    print(f"📁 Files saved to: {BASE_PATH}")
    
    # Generate updated report
    generate_retry_report(successful, failed, total_urls)

def generate_retry_report(successful, failed, total):
    """Generate a retry processing report"""
    report_content = f"""# Shopify Documentation Retry Processing Report

**Generated:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
**Failed URLs Processed:** {total}
**Successfully Recovered:** {successful}
**Still Failed:** {failed}
**Recovery Rate:** {(successful/total)*100:.1f}%

## Summary
- Original run: 154/240 successful (64.2%)
- Retry run: {successful}/{total} successful ({(successful/total)*100:.1f}%)
- **New total: {154 + successful}/{240} successful ({((154 + successful)/240)*100:.1f}%)**

## Next Steps
{f"✅ Documentation collection is now {((154 + successful)/240)*100:.1f}% complete!" if successful > 0 else "❌ Consider alternative approaches for remaining failed URLs"}

Generated by enhanced retry processor - {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
"""
    
    report_path = os.path.join(BASE_PATH, "RETRY_PROCESSING_REPORT.md")
    with open(report_path, 'w', encoding='utf-8') as f:
        f.write(report_content)
    
    print(f"📋 Retry report saved to: {report_path}")

if __name__ == "__main__":
    process_failed_urls()
