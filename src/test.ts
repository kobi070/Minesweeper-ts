let a: number;
let b: boolean;
let c: string;

let d: string[];

// unknown & never & tuple
const logData = (data: unknown): void => {
  const data2: unknown = data;
  console.log(data);
  console.log(data2);
  throw new Error("Bad !");
};

type TouplePremissions = [Premissions, Premissions];

// interfaces types and unions
type Premissions = "admin" | "user" | "manager";

type BasicUser<A = boolean, P = TouplePremissions> = {
  name: string;
  surename: string;
  age: number;
  isAdmin: A;
  premissions?: P /*? before a proprtey means not required */;
};

type AdvanceUser = {
  account: number;
};

type FullUser<A = boolean, P = string[]> = BasicUser<A, P> & AdvanceUser;

const user: FullUser<boolean> = {
  name: "Kobi",
  surename: "Kuzi",
  age: 26,
  isAdmin: true,
  account: 100,
  premissions: ["admin", "manager"],
};
const userArray: FullUser<boolean>[] = [user, user, user];

// "template" function which returns the first element in any type of array
function getFirst<T>(arr: T[]): T {
  return arr[0];
}
getFirst<FullUser<boolean>>(userArray);

// showcase type and how to use it for functions
type MathFunctions = (a: number, b: number) => number;

const mul: MathFunctions = (a, b) => a * b;
const add: MathFunctions = (a, b) => a + b;
