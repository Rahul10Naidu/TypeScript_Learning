
// UNion allows variables to be of more than one data type
let score: number | string = 33;
score = "44";

type User =  {
  name: string;
  id: number;
}


type Admin =  {
  username: string;
  id: number;
}

let mehul: User | Admin = {
  name: 'mehul',
  id: 334
}

mehul = {
  username: 'mn',
  id: 334
}

// Performing opertaions inside functions based on data type
// THis is called UNion Narrowing...
function getDBId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }

  if (typeof id === "number") {
    console.log(id + 2)
  }

  
}

getDBId("3"); getDBId(3);

// number[] | string[] --> Means that either it can all be numbers[] or 
// it can all be string[]
const data : number[] | string[] = [1, 2, 3, 4, "5"] //--> this will throw an error;

// For any multiple data type in an array --> Do this --> (number | string)[]
const data2 : (number | string | boolean)[] = [1, 2, "3", true];


// Literal type assignment --> ONly this value is allowed
let pi: 3.14;


// Only the three can be assigned, sort of like enum
let seatAllotment: 'aisle' | 'middle' | 'window';