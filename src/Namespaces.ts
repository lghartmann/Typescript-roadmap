// myNamespace.ts
namespace MyNamespace {
  export function doSomething() {
    console.log("Doing something...");
  }
}

// main.ts
/// <reference path="myNamespace.ts" />
MyNamespace.doSomething(); // Output: "Doing something..."
