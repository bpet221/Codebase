#!/usr/bin/env python3
"""
Bulk Shopify Documentation Processor
Processes 300+ URLs from organized markdown into individual .md files with proper folder structure
"""

import os
import re
import time
import requests
from pathlib import Path
from urllib.parse import urlparse
import concurrent.futures
from typing import List, Dict, Tuple

class ShopifyDocsProcessor:
    def __init__(self, base_path: str, markdown_file: str):
        self.base_path = Path(base_path)
        self.markdown_file = markdown_file
        self.urls_processed = 0
        self.urls_failed = []
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })
        
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
        """Parse the organized markdown file to extract URLs and structure"""
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
    
    def fetch_content(self, url: str) -> str:
        """Fetch content from URL using r.jina.ai"""
        jina_url = f"https://r.jina.ai/{url}"
        
        try:
            response = self.session.get(jina_url, timeout=30)
            if response.status_code == 200:
                return response.text
            else:
                print(f"❌ Failed to fetch {url} (Status: {response.status_code})")
                return None
        except Exception as e:
            print(f"❌ Error fetching {url}: {str(e)}")
            return None
    
    def create_markdown_file(self, url_data: Dict, content: str) -> bool:
        """Create markdown file with content"""
        try:
            # Create directory structure
            url_data['folder_path'].mkdir(parents=True, exist_ok=True)
            
            # Create file path
            file_path = url_data['folder_path'] / url_data['filename']
            
            # Create frontmatter and content
            frontmatter = f"""---
title: "{url_data['title']}"
source: {url_data['url']}
sections: {' > '.join(url_data['sections'])}
created: {time.strftime('%Y-%m-%d %H:%M:%S')}
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
    
    def process_single_url(self, url_data: Dict) -> Tuple[bool, str]:
        """Process a single URL"""
        print(f"🔄 Processing: {url_data['title']}")
        
        content = self.fetch_content(url_data['url'])
        if content:
            success = self.create_markdown_file(url_data, content)
            if success:
                print(f"✅ Created: {url_data['sections'][-1] if url_data['sections'] else 'root'}/{url_data['filename']}")
                return True, url_data['url']
            else:
                return False, url_data['url']
        else:
            return False, url_data['url']
    
    def process_urls_batch(self, urls_data: List[Dict], batch_size: int = 5, delay: float = 1.0):
        """Process URLs in batches with threading"""
        total_urls = len(urls_data)
        
        print(f"🚀 Starting processing of {total_urls} URLs")
        print(f"📊 Batch size: {batch_size}, Delay: {delay}s between batches")
        print(f"📁 Output directory: {self.base_path}")
        print("-" * 60)
        
        # Create base directory
        self.base_path.mkdir(parents=True, exist_ok=True)
        
        # Process in batches
        for i in range(0, total_urls, batch_size):
            batch = urls_data[i:i + batch_size]
            batch_num = (i // batch_size) + 1
            total_batches = (total_urls + batch_size - 1) // batch_size
            
            print(f"\n📦 Processing batch {batch_num}/{total_batches} ({len(batch)} URLs)")
            
            # Process batch with threading
            with concurrent.futures.ThreadPoolExecutor(max_workers=batch_size) as executor:
                futures = [executor.submit(self.process_single_url, url_data) for url_data in batch]
                
                for future in concurrent.futures.as_completed(futures):
                    success, url = future.result()
                    if success:
                        self.urls_processed += 1
                    else:
                        self.urls_failed.append(url)
            
            # Progress update
            progress = (i + len(batch)) / total_urls * 100
            print(f"📈 Progress: {progress:.1f}% ({self.urls_processed} successful, {len(self.urls_failed)} failed)")
            
            # Delay between batches (except for last batch)
            if i + batch_size < total_urls:
                print(f"⏱️  Waiting {delay}s before next batch...")
                time.sleep(delay)
    
    def generate_summary_report(self, urls_data: List[Dict]):
        """Generate a summary report"""
        report_content = f"""# Shopify Documentation Processing Report

**Generated:** {time.strftime('%Y-%m-%d %H:%M:%S')}
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
        
        for section, count in sections_count.items():
            report_content += f"- **{section}**: {count} files\n"
        
        if self.urls_failed:
            report_content += f"\n## Failed URLs ({len(self.urls_failed)})\n\n"
            for url in self.urls_failed:
                report_content += f"- {url}\n"
        
        # Write report
        report_path = self.base_path / "PROCESSING_REPORT.md"
        with open(report_path, 'w', encoding='utf-8') as f:
            f.write(report_content)
        
        print(f"\n📋 Report saved to: {report_path}")
    
    def run(self, batch_size: int = 5, delay: float = 1.0, test_mode: bool = False):
        """Main processing function"""
        print("🔍 Parsing markdown file...")
        urls_data = self.parse_markdown_structure()
        
        if not urls_data:
            print("❌ No URLs found in markdown file")
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
        
        # Generate report
        self.generate_summary_report(urls_data)
        
        # Final summary
        duration = end_time - start_time
        print(f"\n🎉 Processing complete!")
        print(f"⏱️  Total time: {duration:.1f} seconds")
        print(f"📊 Success rate: {(self.urls_processed / len(urls_data) * 100):.1f}%")
        print(f"📁 Files created in: {self.base_path}")

def main():
    # Configuration
    BASE_PATH = "/Users/blakepetipas/Code Repos/Codebase/AI Markdown Files/Shopify-Store-Theme-Docs-7.29.25"
    MARKDOWN_FILE = "/Users/blakepetipas/Code Repos/Codebase/AI Markdown Files/Shopify_Theme_URL_list_REF_FOR_SCRAPING_DOCS.md"
    
    # Create processor
    processor = ShopifyDocsProcessor(BASE_PATH, MARKDOWN_FILE)
    
    # Run FULL processing - all 300+ URLs
    print("🚀 Running FULL PROCESSING - all URLs")
    processor.run(batch_size=5, delay=1.0, test_mode=False)

if __name__ == "__main__":
    main()