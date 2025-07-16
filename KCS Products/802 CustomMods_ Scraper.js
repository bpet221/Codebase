(() => {
    // 1) INITIALIZE GLOBAL STORAGE FOR CUSTOM MODS
    window.allMods = window.allMods || [];
    const seen = new Set(window.allMods.map(r => r.sku));
    let STOP = false;
    window.STOP = () => { STOP = true; };

    // 2) INTERCEPT XHR FOR /getcustomopt TO EXTRACT CUSTOM MODS
    const origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function (method, url) {
        this._url = url;
        return origOpen.apply(this, arguments);
    };

    const origSend = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function () {
        this.addEventListener('load', function () {
            if (!this._url.includes('/kcheckout/ajax/getcustomopt')) return;

            try {
                const res = JSON.parse(this.responseText);
                const parser = new DOMParser();
                const doc = parser.parseFromString(res.data, 'text/html');
                const sku = doc.querySelector('form[data-product-sku]')
                    ?.getAttribute('data-product-sku') || 'UNKNOWN';
                if (seen.has(sku)) return;

                const wrappers = Array.from(doc.querySelectorAll('.oms-product-options-wrapper'));
                const mods = [];

                for (const wrapper of wrappers) {
                    if (wrapper.classList.contains('display-hide')) continue;
                    const label = wrapper.querySelector('label span')?.textContent?.trim();
                    if (!label) continue;

                    const typeAttr = wrapper.getAttribute('data-option-type');
                    const typeLabel = typeAttr === 'checkbox' ? 'checkbox'
                        : typeAttr === 'field' ? 'field'
                            : typeAttr === 'drop_down' ? 'dropdown'
                                : null;
                    if (!typeLabel) continue;

                    if (typeAttr === 'checkbox') {
                        const input = wrapper.querySelector('input[type="checkbox"]');
                        const priceNum = parseFloat(input?.getAttribute('price') || '0');
                        mods.push(`${label}: {${typeLabel}} (+$${priceNum.toFixed(2)})`);
                    }
                    else if (typeAttr === 'drop_down') {
                        const options = Array.from(wrapper.querySelectorAll('option'))
                            .filter(opt => !opt.textContent.startsWith('--'));
                        const optsArr = options.map(opt => {
                            let name = opt.textContent.trim().replace(/\s*\+.*$/, '');
                            if (/^Cut\s+Base-\d+\"?$/.test(name)) {
                                name = name.replace(/Cut\s+Base-(\d+\"?)/, 'Cut Base to $1');
                            }
                            const priceNum = parseFloat(opt.getAttribute('price') || '0');
                            return `${name} (+$${priceNum.toFixed(0)})`;
                        });
                        if (optsArr.length) {
                            mods.push(`${label}: {${typeLabel}} [${optsArr.join(',')}]`);
                        }
                    }
                    else if (typeAttr === 'field') {
                        const priceSpan = wrapper.querySelector('span.price-wrapper');
                        const priceNum = priceSpan
                            ? parseFloat(priceSpan.textContent.replace(/[^0-9.]/g, '')) || 0
                            : 0;
                        mods.push(`${label}: {${typeLabel}} (+$${priceNum.toFixed(2)})`);
                    }
                }

                const customMods = mods.length ? mods.join('; ') : 'None';
                window.allMods.push({ sku, customMods });
                seen.add(sku);

                console.clear();
                console.table(window.allMods, ['sku', 'customMods']);
            } catch (err) {
                console.warn('❌ Error parsing custom mods:', err);
            }
        });

        return origSend.apply(this, arguments);
    };

    // 3) HELPER: DELAY
    const delay = ms => new Promise(res => setTimeout(res, ms));

    // 4) MAIN ASYNC FUNCTION: OPEN EACH “VIEW ALL” MODAL, SCROLL, CLICK MOD BUTTONS, THEN CLOSE
    (async () => {
        const buttons = Array.from(document.querySelectorAll('button, a'))
            .filter(el => el.textContent.trim().toUpperCase() === 'VIEW ALL');
        const total = buttons.length;
        if (total === 0) {
            console.warn('❌ No “VIEW ALL” buttons found.');
            return;
        }

        for (let i = 0; i < total; i++) {
            const isLast = i === total - 1;
            const openDelay = isLast ? 8000 : 4000;
            const appearDelay = isLast ? 8000 : 4000;
            const finalBuffer = isLast ? 8000 : 4000;
            const closeDelay = isLast ? 8000 : 4000;
            const betweenDelay = isLast ? 8000 : 4000;

            console.log(`➡️ Opening modal #${i + 1}/${total}`);
            buttons[i].click();
            await delay(openDelay);

            // 5) Wait for the bottom-most visible modal to appear
            let modal, attempts = 0;
            while (attempts < 20) {
                const visibleModals = Array.from(document.querySelectorAll('aside.modal-popup.modal-slide'))
                    .filter(el => getComputedStyle(el).display !== 'none');
                modal = visibleModals[visibleModals.length - 1];
                if (modal) break;
                await delay(300);
                attempts++;
            }

            if (!modal) {
                console.warn(`❌ Modal #${i + 1} didn’t appear.`);
                continue;
            }

            await delay(appearDelay);

            // 6) Force scrolling with stability detection inside the detected modal
            const contentEl = modal.querySelector('[id^="modal-content-"]');
            if (!contentEl) {
                console.warn(`❌ Could not find modal content container for modal #${i + 1}.`);
                continue;
            }

            console.log(`🔁 [MODAL ${i + 1}] Forcing smooth‐scroll…`);
            let lastRowCount = contentEl.querySelectorAll('tr.item').length;
            let stableCount = 0;
            const maxStable = 30;
            const scrollIntervalMs = 150;
            const scrollAmountPx = 150;
            let scrolling = true;

            const scrollLoop = setInterval(() => {
                if (!scrolling) return;
                contentEl.scrollBy({ top: scrollAmountPx, behavior: 'smooth' });
            }, scrollIntervalMs);

            while (stableCount < maxStable) {
                await delay(1000);
                const currentRowCount = contentEl.querySelectorAll('tr.item').length;
                if (currentRowCount === lastRowCount) {
                    stableCount++;
                } else {
                    stableCount = 0;
                    lastRowCount = currentRowCount;
                }
            }

            scrolling = false;
            clearInterval(scrollLoop);
            await delay(finalBuffer);
            console.log(`🔁 [MODAL ${i + 1}] Scrolling complete; ${lastRowCount} rows loaded.`);

            // 7) CLICK EACH “MODIFICATIONS” BUTTON IN THE FULLY LOADED TABLE
            const rows = Array.from(contentEl.querySelectorAll('tr.item'))
                .filter(row => row.querySelector('td.modifications a'));
            console.log(`🔢 [MODAL ${i + 1}] Found ${rows.length} rows with mod buttons.`);
            for (const row of rows) {
                if (STOP) break;
                const sku = row.querySelector('.item-sku-span')?.textContent?.trim();
                const modBtn = row.querySelector('td.modifications a');
                if (!sku || !modBtn || seen.has(sku)) continue;

                row.scrollIntoView({ behavior: 'smooth', block: 'center' });
                await delay(1000);
                console.log(`🔄 Clicking mod icon for ${sku}`);
                modBtn.click();
                await delay(5000); // wait for XHR hook to capture customMods
            }

            console.log(`✅ [MODAL ${i + 1}] Custom-mod scraping complete.`);

            // 8) CLOSE THE MODAL
            const closeBtn = modal.querySelector('button.action-close[data-role="closeBtn"]');
            if (closeBtn) {
                closeBtn.scrollIntoView({ behavior: 'instant', block: 'center' });
                ['mousedown', 'mouseup', 'click'].forEach(type =>
                    closeBtn.dispatchEvent(new MouseEvent(type, { bubbles: true, cancelable: true }))
                );
                console.log(`✅ Closed modal #${i + 1}`);
                await delay(closeDelay);
            } else {
                console.warn(`⚠️ Could not find close button in modal #${i + 1}.`);
            }

            await delay(betweenDelay);
        }

        // 9) ALL MODALS PROCESSED — EXPORT RESULTS TO CSV
        console.log('📦 All modals processed. Preparing CSV...');
        await delay(1000);

        const csvHeaders = ['sku', 'customMods'];
        const rowsOut = [csvHeaders.join(',')];
        window.allMods.forEach(item => {
            const row = csvHeaders.map(header => {
                const val = item[header] != null ? String(item[header]) : '';
                return `"${val.replace(/"/g, '""')}"`;
            });
            rowsOut.push(row.join(','));
        });
        const csvContent = rowsOut.join('\n');

        // 10) FILE NAMING LOGIC: SKU PREFIX FILTER + DATE + TIME (prefix = CustomMods_)
        const prefixSet = new Set();
        window.allMods.forEach(p => {
            const sku = typeof p.sku === 'string' ? p.sku.trim() : '';
            const dashIndex = sku.indexOf('-');
            if (dashIndex === 2 || dashIndex === 3) {
                const prefix = sku.slice(0, dashIndex);
                if (prefix.toUpperCase() !== 'PEG' && prefix) {
                    prefixSet.add(prefix);
                }
            } else {
                prefixSet.add('INSRT');
            }
        });
        const hasInsrt = prefixSet.has('INSRT');
        if (hasInsrt) prefixSet.delete('INSRT');
        const prefixArr = Array.from(prefixSet);
        if (hasInsrt) prefixArr.push('INSRT');
        const prefixStr = prefixArr.join(',');

        const now = new Date();
        const dateStr = `${now.getMonth() + 1}.${now.getDate()}.${String(now.getFullYear()).slice(-2)}`;
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const h12 = hours % 12 || 12;
        const mStr = String(minutes).padStart(2, '0');
        const ampm = hours >= 12 ? 'p' : 'a';
        const timeStr = `${h12}${mStr}${ampm}`;
        const count = window.allMods.length;
        const filename = `CustomMods_${prefixStr}(${count})_${dateStr}_${timeStr}.csv`;

        // 11) DOWNLOAD CSV
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        console.log('✅ CSV download triggered:', filename);
    })();
})();