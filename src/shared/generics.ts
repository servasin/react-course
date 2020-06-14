// Generics
const myArray: Array<number> = [1,2,3];

interface MyArray<T> {
  [N: number]: T

  map<U>(fn: (el: T, index: number, arr: MyArray<T>) => U): MyArray<U>
}

let variable = myArray[1];
myArray.map((f:number,  index: number, arr: MyArray<number>) => f + 1);
myArray.map((f:number) => `f + ${f}`);

[1,2,3].map((f:number, index: number, arr: number[]) => f + 1); // -> [2,3,4]
[1,2,3].map((f:number) => `f + ${f}`); // -> ['f + 1','f + 2','f + 3']

function identity<T>(arg: T): T {
  return arg;
}

let result_1 = identity(12);

function getLen<T extends Array<any>>(arr: T): number {
  return arr.length;
}

getLen([1,3,4]);

interface IValueWithType<T> {
  type: string;
  value: T;
}

function withType<U>(arg: U): IValueWithType<U> {
  return {
    type: typeof arg,
    value: arg,
  }
}

const result_2 = withType(123);

// Встроенные generics

interface IExample<T> {
  type: string;
  value: T;
  isEmpty: boolean;
}

// исключает ключи
const omittedObject: Omit<IExample<string>, 'isEmpty' | 'value'> = {
  type: 'asd'
}

// включает ключи
const picked: Pick<IExample<number>, 'isEmpty' | 'value'> = {
  isEmpty: true,
  value: 1,
}

// делает все ключи необязательными
const partial: Partial<IExample<object>> = {
  
}