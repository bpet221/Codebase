----------------------------------------------------------------
-- 🟢 KCS Brand Guide Desktop Custom Widget [7.17.25]
-- 🗒️ Desktop widget. Click/hotkey zoom & brings front. Arrow keys moves to other displays with arrow keys.
----------------------------------------------------------------
hs.ipc.cliInstall()

-- 🧩 Declare arrow hotkey variables early for applyZoom scope
local leftHotkey, rightHotkey, upHotkey, downHotkey = nil, nil, nil, nil

-- 📏 Zoom state
local zoomed = false

local imagePathSM = "/Users/blakepetipas/Code Repos/Codebase/Hammerspoon/KCS Brand Guide Widget SM.png"
local imagePathLG = "/Users/blakepetipas/Code Repos/Codebase/Hammerspoon/KCS Brand Guide Widget LG.png"

-- 📺 Real main display = screen with frame.x == 0
local function getRealMainScreen()
    for _, screen in ipairs(hs.screen.allScreens()) do
        if math.floor(screen:frame().x) == 0 then
            return screen
        end
    end
    return hs.screen.primaryScreen()
end

-- 📄 Image selector
local function getImage()
    return hs.image.imageFromPath(zoomed and imagePathLG or imagePathSM)
end

-- 📏 Base position and layout
local baseX, baseY = 16, 226
local baseW, baseH = 164, 282
local currentZoomedScreen = getRealMainScreen()
local lastUnzoomedY = baseY + currentZoomedScreen:frame().y
local lastZoomedY = nil

-- 🔁 Force-load required modules
local mouse = hs.mouse

-- 🖌️ Create canvas, anchored top-left
local kcsCanvas = hs.canvas.new({
    x = baseX,
    y = baseY,
    w = baseW,
    h = baseH
})
kcsCanvas:appendElements({{
    type = "image",
    image = getImage(),
    frame = {
        x = 0,
        y = 0,
        w = "100%",
        h = "100%"
    },
    imageScaling = "scaleProportionally",
    imageAlignment = "topLeft"
}})
kcsCanvas:level(hs.canvas.windowLevels.desktopIcon + 1)
kcsCanvas:behavior({hs.canvas.windowBehaviors.canJoinAllSpaces, hs.canvas.windowBehaviors.ignoresCycle})
kcsCanvas:show()

-- 🔍 Zoom logic — expand to bottom of screen, shrink back. Maintain non-zoomed image height from top screen edge.

function applyZoom()
    hs.console.printStyledtext("🌀 applyZoom() called — zoomed = " .. tostring(zoomed))
    -- 🧩 enable or disable arrow keys based on zoom state
    if leftHotkey and rightHotkey and upHotkey and downHotkey then
        if zoomed then
            leftHotkey:enable()
            rightHotkey:enable()
            upHotkey:enable()
            downHotkey:enable()
        else
            leftHotkey:disable()
            rightHotkey:disable()
            upHotkey:disable()
            downHotkey:disable()
        end
    end
    local screen = zoomed and currentZoomedScreen or getRealMainScreen()
    local fullFrame = screen:fullFrame()

    local function buildElements()
        return {{
            type = "image",
            image = getImage(),
            frame = {
                x = 0,
                y = 0,
                w = "100%",
                h = "100%"
            },
            imageScaling = "scaleProportionally",
            imageAlignment = "topLeft"
        }, {
            type = "rectangle",
            action = "fill",
            fillColor = {
                alpha = 0
            },
            trackMouseDown = true,
            frame = {
                x = 0,
                y = 0,
                w = "100%",
                h = "100%"
            },
            id = "clickOverlay"
        }}
    end

    if zoomed then
        hs.console.printStyledtext("🔍 Zooming IN to screen: " .. tostring(currentZoomedScreen:name()))
        hs.console.printStyledtext("📐 Full frame: " .. hs.inspect(fullFrame))
        local topY = fullFrame.y + 226
        lastZoomedY = topY
        local bottomLimit = fullFrame.y + fullFrame.h - 5
        local scale = (bottomLimit - topY) / baseH
        kcsCanvas:level(hs.canvas.windowLevels.status)
        kcsCanvas:frame({
            x = baseX + fullFrame.x,
            y = topY,
            w = baseW * scale,
            h = baseH * scale
        })
        kcsCanvas:replaceElements(buildElements())
        kcsCanvas:mouseCallback(function(_, eventType, element)
            if eventType == "mouseDown" and element == "clickOverlay" then
                zoomed = false
                applyZoom()
            end
        end)
    else
        hs.console.printStyledtext("🔎 Unzooming — Returning to default small state on main display")
        kcsCanvas:level(hs.canvas.windowLevels.desktopIcon + 1)
        kcsCanvas:frame({
            x = baseX,
            y = baseY,
            w = baseW,
            h = baseH
        })
        kcsCanvas:replaceElements(buildElements())
        kcsCanvas:mouseCallback(function(_, eventType, element)
            if eventType == "mouseDown" and element == "clickOverlay" then
                hs.console.printStyledtext(
                    "🖱️ Click triggered zoom — setting currentZoomedScreen = mainScreen() (" ..
                        getRealMainScreen():name() .. ")")
                currentZoomedScreen = getRealMainScreen()
                zoomed = true
                applyZoom()
            end
        end)
    end
