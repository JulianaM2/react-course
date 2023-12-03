import './App.css'
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => setCount(count + 1);
  const handleRemove = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return <>
    <div className="container">
      <h1>Counter: {count}</h1>
      <hr />
      <button onClick={handleAdd}>+</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleRemove}>-</button>
    </div>
  </>
}

export default App;