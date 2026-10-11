/*
import './App.css'
import Counter from './Counter'
import NameInput from './NameInput'


function App() {
 
 return (
  <>
<Counter />
<NameInput initialName="vilniaus coding school" />
<NameInput initialName="VCS" />
<NameInput initialName="Dar kazkas" />

 </>
 )
}
  
export default App
*/
/*
import AutoFocus from "./AutoFocus";

function App() {
  return (
    <>
      <AutoFocus />
    </>
  );
}

export default App;

*/

/*
import FocusInput from "./FocusInput";

function App() {
  return (
    <>
      <FocusInput />
    </>
  );
}

export default App;

*/
/*
import ShowText from "./ShowText";

function App() {
  return (
    <>
      <ShowText />
    </>
  );
}

export default App;
*/

/*
import ClearInput from "./ClearInput";

function App() {
  return (
    <>
      <ClearInput />
    </>
  );
}

export default App;

*/
/*
import React from 'react';
import TextSelect from './TextSelect'; // Importing the English version

function App() {
  return (
    <div className="App">
      <h1>React Task</h1>
      <TextSelect />
    </div>
  );
}

export default App;
*/
/*
import React from 'react';
import ColorChanger from './ColorChanger';

function App() {
  return (
    <div className="App">
      <h1>React Task 6</h1>
      <ColorChanger />
    </div>
  );
}

export default App;
*/
/*
import React from 'react';
import HideElement from './HideElement'; // Įkeliam naują komponentą

function App() {
  return (
    <div className="App">
      <h1>React Task 7</h1>
      
      <HideElement />
    </div>
  );
}

export default App;
*/
/*
import ClickCounter from "./ClickCounter";

function App() {
  return (
    <>
      <h1>React Task 8</h1>
      <ClickCounter />
    </>
  );
}

export default App;

*/

/*
import { useRef, useEffect } from "react";

function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>Automatinis</h1>

      <input 
        ref={inputRef} 
        placeholder="Rašyk čia..."
      />
    </div>
  );
}

export default App;

*/
/*
import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }

  return (
    <div>
      <h1>Fokusavimo mygtukas</h1>

      <input 
        ref={inputRef}
        placeholder="Rašyk čia..."
      />

      <button onClick={handleFocus}>
        Focus
      </button>
    </div>
  );
}

export default App;

*/
/*
import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  function showText() {
    alert(inputRef.current.value);
  }

  return (
    <div>
      <h1>Input reikšmės nuskaitymas</h1>

      <input 
        ref={inputRef}
        placeholder="Įrašyk tekstą"
      />

      <button onClick={showText}>
        Rodyti tekstą
      </button>
    </div>
  );
}

export default App;

*/
/*
import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  function clearInput() {
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  return (
    <div>
      <h1>Input išvalymas</h1>

      <input
        ref={inputRef}
        placeholder="Įrašyk tekstą"
      />

      <button onClick={clearInput}>
        Clear
      </button>
    </div>
  );
}

export default App;

*/
/*
import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  function selectText() {
    inputRef.current.select();
  }

  return (
    <div>
      <h1>Teksto pažymėjimas</h1>

      <input 
        ref={inputRef}
        defaultValue="Šitas tekstas bus pažymėtas"
      />

      <button onClick={selectText}>
        Select Text
      </button>
    </div>
  );
}

export default App;

*/

/*
import { useRef } from "react";

function App() {

  const divRef = useRef(null);

  function changeColor() {
    divRef.current.style.backgroundColor = "blue";
  }

  return (
    <div>
      <h1>Spalvos keitimas</h1>

      <div
        ref={divRef}
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "red"
        }}
         ref={divRef}
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "yellow"
        }}
      >
      </div>

      <button onClick={changeColor}>
        Pakeisti spalvą
      </button>

    </div>
  );
}

export default App;

*/
/*
import { useRef } from "react";

function App() {

  const inputRef = useRef(null);

  function clearInput() {
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  return (
    <div>
      <h1>Input išvalymas</h1>

      <input
        ref={inputRef}
        placeholder="Rašyk čia..."
      />

      <button onClick={clearInput}>
        Clear
      </button>
    </div>
  );
}

export default App;

*/
/*
import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  function clearInput() {
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  return (
    <div>
      <h1>Input išvalymas</h1>

      <input
        ref={inputRef}
        placeholder="Įvesk tekstą..."
      />

      <button onClick={clearInput}>
        Clear
      </button>
    </div>
  );
}

export default App;

*/

/*
import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  function selectText() {
    inputRef.current.select();
  }

  return (
    <div>
      <h1>Teksto pažymėjimas</h1>

      <input
        ref={inputRef}
        defaultValue="Šitas tekstas bus pažymėtas"
      />

      <button onClick={selectText}>
        Select Text
      </button>
    </div>
  );
}

export default App;

*/
/*

import { useRef } from "react";

function App() {
  const divRef = useRef(null);

  const keistiSpalva = () => {
  const spalvos = ["red", "blue", "green", "yellow", "purple"];
  const atsitiktine =
    spalvos[Math.floor(Math.random() * spalvos.length)];

  divRef.current.style.backgroundColor = atsitiktine;
};

  return (
    <div>
      <div
        ref={divRef}
        style={{
          width: "300px",
          height: "300px",
          backgroundColor: "lightgray",
          marginBottom: "20px",
        }}
      >
      </div>

      <button onClick={keistiSpalva}>
        Pakeisti spalvą
      </button>
    </div>
  );
}

export default App;

*/

/*
import { useRef } from "react";

function App() {
  const divRef = useRef(null);

  const paslepti = () => {
    divRef.current.style.display = "none";
  };

  return (
    <div>
      <div
        ref={divRef}
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "skyblue",
          marginBottom: "20px",
        }}
      >
        Aš esu div
      </div>

      <button onClick={paslepti}>
        Paslėpti
      </button>
    </div>
  );
}

export default App;

*/
/*

import { useRef } from "react";

function App() {
  const vardasRef = useRef(null);
  const pavardeRef = useRef(null);
  const emailRef = useRef(null);

  const pateikti = (e) => {
    e.preventDefault();

    console.log("Vardas:", vardasRef.current.value);
    console.log("Pavardė:", pavardeRef.current.value);
    console.log("El. paštas:", emailRef.current.value);
  };

  return (
    <form onSubmit={pateikti}>
      <input
        ref={vardasRef}
        type="text"
        placeholder="Vardas"
      />

      <br />

      <input
        ref={pavardeRef}
        type="text"
        placeholder="Pavardė"
      />

      <br />

      <input
        ref={emailRef}
        type="email"
        placeholder="El. paštas"
      />

      <br />

      <button type="submit">
        Siųsti
      </button>
    </form>
  );
}

export default App;

*/


