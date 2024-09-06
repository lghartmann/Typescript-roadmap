// myModule.d.ts
declare namespace MyModule {
  export interface MyModule {
    newFunction(): void;
  }
}

// main.ts
/// <reference path="myModule.d.ts" />
namespace MyModule {
  export class MyModule {
    public newFunction() {
      console.log("I am a new function in MyModule!");
    }
  }
}

const obj = new MyModule.MyModule();
obj.newFunction(); // Output: "I am a new function in MyModule!"
