/**
 *  Readonly: transforma em readonly
 *  */

type TypeReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

let obj = { x: 10, y: 20 };
// {
//   x: number;
//   y: number;
// }

let readonlyObj: Readonly<typeof obj> = obj;

// Readonly<{
//   x: number;
//   y: number;
// }>

/**
 * Conditional: um tipo baseado em uma condição
 * */

type Extends<T, U> = T extends U ? T : U;

type A = Extends<string, any>;
// type A = string

type B = Extends<any, string>;
// type B = any

/**
 * Literal: um valor específico como tipo
 *   */

type Age = 42;

let age: Age = 42;

let age2: Age = 43;
// Type '43' is not assignable to type '42'.

/**
 * Template Literal: permite voce inserir um trecho específico de string (valor) no tipo
 */

type Greeting = `Hello Mr. ${string}`;

let greetingSmith: Greeting = "Hello Mr. Smith";
// let greetingSmith: `Hello Mr. ${string}`

/**
 * Recursive Types: permitem que um tipo se referencie na declaração
 */

type LinkedList<T> = {
  value: T;
  next: LinkedList<T> | null;
};

let list: LinkedList<number> = {
  value: 1,
  next: { value: 2, next: { value: 3, next: null } },
};
