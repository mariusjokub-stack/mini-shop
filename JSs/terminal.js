/*
const _ = require("lodash");

const skaiciai = [1, 2, 3, 4, 5];

const sumaisytas = _.shuffle(skaiciai);

console.log("Pradinis masyvas:", skaiciai);
console.log("Sumaišytas masyvas:", sumaisytas);


const randomNumber = require("random-number");

const options = {
    min: 1,
    max: 100,
    integer: true
};

const skaicius = randomNumber(options);

console.log("Atsitiktinis skaičius:", skaicius);

*/

const dayjs = require("dayjs");

const siandien = dayjs();
const rytoj = dayjs().add(1, "day");

console.log("Šiandien (data + laikas):", siandien.format("YYYY-MM-DD HH:mm:ss"));
console.log("Rytoj (data):", rytoj.format("YYYY-MM-DD"));

const quotesy = require("quotesy");

const quote = quotesy.random();





console.log("💬 Atsitiktinė citata:");
console.log(quote.text);
console.log("- " + quote.author);



const { faker } = require("@faker-js/faker");

const user = {
    vardas: faker.person.firstName(),
    pavarde: faker.person.lastName(),
    email: faker.internet.email()
};

console.log("👤 Atsitiktinis vartotojas:");
console.log("Vardas:", user.vardas);
console.log("Pavardė:", user.pavarde);
console.log("El. paštas:", user.email);





const axios = require("axios");

axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        console.log("Vartotojų vardai:");

 response.data.forEach((user, index) => {
    console.log(`${String.fromCharCode(65 + index)}. ${user.name}`);
});
    })
    .catch(error => {
        console.log("Klaida:", error.message);
    });


  function suma(a, b) {
    return a + b;
}

test("2 + 3 = 5", () => {
    expect(suma(2, 3)).toBe(5);
});

test("10 + 5 = 15", () => {
    expect(suma(10, 5)).toBe(15);
});

test("0 + 0 = 0", () => {
    expect(suma(0, 0)).toBe(0);
});