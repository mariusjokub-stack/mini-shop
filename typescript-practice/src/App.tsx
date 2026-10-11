/*

function App() {
  const vardas: string = "Marius";
  const pavarde: string = "Jokubauskas";
  const amzius: number = 50;
  const yraStudentas: boolean = true;
  const miestas: string = "Kaunas";

    console.log(vardas);
  console.log(pavarde);
  console.log(amzius);
  console.log(yraStudentas);
  console.log(miestas);


  const miestai: string[] = [
    "Kaunas",
    "Vilnius",
    "Klaipėda",
    "Šiauliai",
    "Panevėžys",
  ];

  return (
    <div>
      <h1>{vardas} {pavarde}</h1>
      <p>Amžius: {amzius}</p>
      <p>Studentas: {yraStudentas ? "Taip" : "Ne"}</p>
      <p>Miestas: {miestas}</p>

      <h2>Miestai:</h2>

      <ul>
        {miestai.map((miestas) => (
          <li key={miestas}>{miestas}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
*/
/*
interface Student {
  id: number;
  vardas: string;
  amzius: number;
  grupe: string;
  pazymys: number;
}

const studentai: Student[] = [
  {
    id: 1,
    vardas: "Jonas",
    amzius: 20,
    grupe: "JS-1",
    pazymys: 9,
  },
  {
    id: 2,
    vardas: "Ona",
    amzius: 22,
    grupe: "JS-1",
    pazymys: 8,
  },
  {
    id: 3,
    vardas: "Petras",
    amzius: 21,
    grupe: "JS-2",
    pazymys: 10,
  },
];

function App() {
  return (
    <div>
      <h3>Studentai</h3>
       <p>{pasisveikinti("Marius")}</p>

      <p>2 + 3 = {suma(2, 3)}</p>

      <p>{apieStudenta(studentai[0])}</p>

      {studentai.map((studentas) => (
        <div key={studentas.id}>
          <p>Vardas: {studentas.vardas}</p>
          <p>Amžius: {studentas.amzius}</p>
          <p>Grupė: {studentas.grupe}</p>
          <p>Pažymys: {studentas.pazymys}</p>
        </div>
      ))}
    </div>
  );
}
function pasisveikinti(vardas: string): string {
  return `Labas, ${vardas}!`;
}

function suma(a: number, b: number): number {
  return a + b;
}

function apieStudenta(studentas: Student): string {
  return `${studentas.vardas} yra ${studentas.amzius} metų, mokosi ${studentas.grupe} grupėje ir jo pažymys yra ${studentas.pazymys}.`;
}
export default App;

*/

/*
interface Product {
  id: number;
  pavadinimas: string;
  kaina: number;
  kategorija: string;
}

const produktai: Product[] = [
  {
    id: 1,
    pavadinimas: "Telefonas",
    kaina: 800,
    kategorija: "Elektronika",
  },
  {
    id: 2,
    pavadinimas: "Kompiuteris",
    kaina: 1200,
    kategorija: "Elektronika",
  },
  {
    id: 3,
    pavadinimas: "Kėdė",
    kaina: 150,
    kategorija: "Baldai",
  },
  {
    id: 4,
    pavadinimas: "Stalas",
    kaina: 300,
    kategorija: "Baldai",
  },
];

// Brangiausias produktas
function rastiBrangiausiaProduktą(produktai: Product[]): Product {
  return produktai.reduce((brangiausias, produktas) =>
    produktas.kaina > brangiausias.kaina ? produktas : brangiausias
  );
}

// Bendra visų produktų kaina
function apskaiciuotiBendraKaina(produktai: Product[]): number {
  return produktai.reduce((suma, produktas) => suma + produktas.kaina, 0);
}

// Produktai pagal kategoriją
function rastiPagalKategorija(
  produktai: Product[],
  kategorija: string
): Product[] {
  return produktai.filter(
    (produktas) => produktas.kategorija === kategorija
  );
}

function App() {
  const brangiausias = rastiBrangiausiaProduktą(produktai);
  const bendraKaina = apskaiciuotiBendraKaina(produktai);
  const elektronika = rastiPagalKategorija(produktai, "Elektronika");

  return (
    <div>
      <h1>Produktų statistika</h1>

      <h2>Brangiausias produktas</h2>
      <p>
        {brangiausias.pavadinimas} - {brangiausias.kaina} €
      </p>

      <h2>Bendra visų produktų kaina</h2>
      <p>{bendraKaina} €</p>

      <h2>Elektronikos produktai</h2>

      {elektronika.map((produktas) => (
        <p key={produktas.id}>
          {produktas.pavadinimas} - {produktas.kaina} €
        </p>
      ))}
    </div>
  );
}

export default App;

*/
/*
interface User {
  vardas: string;
  elPastas: string;
  telefonas?: string;
  id: string | number;
}

const user: User = {
  vardas: "Marius",
  elPastas: "marius@gmail.com",
  id: 12345,
};

function atvaizduotiUser(user: User): string {
  return `
    Vardas: ${user.vardas}
    El. paštas: ${user.elPastas}
    Telefonas: ${user.telefonas ?? "Nenurodytas"}
    ID: ${user.id}
  `;
}

function App() {
  return (
    <div>
      <h1>Vartotojas</h1>

      <p>Vardas: {user.vardas}</p>
      <p>El. paštas: {user.elPastas}</p>
      <p>Telefonas: {user.telefonas ?? "Nenurodytas"}</p>
      <p>ID: {user.id}</p>
    </div>
  );
}

export default App;

*/

import Welcome from "./Welcome";

function App() {
  return (
    <div>
      <Welcome vardas="Marius" miestas="Kaunas" />
    </div>
  );
}

export default App;