/*
import { useRef } from "react";

function App() {

  // Sukuriame nuorodą į div elementą
  const divRef = useRef(null);

  const keistiSpalva = () => {
    const spalvos = ["red", "blue", "green", "yellow", "purple"];

    const atsitiktinis = Math.floor(Math.random() * spalvos.length);

    divRef.current.style.backgroundColor = spalvos[atsitiktinis];
  };


  return (
    <div>
      <div
        ref={divRef}
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "lightgray",
          marginBottom: "20px",
        }}
      ></div>

      <button onClick={keistiSpalva}>
        Pakeisti spalvą
      </button>
    </div>
  );
}

export default App;

*/
/*
import { useState } from "react";

function App() {
  const [paspaudimai, setPaspaudimai] = useState(0);

  const skaiciuoti = () => {
    setPaspaudimai(paspaudimai + 1);
  };

  return (
    <div>
      <h2>Paspaudimų skaičius: {paspaudimai}</h2>

      <button onClick={skaiciuoti}>
        Spausk mane
      </button>
    </div>
  );
}

export default App;

*/

/*
import { useRef, useState } from "react";

function App() {
  const intervalRef = useRef(null);
  const [skaicius, setSkaicius] = useState(0);

  const start = () => {
    intervalRef.current = setInterval(() => {
      setSkaicius((senas) => senas + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <h1>{skaicius}</h1>

      <button onClick={start}>
        Start
      </button>

      <button onClick={stop}>
        Stop
      </button>
    </div>
  );
}

export default App;


*/

/*
import { useRef } from "react";

function App() {
  const vardasRef = useRef(null);
  const pavardeRef = useRef(null);
  const emailRef = useRef(null);

  const pateikti = (e) => {
    e.preventDefault();

    console.log("Vardas:", vardasRef.current.value);
    console.log("Pavardė:", pavardeRef.current.value);
    console.log("El. paštas:", emailRef.current.value);
  };

  return (
    <div>
      <form onSubmit={pateikti}>

        <input 
          ref={vardasRef}
          placeholder="Vardas"
        />

        <br />

        <input 
          ref={pavardeRef}
          placeholder="Pavardė"
        />

        <br />

        <input 
          ref={emailRef}
          placeholder="El. paštas"
        />

        <br />

        <button type="submit">
          Siųsti
        </button>

      </form>
    </div>
  );
}

export default App;
*/
/*
import { useRef } from "react";

function App() {
  const apskritimasRef = useRef(null);

  const raudona = () => {
    apskritimasRef.current.style.backgroundColor = "red";
  };

  const zalia = () => {
    apskritimasRef.current.style.backgroundColor = "green";
  };

  const melyna = () => {
    apskritimasRef.current.style.backgroundColor = "blue";
  };

  return (
    <div>
      <div
        ref={apskritimasRef}
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "gray",
          marginBottom: "20px",
          borderRadius: "50%",
        }}
      ></div>

      <button onClick={raudona}>Raudona</button>
      <button onClick={zalia}>Žalia</button>
      <button onClick={melyna}>Mėlyna</button>
    </div>
  );
}

export default App;
*/

/*
import { useRef, useState } from "react";

function App() {
  const intervalRef = useRef(null);
  const [laikas, setLaikas] = useState(0);

  const start = () => {
    intervalRef.current = setInterval(() => {
      setLaikas((senasLaikas) => senasLaikas + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setLaikas(0);
  };

  return (
    <div>
      <h1>{laikas}</h1>

      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;

*/
/*

import { useRef, useState } from "react";

function App() {
  const inputRef = useRef(null);
  const [tekstas, setTekstas] = useState("");

  const isvalyti = () => {
    setTekstas("");
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        value={tekstas}
        onChange={(e) => setTekstas(e.target.value)}
      />

      <button onClick={isvalyti}>
        Išvalyti
      </button>
    </div>
  );
}

export default App;

*/
/*
import { useState, useEffect } from "react";

function App() {
  const [tekstas, setTekstas] = useState("");
  const [liko, setLiko] = useState(100);
  const [uzblokuota, setUzblokuota] = useState(false);

  useEffect(() => {
    const kiekis = tekstas.length;

    setLiko(100 - kiekis);

    if (kiekis >= 100) {
      setUzblokuota(true);
    } else {
      setUzblokuota(false);
    }

  }, [tekstas]);


  return (
    <div>
      <textarea
        value={tekstas}
        onChange={(e) => setTekstas(e.target.value)}
        disabled={uzblokuota}
        maxLength="100"
      />

      <p>
        Likę simboliai: {liko}
      </p>
    </div>
  );
}

export default App;

*/

/*

import { useState, useEffect, useRef } from "react";

function App() {
  const paveiksleliai = [
    "https://picsum.photos/id/1015/400/250",
    "https://picsum.photos/id/1025/400/250",
    "https://picsum.photos/id/1035/400/250"
  ];

  const [dabartinis, setDabartinis] = useState(0);

  const intervalRef = useRef(null);


  const next = () => {
    setDabartinis((senas) =>
      senas === paveiksleliai.length - 1 ? 0 : senas + 1
    );
  };


  const previous = () => {
    setDabartinis((senas) =>
      senas === 0 ? paveiksleliai.length - 1 : senas - 1
    );
  };


  useEffect(() => {
    intervalRef.current = setInterval(() => {
      next();
    }, 3000);


    return () => {
      clearInterval(intervalRef.current);
    };

  }, []);


  return (
    <div>

      <img
        src={paveiksleliai[dabartinis]}
        width="400"
      />

      <br />

      <button onClick={previous}>
        Previous
      </button>

      <button onClick={next}>
        Next
      </button>

    </div>
  );
}

export default App;

*/
/*

import { useState, useRef, useEffect } from "react";

function App() {
  const [laikas, setLaikas] = useState(25 * 60);
  const intervalRef = useRef(null);

  const start = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setLaikas((senasLaikas) => senasLaikas - 1);
    }, 1000);
  };


  const pause = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };


  const reset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setLaikas(25 * 60);
  };


  useEffect(() => {
    if (laikas === 0) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [laikas]);


  const minutes = Math.floor(laikas / 60);
  const seconds = laikas % 60;


  return (
    <div>
      <h1>
        {minutes}:{seconds < 10 ? "0" : ""}{seconds}
      </h1>

      <button onClick={start}>
        Start
      </button>

      <button onClick={pause}>
        Pause
      </button>

      <button onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default App;

*/
/*

import { useState, useRef, useEffect } from "react";

function App() {
  const paveiksleliai = [
    "https://picsum.photos/id/1015/400/250",
    "https://picsum.photos/id/1025/400/250",
    "https://picsum.photos/id/1035/400/250",
  ];

  const [dabartinis, setDabartinis] = useState(0);
  const intervalRef = useRef(null);

  const paleistiLaikmati = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDabartinis((senas) =>
        senas === paveiksleliai.length - 1 ? 0 : senas + 1
      );
    }, 3000);
  };

  const next = () => {
    setDabartinis((senas) =>
      senas === paveiksleliai.length - 1 ? 0 : senas + 1
    );

    paleistiLaikmati();
  };

  const previous = () => {
    setDabartinis((senas) =>
      senas === 0 ? paveiksleliai.length - 1 : senas - 1
    );

    paleistiLaikmati();
  };

  useEffect(() => {
    paleistiLaikmati();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <img
        src={paveiksleliai[dabartinis]}
        width="400"
        alt="Slideshow"
      />

      <br />

      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
    </div>
  );
}

export default App;

*/