end

-- 🎛️ HOTKEY: Toggle KCS Brand Guide Zoom (PgDn)
hs.hotkey.bind({}, "pagedown", function()
    if not zoomed then
        hs.console.printStyledtext("🔑 PgDn pressed while unzoomed")
        local trueMain = getRealMainScreen()
        hs.console.printStyledtext("🖥️ realMainScreen() = " .. trueMain:name())
        lastUnzoomedY = kcsCanvas:frame().y
        currentZoomedScreen = trueMain
    end
    zoomed = not zoomed
    hs.console.printStyledtext("🔄 Toggling zoomed = " .. tostring(zoomed))
    applyZoom()
end)

leftHotkey = hs.hotkey.new({}, "left", function()
    hs.console.printStyledtext("⬅️ Left arrow pressed — zoomed = " .. tostring(zoomed))
    if not zoomed then
        return false
    end
    local leftScreen = currentZoomedScreen:toWest()
    if not leftScreen then
        hs.alert.show("🛑 No screen to the left")
        return
    end

    local canvasFrame = kcsCanvas:frame()
    local offsetX = canvasFrame.x - currentZoomedScreen:frame().x
    currentZoomedScreen = leftScreen
    local newFrame = leftScreen:frame()
    local newY = (leftScreen == getRealMainScreen() and lastZoomedY) or (newFrame.y + 20)

    kcsCanvas:frame({
        x = newFrame.x + offsetX,
        y = newY,
        w = canvasFrame.w,
        h = canvasFrame.h
    })
end)

rightHotkey = hs.hotkey.new({}, "right", function()
    hs.console.printStyledtext("➡️ Right arrow pressed — zoomed = " .. tostring(zoomed))
    if not zoomed then
        return false
    end
    local rightScreen = currentZoomedScreen:toEast()
    if not rightScreen then
        hs.alert.show("🛑 No screen to the right")
        return
    end

    local canvasFrame = kcsCanvas:frame()
    local offsetX = canvasFrame.x - currentZoomedScreen:frame().x
    currentZoomedScreen = rightScreen
    local newFrame = rightScreen:frame()
    local newY = (rightScreen == getRealMainScreen() and lastZoomedY) or (newFrame.y + 20)

    kcsCanvas:frame({
        x = newFrame.x + offsetX,
        y = newY,
        w = canvasFrame.w,
        h = canvasFrame.h
    })
end)

-- 🧩 Up/down arrow hotkeys for moving zoomed image (initially disabled)
upHotkey = hs.hotkey.new({}, "up", function()
    hs.console.printStyledtext("⬆️ Up arrow pressed — zoomed = " .. tostring(zoomed))
    if not zoomed then
        return
    end
    local northScreen = currentZoomedScreen:toNorth()
    if not northScreen then
        hs.alert.show("🛑 No screen above");
        return
    end
    local canvasFrame = kcsCanvas:frame()
    local offsetX = canvasFrame.x - currentZoomedScreen:frame().x
    local offsetY = canvasFrame.y - currentZoomedScreen:frame().y
    currentZoomedScreen = northScreen
    local newFrame = northScreen:frame()
    kcsCanvas:frame({
        x = newFrame.x + offsetX,
        y = newFrame.y + offsetY,
        w = canvasFrame.w,
        h = canvasFrame.h
    })
end)

downHotkey = hs.hotkey.new({}, "down", function()
    hs.console.printStyledtext("⬇️ Down arrow pressed — zoomed = " .. tostring(zoomed))
    if not zoomed then
        return
    end
    local southScreen = currentZoomedScreen:toSouth()
    if not southScreen then
        hs.alert.show("🛑 No screen below");
        return
    end
    local canvasFrame = kcsCanvas:frame()
    local offsetX = canvasFrame.x - currentZoomedScreen:frame().x
    local offsetY = canvasFrame.y - currentZoomedScreen:frame().y
    currentZoomedScreen = southScreen
    local newFrame = southScreen:frame()
    kcsCanvas:frame({
        x = newFrame.x + offsetX,
        y = newFrame.y + offsetY,
        w = canvasFrame.w,
        h = canvasFrame.h
    })
end)

-- 🧩 disable all arrow hotkeys by default
leftHotkey:disable()
rightHotkey:disable()
upHotkey:disable()
downHotkey:disable()

-- 🧩 Initialize overlay state properly on launch
applyZoom()

