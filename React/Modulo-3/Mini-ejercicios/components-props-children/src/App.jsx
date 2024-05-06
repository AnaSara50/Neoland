import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./components/Header"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </header>
      <h1>Que frío hace</h1>
      <h2>podría salir el sol</h2>
      <p>para ir a la playa</p>
      <img src="https://res.cloudinary.com/dlefk3lwg/image/upload/v1714636608/playa_mjd7nb.webp"
      alt="tio bueno" width="25%" height="50%" className='foto'></img>


    </>
  )
}

export default App
