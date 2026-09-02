import React from "react";
import { useState,useEffect } from 'react';
export default function Home() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  useEffect(() => {
    console.log('Case 1: Runs on every component render');
  });
  useEffect(() => {
    console.log('Case 2: Component Mounted');
    
    return () => {
      console.log('Case 2 Cleanup: Component Unmounted');
    };
  }, []);
  useEffect(() => {
    console.log(`Case 3: Count updated to ${count}`);
  }, [count]);

  return (
    <div>
      <h2>Home</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>useState Counter</h3>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>

      <div>
        <h3>Text Input</h3>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type here..." 
        />
        <p>Value: {text}</p>
      </div>
    </div>
  );
}