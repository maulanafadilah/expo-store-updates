import ExpoModulesCore

public class ExpoStoreUpdatesModule: Module {
  
  public func definition() -> ModuleDefinition {
   
    Name("ExpoStoreUpdates")

    Function("hello") {
      return "Hello world! 👋"
    }

  }
}
