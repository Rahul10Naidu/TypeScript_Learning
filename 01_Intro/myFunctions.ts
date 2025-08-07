function addTwo(num: number): number {
  return num + 2;
}

// THis will throw an error as input is a string and not a number.
// addTwo('2');

console.log(addTwo(3));

function getUpper(val: string): string {
  return val.toUpperCase();
}

getUpper("thor");

// --------------------------------------------------------------------

type userObject = {
  name: string;
  email: string;
  mobile: string;
  subscribed: boolean;
};

function signUpUser(data: userObject): userObject {
  console.log(data);
  return data;
}

const data: userObject = {
  name: "T",
  email: "T@1",
  mobile: "456",
  subscribed: false,
};

signUpUser(data);

export {};

// Stopped at 1:02:56

