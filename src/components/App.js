
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [input, setInput] = useState("");

  console.log(input);

  return (
    <div>
        <form>
          <input type="text" value={input} onChange={e => setInput(e.target.value) } />
        </form>
    </div>
  )
}

export default App
