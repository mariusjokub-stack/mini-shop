/*

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
function atimtis(a, b) {
    return a - b;
}

test("10 - 5 = 5", () => {
    expect(atimtis(10, 5)).toBe(5);
});

test("20 - 8 = 12", () => {
    expect(atimtis(20, 8)).toBe(12);
});

test("0 - 0 = 0", () => {
    expect(atimtis(0, 0)).toBe(0);
});


function daugyba(a, b) {
    return a * b;
}

test("2 * 3 = 6 (teigiami skaičiai)", () => {
    expect(daugyba(2, 3)).toBe(6);
});

test("5 * 4 = 20 (teigiami skaičiai)", () => {
    expect(daugyba(5, 4)).toBe(20);
});

test("7 * 0 = 0 (nulis)", () => {
    expect(daugyba(7, 0)).toBe(0);
});





function arlyginis(skaicius) {
    return skaicius % 2 === 0;
}

test("4 yra lyginis", () => {
    expect(arlyginis(4)).toBe(true);
});

test("5 nėra lyginis", () => {
    expect(arlyginis(5)).toBe(false);
});

test("0 yra lyginis", () => {
    expect(arlyginis(0)).toBe(true);
});




function arteigimas(skaicius) {
    return skaicius > 0;
}

test("5 yra teigiamas", () => {
    expect(arteigimas(5)).toBe(true);
});

test("-3 nėra teigiamas", () => {
    expect(arteigimas(-3)).toBe(false);
}); 

function pasisveikinimas(vardas) {
    return `Sveiki, ${vardas}, ${vardas}!`;
}

test("Sveikinimas Jonui", () => {
    expect(pasisveikinimas("Jonas")).toBe("Sveiki, Jonas, Jonas!");
});

test("Sveikinimas Mariui", () => {
    expect(pasisveikinimas("Marius")).toBe("Sveiki, Marius, Marius  !");
});


*/
/*

function pirmasElementas(masivas) {
    return masivas[0];
}

test("Pirmas elementas [1, 2, 3]", () => {
    expect(pirmasElementas([1, 2, 3])).toBe(1);
});

test("Pirmas elementas ['a', 'b', 'c']", () => {
    expect(pirmasElementas(['a', 'b', 'c'])).toBe('a');
}); 
test("Pirmas elementas [true, false, true]", () => {
    expect(pirmasElementas([true, false, true])).toBe(true);
});
test("Pirmas elementas []", () => {
    expect(pirmasElementas([])).toBe(undefined);
}); 

*/
/*
function didziausia(masivas) {
    return Math.max(...masivas);
}

test("Didžiausias elementas [1, 2, 3]", () => {
    expect(didziausia([1, 2, 3])).toBe(3);
});

test("Didžiausias elementas [-5, -2, -8]", () => {
    expect(didziausia([-5, -2, -8])).toBe(-2);
}); 

test("Didžiausias elementas [10, 20, 30, 40]", () => {
    expect(didziausia([10, 20, 30, 40])).toBe(40);
});

*/
/*
function arTuscias(tekstas1) {
    return tekstas1.length===0;
}

test ("tuscias tekstas",()=> {
    expect(arTuscias("")).toBe(true);
});

test("testas su simboliai",()=>{
    expect(arTuscias ("labas")).toBe(false);
});


test("tarpas nera tuscias",()=>{
    expect(arTuscias ("  ")).toBe(false);
});

*/
/*

function tekstoIlgis(tekstas) {
    return tekstas.length;
}

test("tuščias tekstas", () => {
    expect(tekstoIlgis("")).toBe(0);
});

test("vienas simbolis", () => {
    expect(tekstoIlgis("a")).toBe(1);
});

test("žodis labas", () => {
    expect(tekstoIlgis("labas")).toBe(5);
});

test("tarpai skaičiuojami", () => {
    expect(tekstoIlgis("labas pasaulis")).toBe(14);
});

*/

