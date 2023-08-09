import React from 'react'
import '../src/stileCSS/stiles.css';

function App() {
   const [count, setCount] = React.useState(0);

   const plusOne = () => {
      setCount(count + 1)
   }
   const minusOne = () => {
      setCount(count - 1)
   }

   return (
      <div className="App">
      <div>
         <h2>counter:</h2>
         <h1>{count}</h1>
         <button onClick={minusOne} className="minus">- minus</button>
         <button onClick={plusOne} className="plus">plas +</button>
      </div>
      </div>
   );
}

export default App;