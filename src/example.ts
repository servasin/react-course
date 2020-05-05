const str = 'string';


let tsStr = 'abc';

function sumTS(arr: number[]) {
  return arr.reduce((a: number, v: number) => a + v);
}

const tsNumber = 2;
const tsString = 'str';

const result = tsString + tsNumber;
const result2 = parseInt(tsString) - tsNumber;

// Union types
const strOrNumber: string | number = 1;

// Type alias
type strOrNumber = string | number;

const strOrNumber1: strOrNumber = 1;
const strOrNumber2: strOrNumber = 1;
const strOrNumber3: strOrNumber = 1;
const strOrNumber4: strOrNumber = 1;

type AllJsSimpleTypes = string | number | [] | object | undefined | null | boolean | void | symbol;

// Array 
const tsArray: number[] = [1,2,3];
const tsArrayGeneric: Array<number> = [];

const unionArray:(string | number)[] = [1, '2', 3, '4']
const unionArray2:Array<string | number> = [1, '2', 3, '4']

// Tuple 
const myTyple: [number, string] = [1, '2'];

// const [state, setState] = useState();

// Object
type MyObjectType = { a: number, b: string };
const myObj: MyObjectType = { a:1, b:'2' };

interface MyFirstInterface {
  readonly a: number;
  readonly b: string;
  c?: number[];
}

const myObj2: MyFirstInterface = {
  a: 2,
  b: 'ff',
  c: [1,2]
}

const value = myObj2.a;

if(myObj2.c) {
  const val = myObj2.c;
}

const ApiAnswer: IndexInterface = { key1: 'abc', key2: 'bcd' };

const val3 = ApiAnswer.randomKey;

interface IndexInterface {
  [N: string]: string;
}

enum Methods {
  add = 0,
  sub = 1,
}

// calculate('add', 5, 5) // --> 10
function calculate(method: Methods, left: number, right: number): number {
  switch(method) {
    case Methods.add: return left + right;
    case Methods.sub: return left - right;
  }
}

const sum = calculate(Methods.add, 2, 2);

const ArrowFn: FnInterface = (value) => 2;

// Type alias for functions
type TypeFn = () => number;

interface FnInterface {
  (a: number): void;
}

type StrangeTsTypes = any | unknown | never;

const some: any = '2';

//  определяем тип потом
const un: unknown = 2;

// never это функция которая никогда не доработает до конца
function neverFn(): never {
  throw new Error('my exeption');
}