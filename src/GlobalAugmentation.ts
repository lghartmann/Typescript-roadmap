// myModule.d.ts
declare namespace NodeJS {
  interface Global {
    myGlobalFunction(): void;
  }
}

// main.ts
const myGlobalFunction = function () {
  console.log("I am a global function!");
};
global.myGlobalFunction = myGlobalFunction;

myGlobalFunction();
