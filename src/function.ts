function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(2, 2);

const arrow = (num1: number, num2: number): number => num1 + num2;

// object function
const person: {
  name: string;
  balance: number;
  addBalance(money: number): void;
} = {
  name: "khaled",
  balance: 10,

  addBalance(money) {
    console.log(`This is my new balance ${this.balance + money}`);
  },
};
