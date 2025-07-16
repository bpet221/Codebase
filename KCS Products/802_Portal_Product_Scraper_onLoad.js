(() => {
    // 1) CATEGORY MAP (unchanged)
    const categoryMap = {
        "9": "View All",
        "1753": "Wall Cabinets",
        "1758": "Accessories",
        "1762": "Base Cabinets",
        "1766": "Oven and Tall Cabinets",
        "1769": "Bathroom Vanities",
        "1754": "Wall Cabinets > Bridge Wall Cabinets",
        "1755": "Wall Cabinets > Refrigerator Wall Cabinets",
        "1756": "Wall Cabinets > Standard Wall Cabinets",
        "1757": "Wall Cabinets > Wall Corner Cabinets",
        "1760": "Wall Cabinets > Specialty Wall Cabinets",
        "1761": "Wall Cabinets > Hood",
        "1759": "Accessories > Glass Doors",
        "1767": "Accessories > Filler & Molding",
        "1770": "Accessories > Add on",
        "1771": "Accessories > Utensil Bin Pull‐out with soft‐close",
        "1772": "Accessories > Component Parts Accessories",
        "1773": "Accessories > Marketing Accessories",
        "1763": "Base Cabinets > Standard Base Cabinets",
        "1764": "Base Cabinets > Drawer Base Cabinets",
        "1765": "Base Cabinets > Sink And Corner Base",
        "1768": "Base Cabinets > ADA Cabinets"
    };

    // 2) CSV HEADERS (unchanged)
    const headers = [
        "id", "sku", "product_name", "category_id", "Category Name", "description", "Image",
        "stock_status", "k_product_type", "Assembly Price", "Assembly Option ID", "Assembly Value ID",
        "selectedassebly", "selected_hinge", "hinge_options",
        "Hinge Left Option ID", "Hinge Left Value ID", "Hinge Left Price",
        "Hinge Right Option ID", "Hinge Right Value ID", "Hinge Right Price",
        "selected_finishEnd", "selected_finishedend", "finishEnd_options", "finishedend",
        "total_price", "unit_price", "finalPrice", "main_regular_price",
        "regular_price", "has_special_price", "show_modification",
        "selected_assembly_toggle", "cat_option_header"
    ];

    // 3) GLOBAL ARRAYS / SETS
    window.allProducts = [];
    const seenProductIds = new Set();

    // 4) UTILITY TO STRIP QUOTES
    const stripQuotes = val =>
        typeof val === "string" ? val.replace(/^['"]+|['"]+$/g, "") : val;

    // 5) XHR INTERCEPT for collecting each page’s product objects
    const origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function (...args) {
        this.addEventListener("load", () => {
            const url = this.responseURL || "";
            if (url.includes("/kcheckout/ajax/getcurrentcategoryproducts")) {
                try {
                    const data = JSON.parse(this.responseText);
                    if (Array.isArray(data.products)) {
                        data.products.forEach(product => {
                            const id = stripQuotes(product.id);
                            // Always skip duplicates
                            if (seenProductIds.has(id)) return;
                            seenProductIds.add(id);

                            // Extract “Yes” assembly option, if any
                            const yesAssembly = Array.isArray(product.has_assebly)
                                ? product.has_assebly.find(opt => opt.label === "Yes")
                                : null;

                            // Pull image URL (if present) and short‐desc
                            const imgMatch = product.description?.match(/<img\s+src=["']?([^"' >]+)["']?/i);
                            const descMatch = product.description?.match(/<div[^>]*>(.*?)<\/div>/i);
                            const rawImageUrl = imgMatch?.[1] || "";
                            // Wrap as =image("URL") so Google Sheets imports as a formula
                            const wrappedImage = rawImageUrl
                                ? `=image("${rawImageUrl}")`
                                : "";
                            const shortDesc = descMatch?.[1] || "";

                            // Hinge options
                            const hingeOpts = Array.isArray(product.hinge_options)
                                ? product.hinge_options
                                : [];
                            const hingeLeft = hingeOpts.find(opt => (opt.label || "").toLowerCase().includes("left"));
                            const hingeRight = hingeOpts.find(opt => (opt.label || "").toLowerCase().includes("right"));

                            // Category_id might be an array or string
                            const category_id = Array.isArray(product.category_id)
                                ? product.category_id[0]
                                : product.category_id;

                            window.allProducts.push({
                                id,
                                sku: stripQuotes(product.sku),
                                product_name: stripQuotes(product.product_name),
                                category_id: stripQuotes(category_id),
                                "Category Name": categoryMap[stripQuotes(category_id)] || "",
                                description: stripQuotes(shortDesc),
                                Image: wrappedImage,
                                stock_status: stripQuotes(product.stock_status),
                                k_product_type: stripQuotes(product.k_product_type),
                                "Assembly Price": yesAssembly ? parseFloat(yesAssembly.price).toFixed(2) : "",
                                "Assembly Option ID": stripQuotes(yesAssembly?.optionId),
                                "Assembly Value ID": stripQuotes(yesAssembly?.valueId),
                                selectedassebly: stripQuotes(product.selectedassebly),
                                selected_hinge: stripQuotes(product.selected_hinge),
                                hinge_options: hingeOpts.length,
                                "Hinge Left Option ID": stripQuotes(hingeLeft?.optionId),
                                "Hinge Left Value ID": stripQuotes(hingeLeft?.valueId),
                                "Hinge Left Price": hingeLeft ? parseFloat(hingeLeft.price).toFixed(2) : "",
                                "Hinge Right Option ID": stripQuotes(hingeRight?.optionId),
                                "Hinge Right Value ID": stripQuotes(hingeRight?.valueId),
                                "Hinge Right Price": hingeRight ? parseFloat(hingeRight.price).toFixed(2) : "",
                                selected_finishEnd: stripQuotes(product.selected_finishEnd),
                                selected_finishedend: stripQuotes(product.selected_finishedend),
                                finishEnd_options: stripQuotes(product.finishEnd_options),
                                finishedend: stripQuotes(product.finishedend),
                                total_price: product.total_price ?? "",
                                unit_price: product.unit_price ?? "",
                                finalPrice: product.finalPrice ?? "",
                                main_regular_price: product.main_regular_price ?? "",
                                regular_price: product.regular_price ?? "",
                                has_special_price: product.has_special_price ?? "",
                                show_modification: product.show_modification ?? "",
                                selected_assembly_toggle: product.selected_assembly_toggle ?? "",
                                cat_option_header: stripQuotes(
                                    Array.isArray(product.cat_option_header)
                                        ? product.cat_option_header.join(",")
                                        : product.cat_option_header
                                )
                            });
                        });
                        console.clear();
                        console.table(window.allProducts, headers);
                    }
                } catch (e) {
                    console.warn("Failed to parse product data:", e);
                }
            }
        });
        return origOpen.apply(this, args);
    };

    // 6) CSV‐DOWNLOAD HELPER (updated file‐naming logic including time and excluding "PEG")
    window.downloadCSV = () => {
        const rows = [headers.join(",")];
        window.allProducts.forEach(product => {
            const row = headers.map(header => {
                const val = product[header] != null ? String(product[header]) : "";
                return `"${val.replace(/"/g, '""')}"`;
            });
            rows.push(row.join(","));
        });
        const csv = rows.join("\n");
        const blob = new Blob([csv], { type: "text/csv" });
        const url = URL.createObjectURL(blob);

        // build filename from SKU prefixes (dash at pos 2 or 3), exclude "PEG", else INSRT
        const prefixSet = new Set();
        window.allProducts.forEach(p => {
            const sku = typeof p.sku === "string" ? p.sku.trim() : "";
            const dashIndex = sku.indexOf("-");
            if ((dashIndex === 2 || dashIndex === 3)) {
                const prefix = sku.slice(0, dashIndex);
                if (prefix.toUpperCase() !== "PEG" && prefix) {
                    prefixSet.add(prefix);
                }
            } else {
                prefixSet.add("INSRT");
            }
        });
        // Ensure "INSRT" is last if present
        const hasInsrt = prefixSet.has("INSRT");
        if (hasInsrt) prefixSet.delete("INSRT");
        const prefixArr = Array.from(prefixSet);
        if (hasInsrt) prefixArr.push("INSRT");
        const prefixStr = prefixArr.join(",");

        // Date as M.D.YY
        const now = new Date();
        const dateStr = `${now.getMonth() + 1}.${now.getDate()}.${String(now.getFullYear()).slice(-2)}`;
        // Time as hmm a/p (e.g., 430p, 915a)
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const h12 = hours % 12 || 12;
        const mStr = String(minutes).padStart(2, "0");
        const ampm = hours >= 12 ? "p" : "a";
        const timeStr = `${h12}${mStr}${ampm}`;

        const count = window.allProducts.length > 0 ? window.allProducts.length - 1 : 0;
        const filename = `Products_${prefixStr}(${count})_${dateStr}_${timeStr}.csv`;

        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

})(); // end of XHR‐patch & CSV helpers


// == Async Scraping Loop (last‐first, then first→last) ==
(async () => {
    const delay = ms => new Promise(res => setTimeout(res, ms));

    // A) Find all “VIEW ALL” buttons on the page
    const originalButtons = Array.from(document.querySelectorAll("button, a"))
        .filter(el => el.textContent.trim().toUpperCase() === "VIEW ALL");
    const total = originalButtons.length;
    console.log(`🔢 Found ${total} “VIEW ALL” button(s).`);
    if (total === 0) {
        console.warn("❌ No “VIEW ALL” buttons found. Stopping.");
        return;
    }

    // Phase 1: Open & scrape the last button first
    {
        const i = total - 1;
        const isLast = true;
        const isDetailed = true;

        const openDelay = isLast ? 8000 : 4000;
        const appearDelay = isLast ? 8000 : 4000;
        const finalBuffer = isLast ? 8000 : 4000;
        const closeDelay = isLast ? 8000 : 4000;
        const betweenDelay = isLast ? 8000 : 4000;

        console.log(`➡️ [PHASE 1] [DETAILED] Starting modal #${i + 1}/${total} at ${new Date().toLocaleTimeString()}`);
        originalButtons[i].click();
        await delay(openDelay);

        // Wait for the modal to show up
        let modal, attempts = 0;
        while (attempts < 20) {
            modal = Array.from(document.querySelectorAll("aside.modal-popup.modal-slide"))
                .find(el => getComputedStyle(el).display !== "none");
            if (modal) break;
            await delay(300);
            attempts++;
        }
        if (!modal) {
            console.warn(`❌ [PHASE 1] Modal didn’t appear after clicking #${i + 1}. Skipping Phase 1.`);
        } else {
            console.log(`✅ [PHASE 1] [DETAILED] Modal #${i + 1} appeared at ${new Date().toLocaleTimeString()}`);
            await delay(appearDelay);

            // Smooth‐scroll until no new rows for maxStable iterations
            const visibleModals = Array.from(document.querySelectorAll("aside.modal-popup.modal-slide"))
                .filter(el => getComputedStyle(el).display !== "none");
            const lastModal = visibleModals[visibleModals.length - 1];
            const contentEl = lastModal.querySelector('[id^="modal-content-"]');

            if (contentEl && contentEl.scrollHeight > contentEl.clientHeight) {
                console.log(`🔁 [PHASE 1][DETAILED] Starting smooth‐scroll in modal #${i + 1}…`);
                let lastRowCount = contentEl.querySelectorAll("tr.item").length;
                let stableCount = 0;
                const maxStable = 20;
                const scrollIntervalMs = 100;
                const scrollAmountPx = 200;
                let scrolling = true;
                let iteration = 0;

                const scrollLoop = setInterval(() => {
                    if (!scrolling) return;
                    contentEl.scrollBy({ top: scrollAmountPx, behavior: 'smooth' });
                    console.log(`   [PHASE 1][DETAILED] Iteration ${++iteration}: scrollTop=${contentEl.scrollTop}, scrollHeight=${contentEl.scrollHeight}`);
                }, scrollIntervalMs);

                while (stableCount < maxStable) {
                    await delay(1000);
                    const currentRowCount = contentEl.querySelectorAll("tr.item").length;
                    if (currentRowCount === lastRowCount) {
                        stableCount++;
                        console.log(`   ⏳ [PHASE 1][DETAILED] Stable (${stableCount}/${maxStable}) — ${currentRowCount} rows`);
                    } else {
                        console.log(`   ⬇️ [PHASE 1][DETAILED] New rows detected: ${currentRowCount}`);
                        stableCount = 0;
                        lastRowCount = currentRowCount;
                    }
                }

                scrolling = false;
                clearInterval(scrollLoop);
                console.log(`   ⏳ [PHASE 1][DETAILED] Reached stability in modal #${i + 1}, final row count=${lastRowCount}`);
                console.log("⏳ [PHASE 1] Final buffer for modal rendering…");
                await delay(finalBuffer);
            } else {
                console.warn("⚠️ [PHASE 1] No extra scrolling needed (content fits without scrolling).");
                await delay(appearDelay);
            }

            // Close the modal
            const allVisible = Array.from(document.querySelectorAll("aside.modal-popup.modal-slide"))
                .filter(el => getComputedStyle(el).display !== "none");
            if (allVisible.length) {
                const toClose = allVisible[allVisible.length - 1];
                const closeBtn = toClose.querySelector('button.action-close[data-role="closeBtn"]');
                if (closeBtn) {
                    closeBtn.scrollIntoView({ behavior: "instant", block: "center" });
                    ["mousedown", "mouseup", "click"].forEach(type =>
                        closeBtn.dispatchEvent(new MouseEvent(type, { bubbles: true, cancelable: true }))
                    );
                    console.log(`✅ [PHASE 1][DETAILED] Modal #${i + 1} closed at ${new Date().toLocaleTimeString()}`);
                    await delay(closeDelay);
                } else {
                    console.warn("⚠️ [PHASE 1] Could not find close button inside the modal.");
                }
            }
        }

        // Wait before starting Phase 2
        console.log(`   [PHASE 1] Waiting ${betweenDelay}ms before Phase 2…`);
        await delay(betweenDelay);
    }

    // Phase 2: Loop through each “VIEW ALL” button from first to last
    for (let i = 0; i < total; i++) {
        const isLast = i === total - 1;
        const isSecondLast = i === total - 2;
        const isDetailed = isLast || isSecondLast;

        const openDelay = isLast ? 8000 : 4000;
        const appearDelay = isLast ? 8000 : 4000;
        const finalBuffer = isLast ? 8000 : 4000;
        const closeDelay = isLast ? 8000 : 4000;
        const betweenDelay = isLast ? 8000 : 4000;

        if (isDetailed) {
            console.log(`➡️ [PHASE 2][DETAILED] Starting modal #${i + 1}/${total} at ${new Date().toLocaleTimeString()}`);
        } else {
            console.log(`📂 [PHASE 2] Opening button #${i + 1}/${total}…`);
        }

        originalButtons[i].click();
        await delay(openDelay);

        // Wait for the modal to show up
        let modal, attempts = 0;
        while (attempts < 20) {
            modal = Array.from(document.querySelectorAll("aside.modal-popup.modal-slide"))
                .find(el => getComputedStyle(el).display !== "none");
            if (modal) break;
            await delay(300);
            attempts++;
        }
        if (!modal) {
            console.warn(`❌ [PHASE 2] Modal didn’t appear after clicking #${i + 1}. Skipping.`);
            continue;
        }
        if (isDetailed) {
            console.log(`✅ [PHASE 2][DETAILED] Modal #${i + 1} appeared at ${new Date().toLocaleTimeString()}`);
        } else {
            console.log("✅ [PHASE 2] Modal opened.");
        }
        await delay(appearDelay);

        // Smooth‐scroll until no new rows for maxStable iterations
        const visibleModals = Array.from(document.querySelectorAll("aside.modal-popup.modal-slide"))
            .filter(el => getComputedStyle(el).display !== "none");
        const lastModal = visibleModals[visibleModals.length - 1];
        const contentEl = lastModal.querySelector('[id^="modal-content-"]');

        if (contentEl && contentEl.scrollHeight > contentEl.clientHeight) {
            if (isDetailed) {
                console.log(`🔁 [PHASE 2][DETAILED] Starting smooth‐scroll in modal #${i + 1}…`);
            } else {
                console.log(`🔁 [PHASE 2] Smooth‐scrolling ${contentEl.id}…`);
            }

            let lastRowCount = contentEl.querySelectorAll("tr.item").length;
            let stableCount = 0;
            const maxStable = 20;
            const scrollIntervalMs = 100;
            const scrollAmountPx = 200;
            let scrolling = true;
            let iteration = 0;

            const scrollLoop = setInterval(() => {
                if (!scrolling) return;
                contentEl.scrollBy({ top: scrollAmountPx, behavior: 'smooth' });
                if (isDetailed) {
                    console.log(`   [PHASE 2][DETAILED] Iteration ${++iteration}: scrollTop=${contentEl.scrollTop}, scrollHeight=${contentEl.scrollHeight}`);
                }
            }, scrollIntervalMs);

            while (stableCount < maxStable) {
                await delay(1000);
                const currentRowCount = contentEl.querySelectorAll("tr.item").length;
                if (currentRowCount === lastRowCount) {
                    stableCount++;
                    if (isDetailed) {
                        console.log(`   ⏳ [PHASE 2][DETAILED] Stable (${stableCount}/${maxStable}) — ${currentRowCount} rows`);
                    }
                } else {
                    if (isDetailed) {
                        console.log(`   ⬇️ [PHASE 2][DETAILED] New rows detected: ${currentRowCount}`);
                    }
                    stableCount = 0;
                    lastRowCount = currentRowCount;
                }
            }

            scrolling = false;
            clearInterval(scrollLoop);
            if (isDetailed) {
                console.log(`   ⏳ [PHASE 2][DETAILED] Reached stability in modal #${i + 1}, final row count=${lastRowCount}`);
            }
            console.log("⏳ [PHASE 2] Final buffer for modal rendering…");
            await delay(finalBuffer);
        } else {
            console.warn("⚠️ [PHASE 2] No extra scrolling needed (content fits without scrolling).");
            await delay(appearDelay);
        }

        // Close the modal
        const allVisible = Array.from(document.querySelectorAll("aside.modal-popup.modal-slide"))
            .filter(el => getComputedStyle(el).display !== "none");
        if (allVisible.length) {
            const toClose = allVisible[allVisible.length - 1];
            const closeBtn = toClose.querySelector('button.action-close[data-role="closeBtn"]');
            if (closeBtn) {
                closeBtn.scrollIntoView({ behavior: "instant", block: "center" });
                ["mousedown", "mouseup", "click"].forEach(type =>
                    closeBtn.dispatchEvent(new MouseEvent(type, { bubbles: true, cancelable: true }))
                );
                if (isDetailed) {
                    console.log(`✅ [PHASE 2][DETAILED] Modal #${i + 1} closed at ${new Date().toLocaleTimeString()}`);
                } else {
                    console.log("✅ [PHASE 2] Modal closed.");
                }
                await delay(closeDelay);
            } else {
                console.warn("⚠️ [PHASE 2] Could not find close button inside the modal.");
            }
        }

        // Wait before opening next modal
        if (betweenDelay) {
            if (isDetailed) {
                console.log(`   [PHASE 2][DETAILED] Waiting ${betweenDelay}ms before next modal…`);
            }
            await delay(betweenDelay);
        }
    }

    // C) We’re done with all modals. Trigger CSV download
    console.log("📦 All modals scraped. Preparing CSV…");
    await delay(1000);
    window.downloadCSV();
})();