/*

import { useState, useRef, useEffect } from "react";

function App() {
  const [laikas, setLaikas] = useState(25 * 60);

  const intervalRef = useRef(null);


  const start = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setLaikas((senasLaikas) => senasLaikas - 1);
    }, 1000);
  };


  const pause = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };


  const reset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setLaikas(25 * 60);
  };


  useEffect(() => {
    if (laikas === 0) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [laikas]);


  const minutes = Math.floor(laikas / 60);
  const sekundes = laikas % 60;


  return (
    <div>
      <h1>
        {minutes}:{sekundes < 10 ? "0" : ""}
        {sekundes}
      </h1>

      <button onClick={start}>
        Start
      </button>

      <button onClick={pause}>
        Pause
      </button>

      <button onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default App;

*/

/*
import { useState, useRef } from "react";

function App() {

  const [vardas, setVardas] = useState("");
  const [email, setEmail] = useState("");
  const [slaptazodis, setSlaptazodis] = useState("");

  const [zinute, setZinute] = useState("");

  const vardasRef = useRef(null);
  const emailRef = useRef(null);
  const slaptazodisRef = useRef(null);


  const tikrintiForma = (e) => {
    e.preventDefault();

    if (vardas === "") {
      vardasRef.current.focus();
      return;
    }

    if (email === "") {
      emailRef.current.focus();
      return;
    }

    if (slaptazodis === "") {
      slaptazodisRef.current.focus();
      return;
    }


    setZinute("Registracija sėkminga!");
  };


  return (
    <div>

      <h1>Registracija</h1>

      <form onSubmit={tikrintiForma}>

        <input
          ref={vardasRef}
          type="text"
          placeholder="Vardas"
          value={vardas}
          onChange={(e) => setVardas(e.target.value)}
        />

        <br />


        <input
          ref={emailRef}
          type="email"
          placeholder="El. paštas"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />


        <input
          ref={slaptazodisRef}
          type="password"
          placeholder="Slaptažodis"
          value={slaptazodis}
          onChange={(e) => setSlaptazodis(e.target.value)}
        />

        <br />


        <button type="submit">
          Registruotis
        </button>

      </form>


      <h2>{zinute}</h2>

    </div>
  );
}

export default App;

*/
/*
import { useEffect, useRef } from "react";

function App() {

  const progressRef = useRef(null);

  useEffect(() => {

    const handleScroll = () => {

      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const procentai = (scrollTop / documentHeight) * 100;

      progressRef.current.style.width = procentai + "%";
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (
    <div>

      <div
        ref={progressRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "8px",
          width: "0%",
          background: "green"
        }}
      ></div>

      <div style={{ height: "3000px", paddingTop: "20px" }}>
        <h1>Scroll žemyn</h1>
      </div>

    </div>
  );
}

export default App;

*/
/*
import { useState, useRef } from "react";

function App() {

  const [spalva, setSpalva] = useState("#ffffff");

  const [istorija, setIstorija] = useState([]);

  const kvadratasRef = useRef(null);


  const generuotiSpalva = () => {

    const naujaSpalva =
      "#" + Math.floor(Math.random() * 16777215).toString(16);


    setSpalva(naujaSpalva);


    kvadratasRef.current.style.backgroundColor = naujaSpalva;


    setIstorija((senosSpalvos) => {

      const naujosSpalvos = [
        naujaSpalva,
        ...senosSpalvos
      ];

      return naujosSpalvos.slice(0, 5);

    });

  };


  return (
    <div>

      <h1>Spalvų generatorius</h1>


      <div
        ref={kvadratasRef}
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: spalva
        }}
      ></div>


      <button onClick={generuotiSpalva}>
        Generuoti spalvą
      </button>


      <h2>
        HEX: {spalva}
      </h2>


      <h3>Paskutinės spalvos:</h3>

      <ul>
        {istorija.map((spalva, index) => (
          <li key={index}>
            {spalva}
          </li>
        ))}
      </ul>


    </div>
  );
}

export default App;


*/

/*
import { useState, useEffect } from "react";

function App() {

  const produktai = [
    "iPhone 15",
    "Samsung Galaxy S24",
    "Google Pixel",
    "MacBook Air",
    "Lenovo Laptop",
    "HP Pavilion",
    "Dell Monitor",
    "Logitech Klaviatūra",
    "Sony Ausinės",
    "Apple Watch",
    "Samsung TV",
    "LG Televizorius",
    "Canon Kamera",
    "Nikon Fotoaparatas",
    "PlayStation 5",
    "Xbox Series X",
    "Nintendo Switch",
    "JBL Kolonėlė",
    "Xiaomi Telefonas",
    "Huawei Planšetė"
  ];


  const [paieska, setPaieska] = useState("");

  const [rezultatai, setRezultatai] = useState([]);



  useEffect(() => {

    const laikmatis = setTimeout(() => {


      const filtruoti = produktai.filter((produktas) =>
        produktas
          .toLowerCase()
          .includes(paieska.toLowerCase())
      );


      setRezultatai(filtruoti);


    }, 500);



    return () => {
      clearTimeout(laikmatis);
    };


  }, [paieska]);



  return (
    <div>

      <h1>Produktų paieška</h1>


      <input
        type="text"
        placeholder="Ieškoti produkto..."
        value={paieska}
        onChange={(e) => setPaieska(e.target.value)}
      />


      <h2>Rezultatai:</h2>


      <ul>

        {rezultatai.map((produktas, index) => (
          <li key={index}>
            {produktas}
          </li>
        ))}

      </ul>


    </div>
  );
}


export default App;

*/

