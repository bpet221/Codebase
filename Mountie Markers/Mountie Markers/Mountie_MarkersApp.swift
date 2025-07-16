//
//  Mountie_MarkersApp.swift
//  Mountie Markers
//
//  Created by Blake Petipas on 5/8/25.
//

import SwiftUI
import AppKit
import CoreGraphics

@main
struct Mountie_MarkersApp: App {
    @NSApplicationDelegateAdaptor(AppDelegate.self) var appDelegate
    var body: some Scene {
        Settings {} // no visible window
    }
}

class AppDelegate: NSObject, NSApplicationDelegate {
    private var windows: [NSWindow] = []

    func applicationDidFinishLaunching(_ notification: Notification) {
        // ————— Reference distances (inches) —————
        let leftMarkerXInches: CGFloat           = 0.2764
        let leftMarkerYInches: CGFloat           = 1.6658
        let rightMarkerXInchesFromRight: CGFloat = 0.2764
        let rightMarkerYInches: CGFloat          = 1.6236
        let markerWidthInches: CGFloat           = 0.5
        let arrowWidthInches: CGFloat            = 0.3
        let labelHeightInches: CGFloat           = 0.08

        // Duet persistent UUID
        let duetUUID = UUID(uuidString: "366D0BEC-80B8-461B-964C-F8E3D3133C6E")

        for screen in NSScreen.screens {
            // Get display ID and frame in points
            guard let displayID = screen.deviceDescription[.init("NSScreenNumber")] as? CGDirectDisplayID else { continue }
            let frame = screen.frame

            // Detect Duet display via persistent UUID
            let isDuet: Bool = {
                guard let cfUuid = CGDisplayCreateUUIDFromDisplayID(displayID)?.takeRetainedValue(),
                      let uuidStr = CFUUIDCreateString(nil, cfUuid) as String?,
                      let uuid = UUID(uuidString: uuidStr)
                else { return false }
                return uuid == duetUUID
            }()

            // Determine physical size in inches
            let widthInches: CGFloat
            let heightInches: CGFloat
            if isDuet {
                widthInches  = 11.05
                heightInches =  8.28
            } else {
                let mmSize = CGDisplayScreenSize(displayID)
                widthInches  = mmSize.width  / 25.4
                heightInches = mmSize.height / 25.4
            }

            // Compute points-per-inch using frame (points)
            let ppiX = frame.size.width  / widthInches
            let ppiY = frame.size.height / heightInches

            // Compute sizes in points based on PPI
            let markerFontSize = markerWidthInches * ppiX
            let arrowFontSize  = arrowWidthInches  * ppiX
            let labelFontSize  = labelHeightInches  * ppiY

            // Compute marker positions in points
            let xLeft  = leftMarkerXInches * ppiX
            let yLeft  = leftMarkerYInches * ppiY
            let xRight = frame.size.width - (rightMarkerXInchesFromRight * ppiX)
            let yRight = rightMarkerYInches * ppiY

            // Prepare overlay view
            let overlay = OverlayView(
                screenSize: frame.size,
                markerFontSize: markerFontSize,
                arrowFontSize:  arrowFontSize,
                labelFontSize:  labelFontSize,
                xLeft: xLeft, yLeft: yLeft,
                xRight: xRight, yRight: yRight,
                ppiX: ppiX, ppiY: ppiY,
                markerWidthInches: markerWidthInches
            )

            // Create and show window
            let win = NSWindow(
                contentRect: frame,
                styleMask: .borderless,
                backing: .buffered,
                defer: false
            )
            win.isOpaque = false
            win.backgroundColor = .clear
            win.level = .screenSaver
            win.ignoresMouseEvents = true
            win.collectionBehavior = [.canJoinAllSpaces, .stationary, .ignoresCycle]
            win.contentView = NSHostingView(rootView: overlay)
            win.makeKeyAndOrderFront(nil)
            windows.append(win)
        }
    }
}

struct OverlayView: View {
    let screenSize: CGSize
    let markerFontSize: CGFloat
    let arrowFontSize: CGFloat
    let labelFontSize: CGFloat
    let xLeft: CGFloat, yLeft: CGFloat
    let xRight: CGFloat, yRight: CGFloat
    let ppiX: CGFloat, ppiY: CGFloat
    let markerWidthInches: CGFloat

    // Marker & label color (#FFD358)
    private let accentColor = Color(red: 1.0, green: 211/255, blue: 88/255)

    var body: some View {
        // Recalculate actual inches based on final positions
        let actualLeftX  = xLeft  / ppiX
        let actualLeftY  = yLeft  / ppiY
        let actualRightX = (screenSize.width - xRight) / ppiX
        let actualRightY = yRight / ppiY

        ZStack {
            // Four edge arrows
            // Up
            Text("⬆️")
                .font(.system(size: arrowFontSize))
                .fixedSize()
                .foregroundColor(accentColor)
                .position(x: screenSize.width/2, y: arrowFontSize/2)
            // Down
            Text("⬇️")
                .font(.system(size: arrowFontSize))
                .fixedSize()
                .foregroundColor(accentColor)
                .position(x: screenSize.width/2, y: screenSize.height - arrowFontSize/2)
            // Left
            Text("⬅️")
                .font(.system(size: arrowFontSize))
                .fixedSize()
                .foregroundColor(accentColor)
                .position(x: arrowFontSize/2, y: screenSize.height/2)
            // Right
            Text("➡️")
                .font(.system(size: arrowFontSize))
                .fixedSize()
                .foregroundColor(accentColor)
                .position(x: screenSize.width - arrowFontSize/2, y: screenSize.height/2)

            // Left marker + labels
            Text("👈")
                .font(.system(size: markerFontSize))
                .fixedSize()
                .foregroundColor(accentColor)
                .position(x: xLeft, y: yLeft)

            VStack(alignment: .center, spacing: 2) {
                Text(String(format: "T: %.2f\"", actualLeftY))
                Text(String(format: "L: %.2f\"", actualLeftX))
                Text(String(format: "W: %.2f\"", markerWidthInches))
            }
            .font(.custom("Fira Code", size: labelFontSize))
            .foregroundColor(accentColor)
            .fixedSize()
            .position(x: xLeft, y: yLeft + markerFontSize/2 + labelFontSize * 1.5)

            // Right marker + labels
            Text("👉")
                .font(.system(size: markerFontSize))
                .fixedSize()
                .foregroundColor(accentColor)
                .position(x: xRight, y: yRight)

            VStack(alignment: .center, spacing: 2) {
                Text(String(format: "T: %.2f\"", actualRightY))
                Text(String(format: "R: %.2f\"", actualRightX))
                Text(String(format: "W: %.2f\"", markerWidthInches))
            }
            .font(.custom("Fira Code", size: labelFontSize))
            .foregroundColor(accentColor)
            .fixedSize()
            .position(x: xRight, y: yRight + markerFontSize/2 + labelFontSize * 1.5)
        }
        .frame(width: screenSize.width, height: screenSize.height)
        .background(Color.clear)
    }
}
