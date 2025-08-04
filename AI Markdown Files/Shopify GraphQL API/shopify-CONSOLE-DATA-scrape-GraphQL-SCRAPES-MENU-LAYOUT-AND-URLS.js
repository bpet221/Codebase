// Shopify GraphQL Menu Extractor - Fixed Version
// Expands ALL menu levels and uses correct URL pattern

(function () {
    // Get the selected version from the dropdown
    const versionSelect = document.querySelector('[data-version-selector="true"]');
    const selectedVersion = versionSelect ? versionSelect.value : 'latest';

    // Object to store the hierarchical structure
    const menuStructure = {};

    // First, add the Overview section
    menuStructure['Overview'] = {
        'General': [{
            text: 'Overview',
            url: 'https://shopify.dev/docs/api/admin-graphql/latest'
        }]
    };

    // Function to expand ALL menus recursively
    async function expandAllMenusRecursively() {
        let totalExpanded = 0;
        let iterations = 0;

        // Keep expanding until no more collapsed menus are found
        while (iterations < 5) { // Safety limit
            // Only expand the navigation menu buttons, not dropdown menus
            const collapsedButtons = document.querySelectorAll('button._ExpandableNavToggle_1dwcs_51[aria-expanded="false"]');

            if (collapsedButtons.length === 0) {
                break;
            }

            console.log(`Round ${iterations + 1}: Found ${collapsedButtons.length} collapsed menus`);

            for (const button of collapsedButtons) {
                button.click();
                totalExpanded++;
                await new Promise(resolve => setTimeout(resolve, 30));
            }

            // Wait for new content to appear
            await new Promise(resolve => setTimeout(resolve, 300));
            iterations++;
        }

        return totalExpanded;
    }

    // Function to extract menu data
    function extractMenuData() {
        // Get all links that match the GraphQL API pattern
        // Using multiple patterns to catch different URL formats
        const linkPatterns = [
            `a[href*="/docs/api/admin-graphql/latest/"]`,
            `a[href*="/docs/api/admin-graphql/${selectedVersion}/"]`,
            `a[href*="/admin-graphql/latest/"]`,
            `a[href*="/admin-graphql/${selectedVersion}/"]`
        ];

        const allLinks = new Set();

        linkPatterns.forEach(pattern => {
            const links = document.querySelectorAll(pattern);
            links.forEach(link => allLinks.add(link));
        });

        console.log(`Found ${allLinks.size} unique GraphQL API links`);

        allLinks.forEach(link => {
            const text = link.textContent.replace(/<wbr>/g, '').trim();
            const url = link.href;

            // Skip non-API endpoint links (like section anchors)
            if (url.includes('#') || url.includes('/connections/') || url.includes('/enums/') ||
                url.includes('/input-objects/') || url.includes('/interfaces/') ||
                url.includes('/payloads/') || url.includes('/scalars/') || url.includes('/unions/')) {
                return;
            }

            // Only process queries, mutations, and objects
            if (!url.includes('/queries/') && !url.includes('/mutations/') && !url.includes('/objects/')) {
                return;
            }

            // Find the parent sections by traversing up
            let mainSection = '';
            let subSection = '';

            // Determine subsection from URL
            if (url.includes('/queries/')) subSection = 'Queries';
            else if (url.includes('/mutations/')) subSection = 'Mutations';
            else if (url.includes('/objects/')) subSection = 'Objects';

            // Find main section by traversing up the DOM
            let parent = link.parentElement;
            let depth = 0;

            while (parent && parent !== document.body && depth < 20) {
                // Look for the main section button (Depth0)
                const mainButton = parent.querySelector('button._ExpandableToggleDepth0_1dwcs_142');
                if (mainButton) {
                    mainSection = mainButton.textContent.trim();
                    break;
                }

                // Alternative: look for any parent with Depth0 class
                const depth0Parent = parent.closest('li')?.querySelector('button[class*="Depth0"]');
                if (depth0Parent) {
                    mainSection = depth0Parent.textContent.trim();
                    break;
                }

                parent = parent.parentElement;
                depth++;
            }

            // Store in nested structure
            if (mainSection && subSection) {
                if (!menuStructure[mainSection]) {
                    menuStructure[mainSection] = {};
                }
                if (!menuStructure[mainSection][subSection]) {
                    menuStructure[mainSection][subSection] = [];
                }
                menuStructure[mainSection][subSection].push({ text, url });
            }
        });
    }

    // Function to generate markdown
    function generateMarkdown() {
        let markdown = `# Shopify GraphQL API Documentation Structure\n\n`;
        markdown += `**Version: ${selectedVersion}**\n\n`;

        // Sort main sections alphabetically, but keep Overview first
        const sortedSections = Object.keys(menuStructure).sort((a, b) => {
            if (a === 'Overview') return -1;
            if (b === 'Overview') return 1;
            return a.localeCompare(b);
        });

        sortedSections.forEach(mainSection => {
            markdown += `## ${mainSection}\n\n`;

            const subSections = menuStructure[mainSection];
            const sortedSubSections = Object.keys(subSections).sort();

            sortedSubSections.forEach(subSection => {
                markdown += `### ${subSection}\n\n`;

                const items = subSections[subSection];
                // Remove duplicates and sort
                const uniqueItems = Array.from(new Map(items.map(item => [item.url, item])).values());
                uniqueItems.sort((a, b) => a.text.localeCompare(b.text));

                uniqueItems.forEach(item => {
                    markdown += `- [${item.text}](${item.url})\n`;
                });

                markdown += '\n';
            });
        });

        // Add summary
        let totalCount = 0;
        const summary = { queries: 0, mutations: 0, objects: 0 };

        Object.values(menuStructure).forEach(sections => {
            Object.entries(sections).forEach(([type, items]) => {
                const count = Array.from(new Map(items.map(item => [item.url, item])).values()).length;
                totalCount += count;
                const typeKey = type.toLowerCase();
                if (summary[typeKey] !== undefined) {
                    summary[typeKey] += count;
                }
            });
        });

        markdown += '\n---\n\n';
        markdown += `## Summary\n\n`;
        markdown += `Total API endpoints: ${totalCount}\n\n`;
        markdown += `- Queries: ${summary.queries}\n`;
        markdown += `- Mutations: ${summary.mutations}\n`;
        markdown += `- Objects: ${summary.objects}\n`;

        return markdown;
    }

    // Main execution
    (async function () {
        console.log('🔍 Starting Shopify GraphQL menu extraction...');

        console.log('📂 Expanding all menu levels...');
        const totalExpanded = await expandAllMenusRecursively();
        console.log(`✅ Expanded ${totalExpanded} total menus`);

        console.log('⏳ Waiting for all content to load...');
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log('📊 Extracting menu data...');
        extractMenuData();

        const markdown = generateMarkdown();

        console.log('\n=== COPY THE MARKDOWN BELOW ===\n');
        console.log(markdown);
        console.log('\n=== END OF MARKDOWN ===\n');

        const totalCount = Object.values(menuStructure).reduce((acc, sections) => {
            return acc + Object.values(sections).reduce((subAcc, items) => {
                return subAcc + Array.from(new Map(items.map(item => [item.url, item])).values()).length;
            }, 0);
        }, 0);

        console.log(`✅ Extraction complete! Found ${totalCount} total API endpoints.`);

        // Debug info
        console.log('\nDebug: Menu structure keys:', Object.keys(menuStructure));
    })();
})();