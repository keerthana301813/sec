import React, { useState } from 'react';
import './App.css';

function Count() {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState('white');

  // Toggle function to change background color based on count
  function toggleBgColor() {
    if (count > 5) {
      setBgColor('cyan');
    } else {
      setBgColor('white');
    }
  }

  // Call toggleBgColor whenever count changes
  React.useEffect(() => {
    toggleBgColor();
  }, [count]);

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Count;