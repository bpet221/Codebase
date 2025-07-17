import SwiftUI

@main
struct Brand_GuideApp: App {
    var body: some Scene {
        WindowGroup {
            BrandGuideView()
        }
        .windowStyle(HiddenTitleBarWindowStyle())
    }
}

struct BrandGuideView: View {
    var body: some View {
        ZStack {
            RoundedRectangle(cornerRadius: 16, style: .continuous)
                .fill(.ultraThinMaterial)

            VStack(spacing: 12) {
                Text("LOADED")
                    .foregroundColor(.white)
                    .font(.headline)

                if let image = NSImage(named: "test_widget_image") {
                    Image(nsImage: image)
                        .resizable()
                        .scaledToFit()
                        .padding(12)
                } else {
                    Image(systemName: "star.fill")
                        .resizable()
                        .scaledToFit()
                        .foregroundColor(.yellow)
                        .padding(12)
                }
            }
        }
        .frame(width: 300, height: 400)
        .ignoresSafeArea()
        .onAppear {
            logDebugInfo()
        }
    }

    func logDebugInfo() {
        print("🧪 BrandGuideView appeared")
        print("Bundle path:", Bundle.main.bundlePath)
        if let resourcePath = Bundle.main.path(forResource: "test_widget_image", ofType: "png") {
            print("✅ Found PNG in bundle at:", resourcePath)
        } else {
            print("❌ PNG not found in bundle for: test_widget_image")
        }
    }
}
