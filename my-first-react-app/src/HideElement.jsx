import React, { useRef } from 'react';

function HideElement() {
  // 1. Sukuriame nuorodą (ref) tam elementui, kurį norėsime paslėpti
  const elementRef = useRef(null);

  const handleHideElement = () => {
    // 2. Patikriname, ar nuoroda egzistuoja
    if (elementRef.current) {
      // 3. Pakeičiame elemento CSS stilių į display: 'none', kad jį paslėptume
      elementRef.current.style.display = 'none';
      
      // Papildomai: norint paslėpti išlaikant vietą (padaryti permatomą):
      // elementRef.current.style.visibility = 'hidden';
      // elementRef.current.style.opacity = '0';
    }
  };

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
      
      {/* 4. Elementas, kurį slėpsime (kvadratas su fono spalva) */}
      <div 
        ref={elementRef} 
        style={{ 
          width: '200px', 
          height: '100px', 
          backgroundColor: '#ff6b6b', // Pradinė spalva (raudona)
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
          fontWeight: 'bold',
          transition: 'opacity 0.5s ease', // Švelnus paslėpimo efektas, jei naudojama opacity
        }}
      >
        I am a div
      </div>

      {/* 5. Mygtukas, kuris paleidžia paslėpimo funkciją */}
      <button 
        onClick={handleHideElement} 
        style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '4px' }}
      >
        Hide Element
      </button>

      {/* Papildomai: Atstatymo mygtukas (kad galėtume parodyti elementą atgal) */}
      <button 
        onClick={() => { if (elementRef.current) elementRef.current.style.display = 'flex'; }}
        style={{ padding: '5px 10px', fontSize: '12px', cursor: 'pointer', backgroundColor: '#ddd', border: 'none', borderRadius: '4px' }}
      >
        Show Back
      </button>
    </div>
  );
}

export default HideElement;