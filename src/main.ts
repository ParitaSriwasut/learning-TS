//Simple type
//Main Primitives = boolean, number, string
//Less Common Primitives = bigint, symbol

//Type Assignment = 1.Explicit 2.Implicit

//1.Explicit

let firstName: string = "Parita";
let age: number = 25;
let isSingle: boolean = true;

//2.Implicit

let lastName = "Sri";

//Special Type = any, unknown, never, undefined&null
//Any can be any type
let array: any = [];
array = {};

//unknown can be any, change a type later
let arr: unknown = [];
arr = {};

//never
let x: never = "Rita";

let y: undefined = undefined;
let z: null = null;

//TS: Arrays

// const names: string[] = [];
//readonly can not reassign
const names: readonly string[] = ["Parita"];
//3 is executed bsc TS is coverted to JS
names.push(3);
console.log(names);

//Define tuple

let tuple: readonly [number, boolean, string];
tuple = [14, true, "14 is my lucky number!"];