/*
function Didziausias(tekstas) {
    return tekstas.toUpperCase();
}

test("pasyvus zodis", () => {
    expect(Didziausias("labas")).toBe("LABAS");
});

test("zodis simple", () => {
    expect(Didziausias("simple")).toBe("SIMPLE");
});

test("misrus tekstas", () => {
    expect(Didziausias("labas zeme")).toBe("LABAS ZEME");
});

test("kitas sakinys", () => {
    expect(Didziausias("labas pasauli")).toBe("LABAS PASAULI");
});

*/
/*
const yraReiksme = require("./sum");

test("grąžina true, kai reikšmė yra masyve", () => {
    expect(yraReiksme([1, 2, 3, 4], 3)).toBe(true);
});

test("grąžina false, kai reikšmės nėra masyve", () => {
    expect(yraReiksme([1, 2, 3, 4], 5)).toBe(false);
});

test("veikia su tekstais", () => {
    expect(yraReiksme(["a", "b", "c"], "b")).toBe(true);
});

*/




/*

const skaiciuSuma = require("./sum");

test("suskaičiuoja teigiamų skaičių sumą", () => {
    expect(skaiciuSuma([1, 2, 3, 4])).toBe(10);
});

test("grąžina 0, kai masyvas tuščias", () => {
    expect(skaiciuSuma([])).toBe(0);
});

test("veikia su neigiamais skaičiais", () => {
    expect(skaiciuSuma([-1, -2, -3])).toBe(-6);
});

test("veikia su mišriais skaičiais", () => {
    expect(skaiciuSuma([5, -2, 3])).toBe(6);
});

*/
/*

const tikrintiPazymi = require("./sum");

test("5 ir daugiau - išlaikyta", () => {
    expect(tikrintiPazymi(5)).toBe("Išlaikyta");
    expect(tikrintiPazymi(8)).toBe("Išlaikyta");
    expect(tikrintiPazymi(10)).toBe("Išlaikyta");
});

test("mažiau nei 5 - neišlaikyta", () => {
    expect(tikrintiPazymi(4)).toBe("Neišlaikyta");
    expect(tikrintiPazymi(0)).toBe("Neišlaikyta");
    expect(tikrintiPazymi(3)).toBe("Neišlaikyta");
});

*/

/*
const tikrintiAmziu = require("./sum.js");

test("18 ir daugiau - pilnametis", () => {
    expect(tikrintiAmziu(18)).toBe("Pilnametis");
    expect(tikrintiAmziu(25)).toBe("Pilnametis");
    expect(tikrintiAmziu(100)).toBe("Pilnametis");
});

test("mažiau nei 18 - nepilnametis", () => {
    expect(tikrintiAmziu(17)).toBe("Nepilnametis");
    expect(tikrintiAmziu(10)).toBe("Nepilnametis");
    expect(tikrintiAmziu(0)).toBe("Nepilnametis");
});

*/
/*
const tikrintiSlaptazodi = require("./sum.js");

test("8 simboliai - galioja", () => {
    expect(tikrintiSlaptazodi("12345678")).toBe(true);
});

test("daugiau nei 8 simboliai - galioja", () => {
    expect(tikrintiSlaptazodi("1234567890")).toBe(true);
});

test("mažiau nei 8 simboliai - negalioja", () => {
    expect(tikrintiSlaptazodi("12345")).toBe(false);
});

test("tuščias slaptažodis - negalioja", () => {
    expect(tikrintiSlaptazodi("")).toBe(false);
});

*/