/*

import { createContext, useContext } from "react";


// 1. Sukuriame Context
const UserContext = createContext();


function App() {

  const vartotojas = "Marius";


  return (

    <UserContext.Provider value={vartotojas}>

      <h1>Pagrindinis puslapis</h1>

      <Profile />

    </UserContext.Provider>

  );
}



function Profile() {

  const vardas = useContext(UserContext);


  return (

    <div>

      <h2>Profilis</h2>

      <p>Vartotojas: {vardas}</p>

    </div>

  );

}


export default App;

*/
/*

import { createContext, useContext } from "react";

const UserContext = createContext();

function App() {

  const vartotojas = {
    vardas: "Marius",
    pavarde: "Jokubauskas",
    amzius: 50,
  };

  return (
    <UserContext.Provider value={vartotojas}>
      <Profile />
    </UserContext.Provider>
  );
}

function Profile() {

  const vartotojas = useContext(UserContext);

  return (
    <div>
      <h2>Vartotojo informacija</h2>

      <p>Vardas: {vartotojas.vardas}</p>

      <p>Pavardė: {vartotojas.pavarde}</p>

      <p>Amžius: {vartotojas.amzius}</p>
    </div>
  );
}

export default App;

*/
/*

import { createContext, useContext } from "react";


// Sukuriame ColorContext
const ColorContext = createContext();


function App() {

  const spalva = "blue";


  return (
    <ColorContext.Provider value={spalva}>

      <Color />

    </ColorContext.Provider>
  );
}



function Color() {

  const spalva = useContext(ColorContext);


  return (
    <div>

      <h2>Mėgstama spalva</h2>


      <p>
        Spalva: {spalva}
      </p>


      <h1 style={{ color: spalva }}>
        Šis tekstas yra {spalva} spalvos
      </h1>


    </div>
  );
}


export default App;

*/
/*

import { createContext, useContext, useState } from "react";


// Sukuriame LanguageContext
const LanguageContext = createContext();


function App() {

  const [kalba, setKalba] = useState("LT");


  return (
    <LanguageContext.Provider value={{ kalba, setKalba }}>

      <Pasisveikinimas />

    </LanguageContext.Provider>
  );
}



function Pasisveikinimas() {

  const { kalba, setKalba } = useContext(LanguageContext);


  return (
    <div>

      <button onClick={() => setKalba("LT")}>
        LT
      </button>


      <button onClick={() => setKalba("EN")}>
        EN
      </button>



      {kalba === "LT" ? (
        <h1>Sveiki!</h1>
      ) : (
        <h1>Hello!</h1>
      )}


    </div>
  );
}


export default App;

*/

/*
import { createContext, useContext, useState } from "react";


// Sukuriame ThemeContext
const ThemeContext = createContext();



function App() {

  const [tema, setTema] = useState("light");


  const keistiTema = () => {

    setTema((senaTema) =>
      senaTema === "light" ? "dark" : "light"
    );

  };


  return (
    <ThemeContext.Provider value={{ tema, keistiTema }}>

      <Puslapis />

    </ThemeContext.Provider>
  );
}



function Puslapis() {

  const { tema, keistiTema } = useContext(ThemeContext);


  return (
    <div
      style={{
        backgroundColor: tema === "dark" ? "black" : "white",
        color: tema === "dark" ? "white" : "black",
        height: "100vh",
        padding: "20px"
      }}
    >

      <h1>
        Dabartinė tema: {tema}
      </h1>


      <button onClick={keistiTema}>
        Switch Theme
      </button>


    </div>
  );
}



export default App;

*/
/*

import { createContext, useContext, useState } from "react";


// Sukuriame AuthContext
const AuthContext = createContext();



function App() {

  const [prisijunges, setPrisijunges] = useState(false);


  const login = () => {
    setPrisijunges(true);
  };


  const logout = () => {
    setPrisijunges(false);
  };


  return (
    <AuthContext.Provider value={{ prisijunges, login, logout }}>

      <Profilis />

    </AuthContext.Provider>
  );
}



function Profilis() {

  const { prisijunges, login, logout } = useContext(AuthContext);


  return (
    <div>

      <h2>
        {prisijunges ? "Prisijungęs" : "Neprisijungęs"}
      </h2>


      <button onClick={login}>
        Login
      </button>


      <button onClick={logout}>
        Logout
      </button>


    </div>
  );
}



export default App;

*/

