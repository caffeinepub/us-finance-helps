import Map "mo:core/Map";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";

actor {
  public type ResourceCategory = {
    #budgeting;
    #saving;
    #investing;
    #taxes;
    #credit;
    #loans;
    #retirement;
  };

  public type Resource = {
    title : Text;
    description : Text;
    url : Text;
    category : ResourceCategory;
  };

  let resources = Map.empty<Text, Resource>();

  public shared ({ caller }) func addResource(id : Text, title : Text, description : Text, url : Text, category : ResourceCategory) : async () {
    if (resources.containsKey(id)) {
      Runtime.trap("Resource with this ID already exists");
    };
    let resource : Resource = {
      title;
      description;
      url;
      category;
    };
    resources.add(id, resource);
  };

  public query ({ caller }) func getResource(id : Text) : async Resource {
    switch (resources.get(id)) {
      case (null) { Runtime.trap("Resource not found") };
      case (?resource) { resource };
    };
  };

  public query ({ caller }) func getAllResources() : async [Resource] {
    resources.values().toArray();
  };

  public query ({ caller }) func getResourcesByCategory(category : ResourceCategory) : async [Resource] {
    let filtered = resources.values().toArray().filter(
      func(resource) {
        resource.category == category;
      }
    );
    filtered;
  };

  public shared ({ caller }) func updateResource(id : Text, title : Text, description : Text, url : Text, category : ResourceCategory) : async () {
    switch (resources.get(id)) {
      case (null) { Runtime.trap("Resource not found") };
      case (?_) {
        let updatedResource : Resource = {
          title;
          description;
          url;
          category;
        };
        resources.add(id, updatedResource);
      };
    };
  };

  public shared ({ caller }) func deleteResource(id : Text) : async () {
    if (not resources.containsKey(id)) {
      Runtime.trap("Resource not found");
    };
    resources.remove(id);
  };
};
