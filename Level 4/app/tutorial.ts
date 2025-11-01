let a: number = 78;

let b: string = "Ayush";

let isOnline: boolean = false;

let arr1: number[] = [2, 4, 6, 8];
let arr2: string[] = ["Ayush", "John", "Royce"];
let arr3: [string, number] = ["Ayush", 34];

enum Role {
  "user",
  "admin",
}

// Basic Function
function sum(a: number, b: number): number {
  return a + b;
}
sum(2, 4);

// Optional Default Parameter
function add(a: number = 22, b: number = 22) {
  return a + b;
}

// Type Inference
let c = 89;

// Type Annotation;
let d: number;

// Type Aliases
type john = number | string | boolean;

let e: john;

e = 12;
e = "john";
e = false;

type status = "success" | "error" | "pending";

let f: status;
f = "success";

type user = {
  name: string;
  age: number;
};

let person1: user;
person1 = {
  name: "Aysh",
  age: 21,
};

type post = {
  description: string;
  image?: string;
  like: number;
};

let obj: post = {
  description: "First",
  like: 2,
};


// Type Aliases for Function signatures

type  MathFn = (a: number, b: number)=> number

let addition:MathFn=(a, b)=>{
  return a = b
}


//Interfaces

interface User {
  id: number;
  name: string;
  email?: string;   // optional property
  readonly role: string; // read-only property
}

const person2: User = {
  id: 1,
  name: "John",
  email: "john@gmail.com",
  role: "Admin"
};



interface firstName {
  fName : string
}

interface lastName extends firstName{
   lName : string
}


let obj: lastName ={
   fName : 'John',
   lName: 'Doe'
}
console.log(obj);


// Union and Intersection

type Response = "Ok" | "Fail" | "Loading" ;
let res : Response = "Ok";

// Intersection

type Person = {name : string};
type Contact = {phone: number};
type Full = Person & Contact;

const user3 : Full = {name: "John" , phone: 7458}


// Generics 

function hello<T>(a:T, b:T):T{
   return a;
}

hello<number>(2,4)

// Gnerics in Interface 

interface user1<T>{
   name : string;
   age :T
}

let ayush: user1<number>={
   name : "Ayush",
   age: 22
}