type HeroType1 = {
  name: string;
  age: number;
  location: string;
  road: number;
  isMarride: boolean;
};

type HeroType2 = HeroType1 & {
  numberOfChild: boolean;
  studentId: number;
  vargin: boolean;
};

type HeroType3 = {
  numberOfChild: boolean;
  studentId: number;
  vargin: boolean;
};

// const heroDetails: HeroType2 = {
//   numberOfChild: false,
//   studentId: 234,
//   vargin: true,
//   name: "khaled",
//   age: 24,
//   location: "dhaka",
//   road: 32,
//   isMarride: false,
// };

// union
const myFavhero: HeroType1 | HeroType3 = {
  name: "khaled",
  age: 22,
  vargin: false,
  studentId: 22,
  numberOfChild: false,
};

// union ==>  |
// interception ==> &
