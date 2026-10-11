
/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
*/
/*
import Greeting from "./Greeting";

function App() {
  return (
    <>
      <Greeting />
    </>
  );
}

export default App;

*/
/*

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;

*/

/*
import StudentCard from "./StudentCard";

function App() {
  return (
    <>
      <StudentCard
        vardas="Marius"
        pavarde="Jokubauskas"
        amzius={40}
        programa="Informatika"
      />

      
      
    </>
  );
}

export default App;
*/



/*
function App() {
  const miestai = [
    "Kaunas",
    "Vilnius",
    "Klaipėda",
    "Šiauliai",
    "Panevėžys",
  ];

  return (
    <>
      <h1>Miestų sąrašas</h1>

      <ul>
        {miestai.map((miestas) => (
          <li key={miestas}>{miestas}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

*/



/*
function App() {
  function paspaudimas() {
    console.log("Mygtukas buvo paspaustas!");
  }

  return (
    <>
      <h1>Mygtukas</h1>

      <button onClick={paspaudimas}>
        Spausk mane
      </button>
    </>
  );
}

export default App;

*/

/*
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function padidinti() {
    setCount(count + 1);
  }

  function sumazinti() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>Skaitiklis</h1>

      <button onClick={sumazinti}>-</button>

      <h2>{count}</h2>

      <button onClick={padidinti}>+</button>
    </>
  );
}

export default App;

*/

/*
import { useState } from "react";

function App() {
  const [tekstas, setTekstas] = useState("");

  return (
    <>
      <h1>Teksto įvedimas</h1>

      <input
        type="text"
        value={tekstas}
        onChange={(e) => setTekstas(e.target.value)}
      />

      <p>{tekstas}</p>
    </>
  );
}

export default App;
*/
/*
import { useState } from "react";

function App() {
  const [rodyti, setRodyti] = useState(false);

  return (
    <>
      <h1>Sąlyginis atvaizdavimas</h1>

      <button onClick={() => setRodyti(!rodyti)}>
        Rodyti / Slėpti
      </button>

      {rodyti && <p>Šis tekstas yra matomas!</p>}
    </>
  );
}

export default App;

*/
/*

import ProductCard from "./ProductCard";

function App() {
  const produktai = [
    {
      pavadinimas: "Telefonas",
      kaina: 500,
    },
    {
      pavadinimas: "Kompiuteris",
      kaina: 1200,
    },
    {
      pavadinimas: "Ausinės",
      kaina: 80,
    },
    {
      pavadinimas: "Klaviatūra",
      kaina: 60,
    },
    {
      pavadinimas: "Pelė",
      kaina: 30,
    },
  ];

  return (
    <>
      <h1>Produktų sąrašas</h1>

      {produktai.map((produktas) => (
        <ProductCard
          key={produktas.pavadinimas}
          pavadinimas={produktas.pavadinimas}
          kaina={produktas.kaina}
        />
      ))}
    </>
  );
}

export default App;

*/

/*
import { useState } from "react";

function App() {
  const [vardas, setVardas] = useState("");
  const [pavarde, setPavarde] = useState("");
  const [amzius, setAmzius] = useState("");

  const [duomenys, setDuomenys] = useState(null);

  function pateiktiForma(e) {
    e.preventDefault();

    setDuomenys({
      vardas: vardas,
      pavarde: pavarde,
      amzius: amzius,
    });
  }

  return (
    <>
      <h1>Forma</h1>

      <form onSubmit={pateiktiForma}>
        <input
          type="text"
          placeholder="Vardas"
          value={vardas}
          onChange={(e) => setVardas(e.target.value)}
        />

        <br />

        <input
          type="text"
          placeholder="Pavardė"
          value={pavarde}
          onChange={(e) => setPavarde(e.target.value)}
        />

        <br />

        <input
          type="number"
          placeholder="Amžius"
          value={amzius}
          onChange={(e) => setAmzius(e.target.value)}
        />

        <br />

        <button type="submit">
          Rodyti duomenis
        </button>
      </form>

      {duomenys && (
        <div>
          <h2>Įvesti duomenys:</h2>
          <p>Vardas: {duomenys.vardas}</p>
          <p>Pavardė: {duomenys.pavarde}</p>
          <p>Amžius: {duomenys.amzius}</p>
        </div>
      )}
    </>
  );
}

export default App;
*/
/*
import StudentCard from "./StudentCard";
import "./App.css";

function App() {
  const studentai = [
    {
      vardas: "Marius",
      pazymys: 10,
    },
    {
      vardas: "Jonas",
      pazymys: 4,
    },
    {
      vardas: "Ona",
      pazymys: 8,
    },
    {
      vardas: "Tomas",
      pazymys: 3,
    },
    {
      vardas: "Ieva",
      pazymys: 6,
    },
  ];

  return (
    <>
      <h1>Studentų sąrašas</h1>

      <div>
        {studentai.map((studentas) => (
          <StudentCard
            key={studentas.vardas}
            vardas={studentas.vardas}
            pazymys={studentas.pazymys}
          />
        ))}
      </div>
    </>
  );
}

export default App;
*/

/*
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Įvestas vardas: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Įveskite vardą"
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;

*/


import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Įvestas vardas: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Įveskite vardą"
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;