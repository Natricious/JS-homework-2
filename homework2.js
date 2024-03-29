// 1. Დაბეჭდეთ რიცხვები 2 დან 8 მდე
for (i = 2; i <= 8; i++) {
    console.log(i)
}

// 2. 5 დან 35 - ის ჩათვლით დაბეჭდეთ ყოველი მეოთხე რიცხვი (უნდა დაიბეჭდოს 5,9,13…)
for (i = 5; i <= 35; i++) {
    if (i % 4 == 1) {
        console.log(i)
    } else {

    }
}

// 3. დაბეჭდეთ 3 დან 8 მდე რიცხვების ნამრავლი
var m = 1;
for (i = 3; i <= 8; i++) {
    m *= i;
}
console.log(m)

// 4. Გამოაცხადეთ ობიექტი person რომელსაც აქვს firstName, lastName, age და დაბეჭდეთ person-სრული სახელი ( სახელი და გვარი)
var person = {
    firstName: "Zura",
    lastName: "Natroshvili",
    age: 30,
}
console.log(person.firstName, person.lastName);

//5. დაბეჭდეთ მეოტხე დავალებაში გამოცხადებული პერსონის თითოეული property value 
var person = {
    firstName: "Zura",
    lastName: "Natroshvili",
    age: 30,
}

for (const key in person) {
    console.log(key + ': ' + person[key]);
}

// 6. დაწერეთ მასივი fruits ელემენტებით ["Apple", "Banana", "Orange"]; დაბეჭდეთ მასივის თითოეული წევრი
let fruits = ["Apple", "Banana", "Orange"];
for (const _fruit in fruits) {
    console.log(fruits[_fruit]);
}

// 7. დაამატეთ fruits მასივის თავში Grapes და ბოლოში  Pineapples დაბეჭდეთ fruits
let fruits2 = ["Apple", "Banana", "Orange"];
fruits2.unshift("Grapes");
fruits2.push("Pineapple");
for (i = 0; i <= 4; i++) {
    console.log(fruits2);
}

//8.დაბეჭდეთ 1 დან 34 მდე რიცხვების ჯამი ( სათითაოდ) სანამ ჯამი არის 100 ზე ნაკლები ( დაიბეჭდება I-იტერაცია =>1, 2 იტერაცია 3(ანუ 1+2),  მესამე => 6 (3+3), მეოთზე => 10 (6+3)
var m = 0;
for (i = 1; i <= 34; i++) {
    m += i;
    if (m < 100) {
        console.log(m)
    }
}