/*
import { createContext, useContext, useState } from "react";


// Sukuriame UserContext
const UserContext = createContext();



function App() {

  const [vardas, setVardas] = useState("Marius");


  return (
    <UserContext.Provider value={{ vardas, setVardas }}>

      <Profilis />

      <Sveikinimas />

    </UserContext.Provider>
  );
}



function Profilis() {

  const { vardas, setVardas } = useContext(UserContext);


  return (
    <div>

      <h2>Profilis</h2>

      <p>Dabartinis vardas: {vardas}</p>


      <input
        value={vardas}
        onChange={(e) => setVardas(e.target.value)}
      />

    </div>
  );
}




function Sveikinimas() {

  const { vardas } = useContext(UserContext);


  return (
    <h2>
      Sveikas, {vardas}!
    </h2>
  );
}



export default App;

*/
/*

import { createContext, useContext, useState } from "react";


// Sukuriame MovieContext
const MovieContext = createContext();



function App() {

  const [filmas, setFilmas] = useState("Interstellar");


  return (
    <MovieContext.Provider value={{ filmas, setFilmas }}>

      <Pasirinkimas />

      <Filmas />

      <Info />

    </MovieContext.Provider>
  );
}




function Pasirinkimas() {

  const { filmas, setFilmas } = useContext(MovieContext);


  return (
    <div>

      <h2>Pasirink mėgstamą filmą</h2>


      <select
        value={filmas}
        onChange={(e) => setFilmas(e.target.value)}
      >

        <option>Interstellar</option>

        <option>Avatar</option>

        <option>Matrix</option>

        <option>Inception</option>

      </select>


    </div>
  );
}




function Filmas() {

  const { filmas } = useContext(MovieContext);


  return (
    <h2>
      Mėgstamiausias filmas: {filmas}
    </h2>
  );
}




function Info() {

  const { filmas } = useContext(MovieContext);


  return (
    <p>
      Pasirinktas filmas yra: {filmas}
    </p>
  );
}




export default App;


*/
/*

import { createContext, useContext, useState } from "react";


// Sukuriame CityContext
const CityContext = createContext();



function App() {

  const [miestas, setMiestas] = useState("Kaunas");


  return (
    <CityContext.Provider value={{ miestas, setMiestas }}>

      <Pasirinkimas />

      <Header />

      <Main />

      <Footer />

    </CityContext.Provider>
  );
}




function Pasirinkimas() {

  const { miestas, setMiestas } = useContext(CityContext);


  return (
    <div>

      <h2>Pasirink miestą</h2>


      <select
        value={miestas}
        onChange={(e) => setMiestas(e.target.value)}
      >

        <option>Kaunas</option>

        <option>Vilnius</option>

        <option>Klaipėda</option>

        <option>Šiauliai</option>

      </select>


    </div>
  );
}




function Header() {

  const { miestas } = useContext(CityContext);


  return (
    <header>

      <h2>
        Header: {miestas}
      </h2>

    </header>
  );
}




function Main() {

  const { miestas } = useContext(CityContext);


  return (
    <main>

      <h2>
        Main: {miestas}
      </h2>

    </main>
  );
}




function Footer() {

  const { miestas } = useContext(CityContext);


  return (
    <footer>

      <h2>
        Footer: {miestas}
      </h2>

    </footer>
  );
}



export default App;

*/

/*

import { createContext, useContext, useState } from "react";

// Sukuriame Context
const CityContext = createContext();

function App() {

  const [miestas, setMiestas] = useState("Kaunas");

  return (
    <CityContext.Provider value={{ miestas, setMiestas }}>

      <Pasirinkimas />

      <Header />

      <Main />

      <Footer />

    </CityContext.Provider>
  );
}

function Pasirinkimas() {

  const { miestas, setMiestas } = useContext(CityContext);

  return (
    <div>
      <h2>Pasirink miestą</h2>

      <select
        value={miestas}
        onChange={(e) => setMiestas(e.target.value)}
      >
        <option value="Kaunas">Kaunas</option>
        <option value="Vilnius">Vilnius</option>
        <option value="Klaipėda">Klaipėda</option>
        <option value="Šiauliai">Šiauliai</option>
      </select>
    </div>
  );
}

function Header() {

  const { miestas } = useContext(CityContext);

  return (
    <header>
      <h2>Header</h2>
      <p>Miestas: {miestas}</p>
    </header>
  );
}

function Main() {

  const { miestas } = useContext(CityContext);

  return (
    <main>
      <h2>Main</h2>
      <p>Miestas: {miestas}</p>
    </main>
  );
}

function Footer() {

  const { miestas } = useContext(CityContext);

  return (
    <footer>
      <h2>Footer</h2>
      <p>Miestas: {miestas}</p>
    </footer>
  );
}

export default App;

*/
/*
import { createContext, useContext } from "react";

const CourseContext = createContext();

function Header() {
  const { title } = useContext(CourseContext);

  return <h1>{title}</h1>;
}

function Main() {
  const { teacher } = useContext(CourseContext);

  return <h2>Dėstytojas: {teacher}</h2>;
}

function Footer() {
  const { title, teacher } = useContext(CourseContext);

  return (
    <footer>
      <p>
        Kursas: {title} | Dėstytojas: {teacher}
      </p>
    </footer>
  );
}

function App() {
  const course = {
    title: "React kursas",
    teacher: "Jonas Jonaitis",
  };

  return (
    <CourseContext.Provider value={course}>
      <Header />
      <Main />
      <Footer />
    </CourseContext.Provider>
  );
}

export default App;

*/

/*

import { createContext, useContext, useEffect, useState } from "react";


// 1. Sukuriame Context
const ThemeContext = createContext();


// 2. Header komponentas
function Header() {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <header>
      <h1>Tema: {theme}</h1>

      <button onClick={changeTheme}>
        Pakeisti temą
      </button>
    </header>
  );
}


// 3. Main komponentas
function Main() {
  const { theme } = useContext(ThemeContext);

  return (
    <main>
      <h2>Dabartinė tema: {theme}</h2>
    </main>
  );
}


// 4. Footer komponentas
function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer>
      <p>Tema: {theme}</p>
    </footer>
  );
}


// 5. Pagrindinis komponentas
function App() {

  // useState saugo temą
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );


  // useEffect išsaugo temą
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);


  // funkcija pakeisti temą
  function changeTheme() {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light"
    );
  }


  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <Header />
      <Main />
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;

*/

/*

import { useState, useEffect } from "react";


function App() {

  // Pasiimame kalbą iš localStorage
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "lt"
  );


  // Išsaugome kalbą, kai ji pasikeičia
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);


  return (
    <div>

      <h1>
        Pasirinkta kalba: {language}
      </h1>


      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >

        <option value="lt">
          Lietuvių
        </option>

        <option value="en">
          English
        </option>

      </select>


    </div>
  );
}

export default App;

*/

/*

import { createContext, useContext, useEffect, useState } from "react";

const VisitContext = createContext();


function Header() {
  const { visits } = useContext(VisitContext);

  return (
    <h1>
      Apsilankymai: {visits}
    </h1>
  );
}


function App() {

  const [visits, setVisits] = useState(
    Number(localStorage.getItem("visits")) || 0
  );


  useEffect(() => {

    setVisits(prev => {

      const newVisits = prev + 0.5;

      localStorage.setItem(
        "visits",
        newVisits
      );

      return newVisits;
    });

  }, []);


  return (
    <VisitContext.Provider value={{ visits }}>
      <Header />
    </VisitContext.Provider>
  );
}


export default App;


*/

