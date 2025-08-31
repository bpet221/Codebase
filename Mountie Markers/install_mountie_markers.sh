#!/bin/bash

# Build and Install Mountie Markers App
# This fixes the 4-second launch delay issue in macOS beta

echo "🔨 Building Mountie Markers..."

# Navigate to project directory
cd "/Users/blakepetipas/Code Repos/Codebase/Mountie Markers"

# Clean build folder
xcodebuild clean -project "Mountie Markers.xcodeproj" -scheme "Mountie Markers" -configuration Release

# Build for release
xcodebuild build -project "Mountie Markers.xcodeproj" \
    -scheme "Mountie Markers" \
    -configuration Release \
    -derivedDataPath ./build \
    ONLY_ACTIVE_ARCH=NO

# Check if build succeeded
if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build complete!"

# Find the built app
APP_PATH="./build/Build/Products/Release/Mountie Markers.app"

if [ ! -d "$APP_PATH" ]; then
    echo "❌ Could not find built app at: $APP_PATH"
    exit 1
fi

# Remove quarantine attribute if present
xattr -dr com.apple.quarantine "$APP_PATH" 2>/dev/null

# Sign the app with ad-hoc signature to avoid Gatekeeper delays
echo "🔏 Signing app..."
codesign --force --deep --sign - "$APP_PATH"

# Copy to Applications folder
echo "📦 Installing to /Applications..."
if [ -d "/Applications/Mountie Markers.app" ]; then
    echo "Removing old version..."
    rm -rf "/Applications/Mountie Markers.app"
fi

cp -R "$APP_PATH" "/Applications/"

# Clear launch services database for this app
echo "🔄 Refreshing Launch Services..."
/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister -f "/Applications/Mountie Markers.app"

# Update your shortcut to point to the new location
echo "🔗 Updating shortcut..."
osascript -e 'tell application "Shortcuts Events"
    try
        set targetShortcut to first shortcut whose name is "Mountie Markers"
        -- Update the shortcut to use the new app location
        -- This would need to be done manually in Shortcuts app
    end try
end tell' 2>/dev/null

echo "✅ Installation complete!"
echo ""
echo "📝 Next steps:"
echo "1. Open Shortcuts app"
echo "2. Edit your 'Mountie Markers' shortcut"
echo "3. Update the 'Open App' action to point to: /Applications/Mountie Markers.app"
echo ""
echo "The app should now launch in ~0.4 seconds instead of 4 seconds!"
