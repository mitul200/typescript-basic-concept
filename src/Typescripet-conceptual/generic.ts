type MyArray<T> = Array<T>;

// T == number

const myNumber: MyArray<number> = [1, 2, 3, 4];
const mystring: MyArray<string> = ["1", "2", "3", "4"];
const myboolean: MyArray<boolean> = [false, true, false, true];

type dataType = { name: string; age: number };

const data: MyArray<dataType> = [
  { name: "khaled", age: 25 },
  { name: "emu", age: 34 },
  { name: "Mitul", age: 32 },
];

// tuple in generic

type MyGeneric<x, y> = [x, y];

const A: MyGeneric<number, string> = [12, "mitul"];
const b: MyGeneric<string, boolean> = ["asdf", true];

// generig in function

const myFunc = <p, q>(params1: p, params2: q) => {
  return console.log(`params1 ${params1} , params ${params2}`);
};

myFunc<string, number>("asdf", 88);
myFunc<boolean, number>(true, 88);
myFunc<string, string>("asdf", " string");

// interface in generic

interface IMe<T, U> {
  name: string;
  age: T;
  mark: U;
}

const me: IMe<string, number> = {
  name: "firoze",
  age: "23yesr",
  mark: 32,
};