/*

import { createContext, useContext, useState } from "react";


// Sukuriame Context
const CartContext = createContext();


// Header komponentas
function Header() {

  const { cart } = useContext(CartContext);

  return (
    <header>
      <h1>
        Krepšelyje prekių: {cart.length}
      </h1>
    </header>
  );
}


// Parduotuvės komponentas
function Shop() {

  const { addToCart, removeFromCart, cart } = useContext(CartContext);


  return (
    <div>

      <h2>Prekės</h2>

      <button onClick={() => addToCart("Telefonas")}>
        Pridėti telefoną
      </button>

      <button onClick={() => addToCart("Kompiuteris")}>
        Pridėti kompiuterį
      </button>


      <h2>Krepšelis:</h2>

      {cart.map((item, index) => (
        <div key={index}>
          {item}

          <button onClick={() => removeFromCart(index)}>
            Pašalinti
          </button>

        </div>
      ))}

    </div>
  );
}



// Pagrindinis komponentas
function App() {


  const [cart, setCart] = useState([]);



  function addToCart(product) {

    setCart(prevCart => [
      ...prevCart,
      product
    ]);

  }



  function removeFromCart(index) {

    setCart(prevCart =>
      prevCart.filter((_, i) => i !== index)
    );

  }



  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart
      }}
    >

      <Header />
      <Shop />

    </CartContext.Provider>
  );
}


export default App;

*/

/*

import { createContext, useContext, useState } from "react";


// Sukuriame Context
const TodoContext = createContext();


// Header komponentas
function Header() {

  const { todos } = useContext(TodoContext);

  return (
    <header>
      <h1>
        Užduočių kiekis: {todos.length}
      </h1>
    </header>
  );
}


// Užduočių pridėjimo komponentas
function AddTodo() {

  const { addTodo } = useContext(TodoContext);


  function handleAdd() {
    addTodo("Išmokti React");
  }


  return (
    <button onClick={handleAdd} style={{ width: "50%" }}>
      Pridėti užduotį
    </button>
  );
}


// Užduočių sąrašo komponentas
function TodoList() {

  const { todos, toggleTodo, deleteTodo } = useContext(TodoContext);


  return (
    <div>

      {todos.map(todo => (

        <div key={todo.id}>

          <span
            onClick={() => toggleTodo(todo.id)}
            style={{
              textDecoration: todo.done ? "line-through" : "none"
            }}
          >
            {todo.text}
          </span>


          <button onClick={() => deleteTodo(todo.id)}>
            Ištrinti
          </button>

        </div>

      ))}

    </div>
  );
}



// Pagrindinis komponentas
function App() {


  const [todos, setTodos] = useState([]);



  // Pridėti užduotį
  function addTodo(text) {

    const newTodo = {
      id: Date.now(),
      text: text,
      done: false
    };


    setTodos(prev => [
      ...prev,
      newTodo
    ]);
  }



  // Pažymėti atliktą
  function toggleTodo(id) {

    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, done: !todo.done }
          : todo
      )
    );

  }



  // Ištrinti
  function deleteTodo(id) {

    setTodos(prev =>
      prev.filter(todo => todo.id !== id)
    );

  }



  return (

    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        deleteTodo
      }}
    >

      <Header />

      <AddTodo />

      <TodoList />

    </TodoContext.Provider>

  );
}


export default App;


*/
/*
import { createContext, useContext, useState } from "react";


// Sukuriame Context
const StudentContext = createContext();


// Header komponentas
function Header() {

  const { students } = useContext(StudentContext);

  return (
    <h1>
      Studentų kiekis: {students.length}
    </h1>
  );
}


// Studentų sąrašo komponentas
function StudentList() {

  const { students, deleteStudent } = useContext(StudentContext);


  return (
    <div>

      <h2>Studentų sąrašas</h2>

      {students.map(student => (

        <div key={student.id}>

          <p>
            {student.name}
          </p>

          <button onClick={() => deleteStudent(student.id)}>
            Ištrinti
          </button>

        </div>

      ))}

    </div>
  );
}



// Studentų pridėjimo komponentas
function AddStudent() {

  const { addStudent } = useContext(StudentContext);


  return (
    <button
      onClick={() => addStudent("Jonas")}
      onClick={() => addStudent("J")}
      onClick={() => addStudent("Jo")}
      onClick={() => addStudent("Jon")}
      onClick={() => addStudent("Jona")}
      onClick={() => addStudent("Jonas")}
      onClick={() => addStudent("Jona")}
      onClick={() => addStudent("Jon")}
      onClick={() => addStudent("Jo")}
      onClick={() => addStudent("J")}
      onClick={() => addStudent("Jo")}
      onClick={() => addStudent("Jon")}
      onClick={() => addStudent("Jona")}
    >
      Pridėti studentą
    </button>
  );
}



// Pagrindinis komponentas
function App() {


  const [students, setStudents] = useState([]);



  // Pridėti studentą
  function addStudent(name) {

    const newStudent = {
      id: Date.now(),
      name: name
    };


    setStudents(prev => [
      ...prev,
      newStudent
    ]);

  }



  // Ištrinti studentą
  function deleteStudent(id) {

    setStudents(prev =>
      prev.filter(student => student.id !== id)
    );

  }



  return (

    <StudentContext.Provider
      value={{
        students,
        addStudent,
        deleteStudent
      }}
    >

      <Header />

      <AddStudent />

      <StudentList />

    </StudentContext.Provider>

  );
}


export default App;
*/
/*


import { createContext, useContext, useState } from "react";


// Sukuriame Context
const FavoritesContext = createContext();


// Header komponentas
function Header() {

  const { favorites } = useContext(FavoritesContext);

  return (
    <header>
      <h1>
        Mėgstamų filmų kiekis: {favorites.length}
      </h1>
    </header>
  );
}


// Filmų sąrašo komponentas
function FavoritesList() {

  const { favorites, removeMovie } = useContext(FavoritesContext);


  return (
    <div>

      <h2>Mėgstami filmai</h2>


      {favorites.map(movie => (

        <div key={movie.id}>

          <p>
            {movie.title}
          </p>


          <button onClick={() => removeMovie(movie.id)}>
            Pašalinti
          </button>


        </div>

      ))}


    </div>
  );
}



// Pridėjimo komponentas
function AddMovie() {

  const { addMovie } = useContext(FavoritesContext);


  return (

    <button
      onClick={() =>
        addMovie("Interstellar")
      }
    >
      Pridėti filmą
    </button>

  );
}



// App komponentas
function App() {


  const [favorites, setFavorites] = useState([]);



  // Pridedame filmą
  function addMovie(title) {


    const newMovie = {

      id: Date.now(),

      title: title

    };


    setFavorites(prev => [

      ...prev,

      newMovie

    ]);

  }



  // Pašaliname filmą
  function removeMovie(id) {


    setFavorites(prev =>

      prev.filter(movie => movie.id !== id)

    );

  }



  return (

    <FavoritesContext.Provider

      value={{

        favorites,

        addMovie,

        removeMovie

      }}

    >

      <Header />

      <AddMovie />

      <FavoritesList />


    </FavoritesContext.Provider>

  );
}


export default App;

*/
/*

import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

function Header() {
  const { category } = useContext(ProductContext);

  return <h1>Kategorija: {category}</h1>;
}

function Filter() {
  const { setCategory } = useContext(ProductContext);

  return (
    <select onChange={(e) => setCategory(e.target.value)}>
      <option value="Visi">Visi</option>
      <option value="Telefonai">Telefonai</option>
      <option value="Kompiuteriai">Kompiuteriai</option>
    </select>
  );
}

function ProductList() {
  const { products, category } = useContext(ProductContext);

  const filteredProducts =
    category === "Visi"
      ? products
      : products.filter(
          (product) => product.category === category
        );

  return (
    <div>
      {filteredProducts.map((product) => (
        <p key={product.id}>
          {product.name}
        </p>
      ))}
    </div>
  );
}

function App() {
  const [category, setCategory] = useState("Visi");

  const products = [
    { id: 1, name: "iPhone", category: "Telefonai" },
    { id: 2, name: "Samsung", category: "Telefonai" },
    { id: 3, name: "Dell", category: "Kompiuteriai" },
    { id: 4, name: "Lenovo", category: "Kompiuteriai" },
  ];

  return (
    <ProductContext.Provider
      value={{
        products,
        category,
        setCategory,
      }}
    >
      <Header />
      <Filter />
      <ProductList />
    </ProductContext.Provider>
  );
}

export default App;


*/

