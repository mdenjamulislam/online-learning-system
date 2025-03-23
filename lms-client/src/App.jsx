import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <h1 className="text-3xl font-bold">This is Online learning system</h1>
          <button className="btn">Default</button>
          <button className="btn btn-xs">Xsmall</button>
          <button className="btn btn-sm">Small</button>
          <button className="btn">Medium</button>
          <button className="btn btn-lg">Large</button>
          <button className="btn btn-xl">Xlarge</button>
      </>
  );
}

export default App
