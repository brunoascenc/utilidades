const doSomething = (): void => {
  // return something
  console.log('doSomething');
};

const doSomething2 = (): never => {
  //never stops
  throw 'never';
};

let vAny: any = 10;
let vUnknown: unknown = 10;

// let s1: string = vAny // can
let s2: string = vUnknown as string; //cant

let pageNumber: string = '1';
let numericPageNumber: number = pageNumber as unknown as number; // assign