/*


import { createContext, useContext, useState } from 'react';

// ==========================================
// 1. CART CONTEXT (KREPŠELIO KONTEKSTAS)
// ==========================================

const CartContext = createContext();

const CartProvider = ({ children }) => {
  // Krepšelio būsena: masyvas su prekėmis { id, title, price, quantity }
  const [cart, setCart] = useState([]);

  // Prekių sąrašas (katalogas)
  const products = [
    { id: 1, title: 'Belaidės ausinės', price: 59.99 },
    { id: 2, title: 'Išmanusis laikrodis', price: 129.99 },
    { id: 3, title: 'Mechaninė klaviatūra', price: 89.99 },
    { id: 4, title: 'Kompiuterinė pelytė', price: 39.99 },
  ];

  // 1. Prekės pridėjimas
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        // Jei prekė jau yra – padidiname kiekį
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Jei prekės nėra – pridedame naują
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // 2. Prekės pašalinimas
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // 3. Bendras prekių kiekis
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // 4. Bendra krepšelio suma
  const totalPrice = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

// ==========================================
// 2. KOMPONENTAI
// ==========================================

// --- Header komponentas ---
function Header() {
  const { totalItems } = useCart();

  return (
    <header
      style={{
        backgroundColor: '#282c34',
        color: 'white',
        padding: '15px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '8px 8px 0 0',
      }}
    >
      <h2 style={{ margin: 0 }}>E-Parduotuvė</h2>
      <div>
        🛒 Krepšelyje: <strong>{totalItems}</strong> prekės(-ių)
      </div>
    </header>
  );
}

// --- ProductList komponentas ---
function ProductList() {
  const { products, addToCart } = useCart();

  return (
    <section style={{ margin: '20px 0' }}>
      <h3>Prekių katalogas</h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '15px',
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '15px',
              textAlign: 'center',
              backgroundColor: '#fff',
            }}
          >
            <h4 style={{ margin: '0 0 10px 0' }}>{product.title}</h4>
            <p style={{ fontWeight: 'bold', color: '#2c3e50' }}>
              {product.price.toFixed(2)} €
            </p>
            <button
              onClick={() => addToCart(product)}
              style={{
                backgroundColor: '#27ae60',
                color: 'white',
                border: 'none',
                padding: '8px 12px',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Į krepšelį
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- Cart komponentas ---
function Cart() {
  const { cart, removeFromCart, totalPrice, totalItems } = useCart();

  return (
    <section
      style={{
        borderTop: '2px solid #eee',
        paddingTop: '15px',
        marginTop: '20px',
      }}
    >
      <h3>Pirkinių krepšelis</h3>

      {cart.length === 0 ? (
        <p style={{ color: '#7f8c8d' }}>Krepšelis tuščias.</p>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cart.map((item) => (
              <li
                key={item.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '8px 0',
                  borderBottom: '1px solid #eee',
                }}
              >
                <div>
                  <strong>{item.title}</strong> — {item.price.toFixed(2)} € x{' '}
                  {item.quantity}
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    backgroundColor: '#e74c3c',
                    color: 'white',
                    border: 'none',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  Pašalinti
                </button>
              </li>
            ))}
          </ul>

          <div
            style={{
              marginTop: '15px',
              padding: '10px',
              backgroundColor: '#f8f9fa',
              borderRadius: '6px',
            }}
          >
            <p style={{ margin: '5px 0' }}>
              Iš viso prekių: <strong>{totalItems}</strong>
            </p>
            <p style={{ margin: '5px 0', fontSize: '18px' }}>
              Bendra suma: <strong>{totalPrice} €</strong>
            </p>
          </div>
        </>
      )}
    </section>
  );
}

// --- Footer komponentas ---
function Footer() {
  const { totalPrice } = useCart();

  return (
    <footer
      style={{
        backgroundColor: '#282c34',
        color: 'white',
        padding: '15px 20px',
        textAlign: 'center',
        borderRadius: '0 0 8px 8px',
        marginTop: '30px',
      }}
    >
      <p style={{ margin: 0 }}>
        Mokėjimo suma: <strong>{totalPrice} €</strong> | Visos teisės saugomos.
      </p>
    </footer>
  );
}

// ==========================================
// 3. PAGRINDINIS APP KOMPONENTAS
// ==========================================

export default function App() {
  return (
    <CartProvider>
      <div
        style={{
          maxWidth: '600px',
          margin: '20px auto',
          fontFamily: 'sans-serif',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          borderRadius: '8px',
        }}
      >
        <Header />
        <main style={{ padding: '20px' }}>
          <ProductList />
          <Cart />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}


*/
/*
import useCounter from "./useCounter";

function App() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h1>Skaitiklis: {count}</h1>

      <button onClick={increment}>
        Padidinti +
      </button>

      <button onClick={decrement}>
        Sumažinti -
      </button>

      <button onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default App;

*/
/*
import useToggle from "./useToggle";

function App() {

  const { value, toggle } = useToggle();

  return (
    <div>

      <h1>Dark Mode</h1>

      <button onClick={toggle}>
        Įjungti / Išjungti
      </button>

      <p>
        Reikšmė: {value ? "ON" : "OFF"}
      </p>

    </div>
  );
}

export default App;

*/

