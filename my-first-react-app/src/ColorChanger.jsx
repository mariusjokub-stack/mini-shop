import React, { useRef } from 'react';

function ColorChanger() {
  // 1. Sukuriame nuorodą div elementui
  const boxRef = useRef(null);

  const handleChangeColor = () => {
    if (boxRef.current) {
      // 2. Generuojame atsitiktinę RGB spalvą
      const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
      
      // 3. Pakeičiame div fono spalvą tiesiogiai per DOM stilių
      boxRef.current.style.backgroundColor = randomColor;
    }
  };

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'flex-start' }}>
      {/* 4. Susiejame div su nuoroda ir uždedame pradinį stilių */}
      <div 
        ref={boxRef} 
        style={{ 
          width: '150px', 
          height: '150px', 
          backgroundColor: '#3498db', // Pradinė spalva (mėlyna)
          transition: 'background-color 0.3s ease', // Švelnus spalvos perėjimas
          borderRadius: '8px'
        }}
      ></div>

      {/* 5. Mygtukas, kuris pakeis spalvą */}
      <button onClick={handleChangeColor} style={{ padding: '8px 16px', cursor: 'pointer' }}>
        Change Color
      </button>
    </div>
  );
}

export default ColorChanger;