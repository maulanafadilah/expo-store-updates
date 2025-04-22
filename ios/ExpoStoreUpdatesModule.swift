import ExpoModulesCore

public class ExpoStoreUpdatesModule: Module {
  
  public func definition() -> ModuleDefinition {
   
    Name("ExpoStoreUpdates")

    Function("hello") {
      return "Hello world! 👋"
    }

    AsyncFunction("checkAppVersion") { (bundleId: String, currentVersion: String) -> [String: Any] in
      do {
        let url = URL(string: "https://itunes.apple.com/lookup?bundleId=\(bundleId)")!
        let (data, response) = try await URLSession.shared.data(from: url)
        guard let httpResponse = response as? HTTPURLResponse, httpResponse.statusCode == 200 else {
          throw NSError(domain: "ExpoStoreUpdates", code: 1, userInfo: [NSLocalizedDescriptionKey: "Failed to fetch app data"])
        }
        let json = try JSONSerialization.jsonObject(with: data, options: []) as! [String: Any]
        guard let results = json["results"] as? [[String: Any]], let appInfo = results.first else {
          throw NSError(domain: "ExpoStoreUpdates", code: 2, userInfo: [NSLocalizedDescriptionKey: "App not found"])
        }
        let latestVersion = appInfo["version"] as! String
        let appStoreUrl = appInfo["trackViewUrl"] as! String
        let needsUpdate = latestVersion.compare(currentVersion, options: .numeric) == .orderedDescending
        return [
          "currentVersion": currentVersion,
          "latestVersion": latestVersion,
          "needsUpdate": needsUpdate,
          "appStoreUrl": appStoreUrl
        ]
      } catch {
        throw error
      }
    }

  }
}
