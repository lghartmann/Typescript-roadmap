// myModule.d.ts
declare module "my-module" {
  export function doSomething(): void;
}

// main.ts
import * as myModule from "my-module";
myModule.doSomething();
