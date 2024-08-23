/**
 * O typescript fornece vários tipos utilitários que podem ser utilizados para manipular e transformar tipos existentes.
 * Aqui estão alguns exemplos dos mais comuns:
 */

type MainObject = {
  name: string;
  age: number;
  gender: "male" | "female";
  email: string;
};

type ExtraObject = {
  name: string;
  age: number;
  gender: "male" | "female";
  address: string;
};

type SecondObject = {
  name: string;
  age: number;
  gender: "male" | "female";
};

/**
 * Partial: Transforma todas as propriedades de um tipo em opcional.
 */

type PartialObject = Partial<MainObject>;

// type PartialObject = {
//     name?: string | undefined;
//     age?: number | undefined;
//     gender?: "male" | "female" | undefined;
//     email?: string | undefined;
// }

/**
 * Readonly: transforma todas as propriedades em apenas readonly, impedindo reatribuição.
 */

type ReadonlyObject = Readonly<MainObject>;

// type ReadonlyObject = {
//     readonly name: string;
//     readonly age: number;
//     readonly gender: "male" | "female";
//     readonly email: string;
// }

/**
 * Pick: permite que você escolha alguma propriedade de um objeto.
 */

type PickObject = Pick<MainObject, "name">;

// type PickObject = {
//     name: string;
// }

/**
 * Omit: permite que você omita alguma propriedade de um objeto.
 */

type OmitObject = Omit<MainObject, "gender">;

// type OmitObject = {
//     name: string;
//     age: number;
//     email: string;
// }

/**
 * Exclude: Cria um tipo a partir da diferença entre A e B.
 */

type ExcludeObject = Exclude<"a" | "b" | "c", "a" | "b">;

// type ExcludeObject = "c"

/**
 * Awaited: Usamos como tipo do dado retornado de uma promise resolvida.
 */

type APIResponse = Awaited<Promise<string>>;

// type APIResponse = string

/**
 * Record: O tipo Record constrói um objeto cujo as chaves são Keys e os valores são tipos.
 */

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

// const cats: Record<CatName, CatInfo>

/**
 * Extract: Cria um novo tipo a partir da semelhança entre A e B.
 */

type T0 = Extract<"a" | "b" | "c", "a" | "f">;

//  T0 = "a"

/**
 * Parameters: constrói um tipo tupla a partir dos tipos dos tipos de parâmetros de uma função
 */

function parametersTest(a: number, b: string, c: unknown) {
  console.log({ a, b, c });
}

type ParametersTest = Parameters<typeof parametersTest>;

// type ParametersTest = [a: number, b: string, c: unknown]

/**
 * NonNullable: constrói um tipo removendo qualquer null ou undefined do tipo
 */

type SomethingNullable = string | number[] | null | undefined;

type SomethingButNonNullable = NonNullable<SomethingNullable>;

// type SomethingButNonNullable = string | number[]

/**
 * ReturnType: constrói um tipo igual ao retorno do tipo de uma função
 */

function returnType(a: number): number {
  return a;
}

function complexReturn(a: number, b: string, c: boolean) {
  return { a, b, c };
}

type SimpleReturnType = ReturnType<typeof returnType>;

// type SimpleReturnType = number

type ComplexReturnType = ReturnType<typeof complexReturn>;

// type ComplexReturnType = {
//   a: number;
//   b: string;
//   c: boolean;
// }

/**
 * InstanceType: constrói um tipo baseado no tipo de uma função construtora
 */

class C {
  x = 0;
  y = 0;
}

type InstanceTypeOfC = InstanceType<typeof C>;

// type InstanceTypeOfC = C
