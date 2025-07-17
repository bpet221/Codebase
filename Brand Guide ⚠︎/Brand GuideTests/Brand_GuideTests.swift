import SwiftUI

@main
struct Brand_GuideApp: App {
    var body: some Scene {
        WindowGroup {
            BrandGuideView() // ← not ContentView!
        }
        .windowStyle(HiddenTitleBarWindowStyle())
    }
}

struct BrandGuideView: View {
    var body: some View {
        ZStack {
            RoundedRectangle(cornerRadius: 16, style: .continuous)
                .fill(.ultraThinMaterial)

            if let image = NSImage(contentsOfFile: "/Users/blakepetipas/Documents/Business/IronKlad/Logos/Kitchen & Cabinet Store Logos/KCS Brand Guide.png") {
                Image(nsImage: image)
                    .resizable()
                    .scaledToFit()
                    .padding(12)
            } else {
                Text("Image not found")
                    .foregroundColor(.red)
            }
        }
        .frame(width: 300, height: 400)
        .ignoresSafeArea()
    }
}
