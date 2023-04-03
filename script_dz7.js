let numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 17) {
        console.log(numbers[i]);
    }
}





let person = {
    name: "Nikita",
    age: 14,
    marks: [10, 8, 5, 11, 12]
};

let sum = 0;

for (let i = 0; i < person.marks.length; i++) {
    sum += person.marks[i];
}

console.log(`first mark: ${person.marks[0]}`);
console.log(`second mark: ${person.marks[person.marks.length - 1]}`);
console.log(`third mark: ${sum}`); 
