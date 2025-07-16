import AppKit

let path = "/System/Applications/System Settings.app"
let url = URL(fileURLWithPath: path)

let config = NSWorkspace.OpenConfiguration()
config.activates = false
config.hides = true

NSWorkspace.shared.openApplication(at: url, configuration: config)