/*
import useInput from "./useInput";

function App() {

  const {
    value,
    onChange,
    clear
  } = useInput();

  return (
    <div>

      <h2>Registracija</h2>

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Įveskite vardą"
      />

      <br />
      <br />

      <button onClick={clear}>
        Išvalyti
      </button>

      <p>Įvesta: {value}</p>

    </div>
  );
}

export default App;

*/
/*
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";

function App() {
  return (
    <div>
      <h1>Custom Hook pavyzdys</h1>

      <CounterOne />

      <hr />

      <CounterTwo />
    </div>
  );
}

export default App;

*/

/*

import ToggleText from "./ToggleText";

function App() {
  return (
    <div>
      <h1>useToggle pavyzdys</h1>

      <ToggleText />
    </div>
  );
}

export default App;

*/

/*
import Register from "./Register";


function App() {

  return (
    <div>

      <Register />

    </div>
  );
}


export default App;

*/
/*
import useWindowSize from "./useWindowSize";

function App() {

  const size = useWindowSize();

  return (
    <div>
      <h1>Lango dydis</h1>

      <p>Plotis: {size.width}px</p>

      <p>Aukštis: {size.height}px</p>
    </div>
  );
}

export default App;

*/
/*
import useTheme from "./hooks/useTheme";


function App() {


  const { theme, toggleTheme } = useTheme();


  return (

    <div>

      <h1>Tema: {theme}</h1>


      <button onClick={toggleTheme}>
        Keisti temą
      </button>


    </div>

  );
}


export default App;

*/
/*
import useTheme from "./hooks/useTheme";


function App() {

  const { theme, toggleTheme } = useTheme();


  return (
    <div
      style={{
        backgroundColor: theme,
        color: theme === "black" ? "white" : "black",
        height: "100vh"
      }}
    >

      <h1>
        Tema: {theme}
      </h1>


      <button onClick={toggleTheme}>
        Keisti spalvą
      </button>


    </div>
  );
}


export default App;

*/

/*
createRoot(document.getElementById("root")).render(

  <AuthProvider>

    <App />

  </AuthProvider>

);

*/
/*

import useAuth from "./hooks/useAuth";


function App() {


  const { user, login, logout } = useAuth();


  return (
    <div>

      {
        user ? (
          <>
            <h2>
              Sveiki, {user}
            </h2>

            <button onClick={logout}>
              Atsijungti
            </button>
          </>
        )
        :
        (
          <button onClick={login}>
            Prisijungti
          </button>
        )
      }

    </div>
  );
}


export default App;

*/
/*
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

*/
/*

import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

*/
/*
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./Navbar";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
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

/*
import RegistrationForm from "./RegistrationForm";

function App() {
  return (
    <div>
      <h1>Registracija</h1>
      <RegistrationForm />
    </div>
  );
}

export default App;


*/

/*
import LoginForm from "./LoginForm";

function App() {
  return (
    <div>
      <h1>Prisijungimas</h1>

      <LoginForm />
    </div>
  );
}

export default App;



*/

/*

import ProfileForm from "./ProfileForm";

function App() {
  return (
    <div>
      <h1>Profilis</h1>
      <ProfileForm />
    </div>
  );
}

export default App;
*/
/*
import StudentForm from "./StudentForm";

function App() {
  return (
    <div>
      <h1>Studento registracija</h1>
      <StudentForm />
    </div>
  );
}

export default App;

*/

/*
import { useState } from "react";
import Child from "./Child";

function App() {
  const [count, setCount] = useState(0);

  console.log("Father render");

  return (
    <div>
      <h1>React.memo demo</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        +1
      </button>

      <Child name="Marius" />
    </div>
  );
}

export default App;

*/

/*

import Counter from "./Counter";
import UserInfo from "./UserInfo";

function App() {
  const user = {
    name: "Marius",
    age: 50,
  };

  return (
    <div>
      <h1>React.memo užduotis</h1>

      <Counter />

      <UserInfo user={user} />
    </div>
  );
}

export default App;


*/
/*
import ProductList from "./ProductList";
import Counter from "./Counter";

function App() {
  const products = [
    { id: 1, name: "Telefonas", price: 500 },
    { id: 2, name: "Kompiuteris", price: 1200 },
    { id: 3, name: "Ausinės", price: 100 },
    { id: 4, name: "Pelė", price: 50 },
  ];

  return (
    <div>
      <h1>Produktai</h1>

      <Counter />

      <ProductList products={products} />
    </div>
  );
}

export default App;


*/
/*
import { useState } from "react";
import UserCard from "./UserCard";

function App() {
  const [count, setCount] = useState(0);

  const user = {
    name: "Jonas",
    age: 20
  };

  return (
    <div>
      <h1>memo + props objektas</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        +1
      </button>

      <UserCard user={user} />
    </div>
  );
}

export default App;

*/

import { useMemo, useState } from "react";

function App() {
  const numbers = [10, 20, 30, 40, 50];

  const [count, setCount] = useState(0);

  const suma = useMemo(() => {
    console.log("Skaičiuojama suma");

    return numbers.reduce((total, number) => total + number, 0);
  }, [numbers]);

  const vidurkis = useMemo(() => {
    console.log("Skaičiuojamas vidurkis");

    return suma / numbers.length;
  }, [suma, numbers]);

  const maziausias = useMemo(() => {
    console.log("Ieškomas mažiausias");

    return Math.min(...numbers);
  }, [numbers]);

  const didziausias = useMemo(() => {
    console.log("Ieškomas didžiausias");

    return Math.max(...numbers);
  }, [numbers]);

  return (
    <div>
      <h1>Skaičių statistika</h1>

      <p>Suma: {suma}</p>
      <p>Vidurkis: {vidurkis}</p>
      <p>Mažiausias: {maziausias}</p>
      <p>Didžiausias: {didziausias}</p>

      <hr />

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Padidinti
      </button>
    </div>
  );
}

export default App;