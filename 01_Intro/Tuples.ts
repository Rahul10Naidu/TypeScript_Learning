const user: (string | number)[] = ['mn', 1]

const user1: (string | number)[] = [1, 'mn']

// In the above 2 scenarios -->   We are assigning 2 data types to the array
// BUt in some cases we might need the data types in designated order.


// Tuples allow us to write the datatypes in an ordered manner in either array or objects;
let tUser: [string, number, boolean];

tUser = ["mn", 4, true];

let rgb: [number, number, number] = [255, 123, 112];


// Using type to create an ordered data type
type User = [number, string];
const newUser: User = [112, 'example@google.com'];
newUser[1] = 'hc.com';
// newUser.push(true); --> Cannot push as the data type is strictly declared.


