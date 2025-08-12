// Interface is like a loose form of class
// Use Enums for specific values
// Use Types for specific properties but diff. values
// Use Interfaces when there methods/fn as well
interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // 2 ways to define fns
  // startTrial: () => string;
  startTrial(): string;
  getCoupon(couponname: string, value: number): number;
}

// -----------------------------------------------
// Interface allows a particular Interface to be redclared
// and adds that property/method declared in it to an existing
// interface.
interface User {
  githubToken: string;
}

// Extends --> Inheritance
interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const mehul: User = {
  dbId: 23,
  email: "mn@mn.com",
  userId: 2305,
  startTrial: () => {
    return "trial started";
  },
  getCoupon: (name: "mehul", value: 20) => {
    return value;
  },
  githubToken: "github",
};

// The main differnce between type and interface is that
// Type cannnot be reopened like interfaces like
// we did above in this current example.