----------------------------------------------------------------
-- 🛑  KCS Brand Guide Desktop Custom Widget
----------------------------------------------------------------

----------------------------------------------------------------
-- 🟢 Launch iTerm on Active Display – Trigger (Multi-Window Support + Dock Click Focus)
----------------------------------------------------------------

hs.urlevent.bind("launch_iterm_active_display", function()
    local screen = hs.mouse.getCurrentScreen()
    local frame = screen:frame()

    hs.application.launchOrFocus("/Applications/iTerm.app")

    hs.timer.doAfter(0.5, function()
        local app = hs.application.get("iTerm2")
        if not app then
            return
        end

        local windows = app:allWindows()
        if #windows == 0 then
            hs.osascript.applescript([[
        tell application "iTerm"
          create window with default profile
        end tell
      ]])
            hs.timer.doAfter(0.4, function()
                local newWin = app:mainWindow()
                if newWin then
                    newWin:setFrame(hs.geometry.rect(frame.x + 100, frame.y + 100, 900, 600))
                    hs.osascript.applescript([[
            tell application "System Events"
              tell process "Dock"
                click UI element "iTerm" of list 1
              end tell
            end tell
          ]])
                end
            end)
        else
            for i = 1, math.min(5, #windows) do
                local win = windows[i]
                if win then
                    win:setFrame(hs.geometry.rect(frame.x + 100 + ((i - 1) * 40), frame.y + 100 + ((i - 1) * 40), 900,
                        600))
                end
            end
            hs.osascript.applescript([[
        tell application "System Events"
          tell process "Dock"
            click UI element "iTerm" of list 1
          end tell
        end tell
      ]])
        end
    end)
end)

----------------------------------------------------------------
-- 🛑 Launch iTerm on Active Display – Trigger (Multi-Window Support + Dock Click Focus)
----------------------------------------------------------------

----------------------------------------------------------------
--  █████ 🖥️ 45 MOVE FOCUSED WINDOW TO 23% WIDTH POSITION ON DISPLAY (0,0) 3840x1080 
-- ❌(NOT BEING USED IT DID NOT MOVE TO CORRECT DISPLAY WINDOW)
----------------------------------------------------------------

hs.urlevent.bind("moveFocusedWindowCustom", function()
    local win = hs.window.focusedWindow()
    if not win then
        hs.alert.show("No focused window")
        return
    end

    -- 🔍 Find the screen with origin (0,0) and resolution 3840x1080
    local targetScreen = nil
    for _, screen in ipairs(hs.screen.allScreens()) do
        local f = screen:frame()
        if f.x == 0 and f.y == 0 and f.w == 3840 and f.h == 1080 then
            targetScreen = screen
            break
        end
    end

    if not targetScreen then
        hs.alert.show("🛑 Target display (0,0) not found")
        return
    end

    -- 🚀 Move window to the target screen
    win:moveToScreen(targetScreen, false, true) -- (no animation, preserve relative position)

    -- 🎯 Resize window to exact target position on that screen
    local f = targetScreen:frame()
    local targetWidth = f.w * 0.23
    local targetX = f.x + (f.w * 0.6845)
    local targetY = f.y + (f.h * 0.159)
    local targetHeight = f.h

    win:setFrame(hs.geometry.rect(targetX, targetY, targetWidth, targetHeight))
end)

-- ALLOWS AUTO Reload Config From Shortcuts
hs.urlevent.bind("reload", function()
    hs.reload()
end)

-- 🛠️ Install or ensure `hs` CLI tool is present
local hsPath = os.getenv("HOME") .. "/bin"
if hs.fs.attributes(hsPath) and hs.ipc.cliInstall then
    hs.ipc.cliInstall(hsPath)
end

-- 🔍 Chrome Ctrl+Option+Click Watcher for Auto Copy + Karabiner Trigger
local eventtap = hs.eventtap
local eventTypes = eventtap.event.types

local clickWatcher = eventtap.new({eventTypes.leftMouseDown}, function(ev)
    local flags = ev:getFlags()
    local appName = hs.application.frontmostApplication():name()

    if flags.ctrl and flags.alt and appName == "Google Chrome" then
        local mousePos = hs.mouse.absolutePosition()

        -- Simulate right-click to select link
        hs.eventtap.rightClick(mousePos)

        -- Wait a bit for context menu, then copy
        hs.timer.doAfter(0.1, function()
            hs.eventtap.keyStroke({"cmd"}, "c")

            -- After copy, fire the Karabiner shortcut combo
            hs.timer.doAfter(0.25, function()
                hs.eventtap.event.newKeyEvent({"rightshift", "leftctrl", "alt"}, ".", true):post()
                hs.eventtap.event.newKeyEvent({"rightshift", "leftctrl", "alt"}, ".", false):post()
            end)
        end)
    end
    return false
end)

clickWatcher:start()