/*

const skaiciuotiVidurki = require("./sum.js");

test("teisingas vidurkis", () => {
    expect(skaiciuotiVidurki([10, 8, 6])).toBe(8);
});

test("vienas pažymys", () => {
    expect(skaiciuotiVidurki([10])).toBe(10);
});

test("tuščias masyvas grąžina 0", () => {
    expect(skaiciuotiVidurki([])).toBe(0);
});

test("mišrūs skaičiai", () => {
    expect(skaiciuotiVidurki([5, 7, 9, 3])).toBe(6);
});

*/
/*

const gautiVarda = require("./sum");

test("grąžina vardą iš objekto", () => {
    expect(gautiVarda({ vardas: "Jonas", amzius: 25 })).toBe("Jonas");
});

test("kitas vartotojas", () => {
    expect(gautiVarda({ vardas: "Asta", amzius: 30 })).toBe("Asta");
});

test("dar vienas pavyzdys", () => {
    expect(gautiVarda({ vardas: "Marius", amzius: 50 })).toBe("Marius");
});
*/
/*
const { sudetis, atimtis, daugyba, dalyba } = require("./sum.js");

test("sudėtis veikia", () => {
    expect(sudetis(2, 3)).toBe(5);
});

test("atimtis veikia", () => {
    expect(atimtis(10, 4)).toBe(6);
});

test("daugyba veikia", () => {
    expect(daugyba(3, 5)).toBe(15);
});

test("dalyba veikia", () => {
    expect(dalyba(10, 2)).toBe(5);
});
*/






/*

const fizzBuzz = require("./sum");

test("dalinasi iš 3 → Fizz", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(6)).toBe("Fizz");
    expect(fizzBuzz(9)).toBe("Fizz");
});

test("dalinasi iš 5 → Buzz", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(10)).toBe("Buzz");
    expect(fizzBuzz(20)).toBe("Buzz");
});

test("dalinasi iš 3 ir 5 → FizzBuzz", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
});

test("nedalinasi → grąžina skaičių", () => {
    expect(fizzBuzz(1)).toBe(1);
    expect(fizzBuzz(2)).toBe(2);
});

*/

/*

const arPalindromas = require("./sum");

test("palindromas - mama", () => {
    expect(arPalindromas("mama")).toBe(false);
});

test("palindromas - level", () => {
    expect(arPalindromas("level")).toBe(true);
});

test("palindromas - sasa", () => {
    expect(arPalindromas("sasa")).toBe(false);
});

test("palindromas - racecar", () => {
    expect(arPalindromas("racecar")).toBe(true);
});

test("veikia su didžiosiomis raidėmis", () => {
    expect(arPalindromas("Level")).toBe(true);
});

*/

/*
const amziausKategorija = require("./sum");

test("vaikas (<18)", () => {
    expect(amziausKategorija(5)).toBe("Vaikas");
    expect(amziausKategorija(17)).toBe("Vaikas");
});

test("suaugęs (18–64)", () => {
    expect(amziausKategorija(18)).toBe("Suaugęs");
    expect(amziausKategorija(30)).toBe("Suaugęs");
    expect(amziausKategorija(64)).toBe("Suaugęs");
});

test("senjoras (65+)", () => {
    expect(amziausKategorija(65)).toBe("Senjoras");
    expect(amziausKategorija(80)).toBe("Senjoras");
});
*/


/*
const skaiciuotiNuolaida = require("./sum");

test("10% nuolaida nuo 100", () => {
    expect(skaiciuotiNuolaida(100, 10)).toBe(90);
});

test("20% nuolaida nuo 50", () => {
    expect(skaiciuotiNuolaida(50, 20)).toBe(40);
});

test("0% nuolaida", () => {
    expect(skaiciuotiNuolaida(80, 0)).toBe(80);
});

test("50% nuolaida", () => {
    expect(skaiciuotiNuolaida(200, 50)).toBe(100);
});


*/
/*
const tikrintiElPasta = require("./sum");

test("teisingas el. paštas", () => {
    expect(tikrintiElPasta("jonas@gmail.com")).toBe(true);
});

test("nėra @ simbolio", () => {
    expect(tikrintiElPasta("jonasgmail.com")).toBe(false);
});

test("tik @ simbolis", () => {
    expect(tikrintiElPasta("@")).toBe(true);
});

test("tuščias tekstas", () => {
    expect(tikrintiElPasta("")).toBe(false);
});

*/


















