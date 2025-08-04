#!/usr/bin/env python3
"""
Shopify GraphQL Admin API Documentation Scraper - v2.0
Enhanced version that:
- Parses URLs from markdown file
- Stops scraping when "### Updates" is reached on each page
- Processes GraphQL Admin API documentation into organized markdown files
"""

import os
import re
import time
import requests
from pathlib import Path
from urllib.parse import urlparse
from datetime import datetime
from typing import List, Dict, Tuple

class ShopifyGraphQLDocsProcessor:
    def __init__(self, base_path: str, markdown_file: str):
        self.base_path = Path(base_path)
        self.markdown_file = markdown_file
        self.urls_processed = 0
        self.urls_failed = []
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        })
        # Enhanced configuration based on lessons learned
        self.timeout = 60  # Increased timeout
        self.max_retries = 3
        self.alternative_services = [
            "https://md.dhr.wtf/",
            "https://urltomarkdown.herokuapp.com/?url="
        ]
        
    def create_safe_filename(self, title: str) -> str:
        """Create a safe filename from title"""
        filename = re.sub(r'[^\w\s-]', '', title)
        filename = re.sub(r'[-\s]+', '-', filename)
        return filename.lower().strip('-') + '.md'
    
    def create_folder_path(self, sections: List[str]) -> Path:
        """Create folder path from sections"""
        safe_sections = []
        for section in sections:
            safe_section = re.sub(r'[^\w\s-]', '', section)
            safe_section = re.sub(r'[-\s]+', '-', safe_section)
            safe_sections.append(safe_section.lower().strip('-'))
        
        return self.base_path / Path(*safe_sections)
    
    def parse_markdown_structure(self) -> List[Dict]:
        """Parse the markdown file to extract URLs and structure"""
        with open(self.markdown_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        urls_data = []
        current_sections = []
        
        lines = content.split('\n')
        
        for line in lines:
            line = line.strip()
            if not line:
                continue
                
            # Check for headers
            if line.startswith('#'):
                level = len(line) - len(line.lstrip('#'))
                title = line.strip('# ').strip()
                
                # Update current sections based on header level
                if level == 2:  # Main section
                    current_sections = [title]
                elif level == 3:  # Subsection
                    current_sections = current_sections[:1] + [title]
                elif level == 4:  # Sub-subsection
                    current_sections = current_sections[:2] + [title]
            
            # Check for markdown links
            link_match = re.search(r'\[([^\]]+)\]\(([^)]+)\)', line)
            if link_match:
                title = link_match.group(1)
                url = link_match.group(2)
                
                if 'shopify.dev' in url:
                    urls_data.append({
                        'title': title,
                        'url': url,
                        'sections': current_sections.copy(),
                        'filename': self.create_safe_filename(title),
                        'folder_path': self.create_folder_path(current_sections)
                    })
        
        return urls_data
    
    def fetch_content_with_jina(self, url: str, attempt: int = 1) -> Tuple[str, str]:
        """Fetch content using Jina.ai with retry logic"""
        jina_url = f"https://r.jina.ai/{url}"
        
        try:
            response = self.session.get(jina_url, timeout=self.timeout)
            if response.status_code == 200 and len(response.text.strip()) > 100:
                # Process content to stop at "### Updates"
                content = self.process_content_until_updates(response.text)
                return content, "jina"
            elif response.status_code == 503:
                return None, "service_unavailable"
        except requests.exceptions.Timeout:
            return None, "timeout"
        except Exception as e:
            return None, f"error: {str(e)}"
        
        return None, "failed"
    
    def process_content_until_updates(self, content: str) -> str:
        """Process content and stop when '### Updates' is found"""
        lines = content.split('\n')
        processed_lines = []
        
        for line in lines:
            # Check if we've reached "### Updates"
            if line.strip() == '### Updates' or line.strip().startswith('### Updates'):
                # Add a note that content was truncated
                processed_lines.append('\n---\n*Content truncated at "Updates" section*')
                break
            processed_lines.append(line)
        
        return '\n'.join(processed_lines)
    
    def fetch_content_with_alternative(self, url: str) -> Tuple[str, str]:
        """Try alternative markdown services"""
        for service_url in self.alternative_services:
            try:
                full_url = f"{service_url}{url}"
                response = self.session.get(full_url, timeout=30)
                if response.status_code == 200 and len(response.text.strip()) > 100:
                    # Process content to stop at "### Updates"
                    content = self.process_content_until_updates(response.text)
                    return content, f"alternative_service"
            except:
                continue
        return None, "all_alternatives_failed"
    
    def create_placeholder_content(self, url: str, title: str) -> Tuple[str, str]:
        """Create placeholder content as last resort"""
        placeholder_content = f"""# {title}

> **Note**: This is a placeholder file for {title}. The original content could not be automatically extracted.

**Source URL**: [{url}]({url})

**Topic**: {title.replace('-', ' ').title()}

To view the full content, please visit the source URL above.

---

*This file was created as a placeholder during automated documentation processing.*
"""
        return placeholder_content, "placeholder"
    
    def fetch_content_multi_method(self, url: str, title: str) -> Tuple[str, str]:
        """Enhanced multi-method content fetching with exponential backoff"""
        methods = [
            ("Jina.ai", self.fetch_content_with_jina),
            ("Alternative services", self.fetch_content_with_alternative),
            ("Placeholder creation", lambda u: self.create_placeholder_content(u, title))
        ]
        
        for attempt in range(self.max_retries):
            for method_name, method_func in methods:
                if attempt > 0:
                    wait_time = 2 ** attempt
                    time.sleep(wait_time)
                
                if method_name == "Placeholder creation":
                    # Only use placeholder on final attempt
                    if attempt == self.max_retries - 1:
                        content, source = method_func(url)
                        if content:
                            return content, source
                else:
                    content, source = method_func(url)
                    if content and len(content.strip()) > 100:
                        return content, source
        
        return None, "all_methods_failed"
    
    def create_markdown_file(self, url_data: Dict, content: str, extraction_method: str = "unknown") -> bool:
        """Create markdown file with enhanced frontmatter"""
        try:
            # Create directory structure
            url_data['folder_path'].mkdir(parents=True, exist_ok=True)
            
            # Create file path
            file_path = url_data['folder_path'] / url_data['filename']
            
            # Skip if file already exists and has substantial content
            if file_path.exists():
                with open(file_path, 'r', encoding='utf-8') as f:
                    existing_content = f.read()
                    if len(existing_content.strip()) > 200:
                        print(f"⏭️  Skipping existing file: {url_data['filename']}")
                        return True
            
            # Create enhanced frontmatter
            sections = url_data['sections'] if url_data['sections'] else []
            frontmatter = f"""---
title: "{url_data['title']}"
description: "Shopify GraphQL Admin API documentation for {url_data['title'].lower()}"
date: "{datetime.now().strftime('%Y-%m-%d')}"
source: "{url_data['url']}"
extraction_method: "{extraction_method}"
sections: {sections}
tags: ["shopify", "graphql", "admin-api", "documentation"]
api_version: "2025-07"
---

"""
            
            full_content = frontmatter + content
            
            # Write file
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(full_content)
            
            return True
            
        except Exception as e:
            print(f"❌ Error creating file for {url_data['title']}: {str(e)}")
            return False
    
    def process_single_url(self, url_data: Dict) -> Tuple[bool, str, str]:
        """Process a single URL with enhanced multi-method approach"""
        print(f"🔄 Processing: {url_data['title']}")
        
        content, extraction_method = self.fetch_content_multi_method(url_data['url'], url_data['title'])
        
        if content:
            success = self.create_markdown_file(url_data, content, extraction_method)
            if success:
                section_path = url_data['sections'][-1] if url_data['sections'] else 'root'
                print(f"✅ Created: {section_path}/{url_data['filename']} ({extraction_method})")
                return True, url_data['url'], extraction_method
            else:
                return False, url_data['url'], "file_creation_failed"
        else:
            print(f"❌ All methods failed for: {url_data['title']}")
            return False, url_data['url'], "all_methods_failed"
    
    def process_urls_batch(self, urls_data: List[Dict], batch_size: int = 3, delay: float = 2.0):
        """Process URLs in batches with enhanced error handling (no threading for stability)"""
        total_urls = len(urls_data)
        extraction_methods = {}
        
        print(f"🚀 Starting enhanced processing of {total_urls} GraphQL Admin API URLs")
        print(f"📊 Configuration: batch_size={batch_size}, delay={delay}s, timeout={self.timeout}s, max_retries={self.max_retries}")
        print(f"📁 Output directory: {self.base_path}")
        print("=" * 60)
        
        # Create base directory
        self.base_path.mkdir(parents=True, exist_ok=True)
        
        start_time = time.time()
        
        # Process in batches (sequential for stability)
        for i in range(0, total_urls, batch_size):
            batch = urls_data[i:i + batch_size]
            batch_num = (i // batch_size) + 1
            total_batches = (total_urls + batch_size - 1) // batch_size
            
            print(f"\n📦 Processing batch {batch_num}/{total_batches} ({len(batch)} URLs)")
            
            # Process each URL in batch sequentially
            for url_data in batch:
                success, url, method = self.process_single_url(url_data)
                if success:
                    self.urls_processed += 1
                    extraction_methods[method] = extraction_methods.get(method, 0) + 1
                else:
                    self.urls_failed.append(url)
            
            # Progress update
            processed = min(i + batch_size, total_urls)
            progress = (processed / total_urls) * 100
            success_rate = (self.urls_processed / processed) * 100 if processed > 0 else 0
            print(f"📈 Progress: {progress:.1f}% ({self.urls_processed} successful, {len(self.urls_failed)} failed, {success_rate:.1f}% success rate)")
            
            # Adaptive delay based on success rate
            if batch_num < total_batches:
                adaptive_delay = delay if success_rate > 70 else delay * 2
                print(f"⏱️  Waiting {adaptive_delay:.1f}s before next batch...")
                time.sleep(adaptive_delay)
        
        # Final summary
        total_time = time.time() - start_time
        final_success_rate = (self.urls_processed / total_urls) * 100
        
        print(f"\n" + "=" * 60)
        print(f"🎉 Processing complete!")
        print(f"⏱️  Total time: {total_time:.1f} seconds")
        print(f"📊 Final success rate: {final_success_rate:.1f}%")
        
        # Show extraction method breakdown
        if extraction_methods:
            print(f"\n📋 Extraction methods used:")
            for method, count in extraction_methods.items():
                percentage = (count / self.urls_processed) * 100 if self.urls_processed > 0 else 0
                print(f"   - {method}: {count} files ({percentage:.1f}%)")
    
    def generate_summary_report(self, urls_data: List[Dict]):
        """Generate a summary report"""
        report_content = f"""# Shopify GraphQL Admin API Documentation Processing Report

**Generated:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
**API Version:** 2025-07
**Total URLs:** {len(urls_data)}
**Successfully Processed:** {self.urls_processed}
**Failed:** {len(self.urls_failed)}
**Success Rate:** {(self.urls_processed / len(urls_data) * 100):.1f}%

## Folder Structure Created

"""
        
        # Add folder structure
        sections_count = {}
        for url_data in urls_data:
            section_path = ' > '.join(url_data['sections'])
            sections_count[section_path] = sections_count.get(section_path, 0) + 1
        
        for section, count in sorted(sections_count.items()):
            report_content += f"- **{section}**: {count} files\n"
        
        # Add file listing
        report_content += "\n## Files Created\n\n"
        for url_data in urls_data:
            section_path = ' > '.join(url_data['sections'])
            report_content += f"- {section_path}/{url_data['filename']}\n"
        
        if self.urls_failed:
            report_content += f"\n## Failed URLs ({len(self.urls_failed)})\n\n"
            for url in self.urls_failed:
                report_content += f"- {url}\n"
        
        # Add index file content
        report_content += "\n## Index Structure\n\n"
        report_content += "```markdown\n"
        report_content += "# Shopify GraphQL API Documentation Structure\n\n"
        report_content += "**Version: 2025-07**\n\n"
        
        current_main_section = None
        for url_data in urls_data:
            main_section = url_data['sections'][0] if url_data['sections'] else 'General'
            sub_section = url_data['sections'][1] if len(url_data['sections']) > 1 else None
            
            if main_section != current_main_section:
                report_content += f"\n## {main_section}\n\n"
                current_main_section = main_section
                current_sub_section = None
            
            if sub_section and sub_section != current_sub_section:
                report_content += f"### {sub_section}\n\n"
                current_sub_section = sub_section
            
            report_content += f"- [{url_data['title']}]({url_data['url']})\n"
        
        report_content += "```\n"
        
        # Write report
        report_path = self.base_path / "PROCESSING_REPORT.md"
        with open(report_path, 'w', encoding='utf-8') as f:
            f.write(report_content)
        
        print(f"\n📋 Report saved to: {report_path}")
    
    def create_index_file(self, urls_data: List[Dict]):
        """Create an index.md file with all documentation links"""
        index_content = f"""---
title: "Shopify GraphQL Admin API Documentation Index"
description: "Complete index of Shopify GraphQL Admin API documentation"
date: "{datetime.now().strftime('%Y-%m-%d')}"
api_version: "2025-07"
tags: ["shopify", "graphql", "admin-api", "index"]
---

# Shopify GraphQL Admin API Documentation

**Version: 2025-07**

This is a complete collection of Shopify's GraphQL Admin API documentation, organized by category and type.

"""
        
        current_main_section = None
        for url_data in urls_data:
            main_section = url_data['sections'][0] if url_data['sections'] else 'General'
            sub_section = url_data['sections'][1] if len(url_data['sections']) > 1 else None
            
            if main_section != current_main_section:
                index_content += f"\n## {main_section}\n\n"
                current_main_section = main_section
                current_sub_section = None
            
            if sub_section and sub_section != current_sub_section:
                index_content += f"### {sub_section}\n\n"
                current_sub_section = sub_section
            
            # Create relative path
            relative_path = '/'.join(url_data['sections']) + '/' + url_data['filename']
            index_content += f"- [{url_data['title']}](./{relative_path}) - [Source]({url_data['url']})\n"
        
        # Add footer
        index_content += f"""

---

*Documentation scraped on {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}*
"""
        
        # Write index file
        index_path = self.base_path / "index.md"
        with open(index_path, 'w', encoding='utf-8') as f:
            f.write(index_content)
        
        print(f"📇 Index file created: {index_path}")
    
    def run(self, batch_size: int = 3, delay: float = 2.0, test_mode: bool = False):
        """Main processing function"""
        print("🔍 Parsing markdown file...")
        urls_data = self.parse_markdown_structure()
        
        if not urls_data:
            print("❌ No URLs configured")
            return
        
        # Test mode - only process first 3 URLs
        if test_mode:
            urls_data = urls_data[:3]
            print(f"🧪 TEST MODE: Processing only first {len(urls_data)} URLs")
        
        print(f"✅ Found {len(urls_data)} URLs to process")
        
        # Show what will be processed
        print(f"\n📋 URLs to process:")
        for i, url_data in enumerate(urls_data, 1):
            section_path = ' > '.join(url_data['sections']) if url_data['sections'] else 'root'
            print(f"   {i}. {url_data['title']} ({section_path})")
        
        # Show structure preview
        sections = set()
        for url_data in urls_data:
            sections.add(' > '.join(url_data['sections']))
        
        print(f"\n📁 Will create {len(sections)} section folders:")
        for section in sorted(sections):
            print(f"   - {section}")
        
        # Confirm before processing
        mode_text = "TEST MODE - " if test_mode else ""
        response = input(f"\n🤔 {mode_text}Process {len(urls_data)} URLs? (y/N): ")
        if response.lower() != 'y':
            print("❌ Processing cancelled")
            return
        
        # Process URLs
        start_time = time.time()
        self.process_urls_batch(urls_data, batch_size, delay)
        end_time = time.time()
        
        # Generate report and index
        self.generate_summary_report(urls_data)
        self.create_index_file(urls_data)
        
        # Final summary
        duration = end_time - start_time
        print(f"\n🎉 Processing complete!")
        print(f"⏱️  Total time: {duration:.1f} seconds")
        print(f"📊 Success rate: {(self.urls_processed / len(urls_data) * 100):.1f}%")
        print(f"📁 Files created in: {self.base_path}")

def main():
    # Configuration
    BASE_PATH = "/Users/blakepetipas/Code Repos/Codebase/AI Markdown Files/Shopify GraphQL API/shopify-GraphQL-Admin-API-documentation-v2025.07-8.1.25"
    MARKDOWN_FILE = "/Users/blakepetipas/Code Repos/Codebase/AI Markdown Files/Shopify GraphQL API/shopify-graphql-MENU-URLS-LAYOUT-admin-api-docs.md"
    
    # Create processor
    processor = ShopifyGraphQLDocsProcessor(BASE_PATH, MARKDOWN_FILE)
    
    # Run in test mode first to verify everything works
    print("🚀 Shopify GraphQL Admin API Documentation Scraper")
    print("📚 Version 2025-07")
    print("\nWould you like to run in test mode first? (recommended)")
    test_response = input("Run test mode? (y/N): ")
    
    if test_response.lower() == 'y':
        processor.run(batch_size=3, delay=2.0, test_mode=True)
        
        # After test, ask if they want to run full
        print("\n" + "=" * 60)
        full_response = input("\n🤔 Test complete. Run full scraping? (y/N): ")
        if full_response.lower() == 'y':
            # Reset processor for full run
            processor = ShopifyGraphQLDocsProcessor(BASE_PATH, MARKDOWN_FILE)
            processor.run(batch_size=3, delay=2.0, test_mode=False)
    else:
        # Run full processing directly
        processor.run(batch_size=3, delay=2.0, test_mode=False)

if __name__ == "__main__":
    main()
