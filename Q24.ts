// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

1// • Tests for equality and inequality with strings

const strings1: string = "Apple";
const strings2: string = "Mango";

console.log(strings1 === strings2);
console.log(strings1 !== strings2);

//•2 Tests using the lower case function

const mixCaseString: string = "Hello world"
console.log(mixCaseString.toLocaleLowerCase() === "hello world")

// •3 Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

const num1:number = 10;
const num2:number = 5;

console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

// 4• Tests using "and" and "or" operators

const condition1: boolean = true;

const condition2: boolean = false;

console.log(condition1 && condition2);
console.log(condition1 || condition2);

// 5• Test whether an item is in a array

const Dryfruits: string[] = ["chilgozay", "cashew", "peanuts"]
console.log(Dryfruits.includes("peanuts"))
console.log(Dryfruits.includes("Peanuts"))