package expo.modules.storeupdates

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.net.URL

class ExpoStoreUpdatesModule : Module() {
  
  override fun definition() = ModuleDefinition {
    
    Name("ExpoStoreUpdates")

    Function("hello") {
      "Hello world! 👋"
    }

  }
}
