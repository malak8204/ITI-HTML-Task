
const numbers1 = [1, 2, 3, 4];
numbers1.forEach((num) => {
    console.log(num * 2);
});
const nums = [10, 25, 5, 30, 15, 40];
const resultQ2 = nums.filter((num) => {
    return num > 20;
});
console.log( resultQ2);
const users = [
    { name: "Ali", age: 20 },
    { name: "Sara", age: 28 },
    { name: "Omar", age: 30 }
];
const user = users.find((item) => {
    return item.age > 25;
});
console.log( user);

const names = ["ali","malak", "menna"];
const resultQ4 = names.map((name) => {
    return name.toUpperCase();
});
console.log( resultQ4);
const fruits = ["Apple", "Banana", "Orange"];

for (const fruit of fruits) {
    console.log(fruit);
}
for (const index in fruits) {
    console.log(index);
}
fruits.forEach((fruit, index) => {
    console.log(`${index} -> ${fruit}`);
});
const sum = (a, b) => a + b;
console.log( sum(5, 3));

const userObj = {
    name: "Malak",
    age: 22
};
const { name, age } = userObj;
console.log( name, age);
console.log(`Hello ${name}`);
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log( combinedArray);
const students = [
    { name: "Ali", degree: 70 },
    { name: "Sara", degree: 95 },
    { name: "Malak", degree: 40 },
    { name: "Menna", degree: 85 },
    { name: "Omar", degree: 55 }
];
const studentNames = students.map((student) => student.name);
console.log( studentNames);
const passedStudents = students.filter((student) => student.degree >= 60);
console.log( passedStudents);
const topStudent = students.find((student) => student.degree > 90);
console.log( topStudent);
students.forEach((student) => console.log(student.name));
const numbersToSum = [5, 10, 15, 20];
const totalSum = numbersToSum.reduce((acc, current) => acc + current, 0);
console.log(totalSum);
