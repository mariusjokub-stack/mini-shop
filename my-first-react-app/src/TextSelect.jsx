import React, { useRef } from 'react';

function TextSelect() {
  // 1. Create a reference for the input element
  const inputRef = useRef(null);

  const handleSelectText = () => {
    // 2. Check if the input exists, then focus and select it
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  };

  return (
    <div style={{ padding: '20px', display: 'flex', gap: '10px' }}>
      {/* 3. Attach the ref to the input */}
      <input 
        ref={inputRef}
        type="text" 
        defaultValue="This text will be selected using useRef!" 
        style={{ padding: '5px', width: '250px' }}
      />
      
      {/* 4. Trigger the selection on click */}
      <button onClick={handleSelectText} style={{ padding: '5px 10px' }}>
        Select Text
      </button>
    </div>
  );
}

export default TextSelect;