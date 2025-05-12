# 1. Set fixed coordinates
xpos=1751
ypos=54
window_width=1343
window_height=970

# 2. Run AppleScript using the fixed coordinates
/usr/bin/osascript <<END
tell application "System Events"
    tell process "Grok"
        -- Move and resize Grok window (only try once)
        try
            set position of window 1 to {${xpos}, ${ypos}}
            set size of window 1 to {${window_width}, ${window_height}}
        on error
            -- Ignore errors
        end try

        -- Zoom keystrokes (optimized)
        delay 0.2
        keystroke "0" using {command down}
        delay 0.2
        repeat 2 times -- Adjust how much you want to zoom
            keystroke "+" using {command down}
            delay 0.1
        end repeat
    end tell
end tell
END
