import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./components/Title"
import "./components/SubTitle"
import "./components/Paragraph"
import "./components/Image"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
        
      <h1 className='titulo'>Vaya fin de semana</h1>  
      <h2>se ha quedado, tan bonito</h2>
      <p>Para dormir, comer y estudiar, estudiar , estudiar y estudiar</p>
      <img src="https://res.cloudinary.com/dlefk3lwg/image/upload/v1712352455/cld-sample-2.jpg"
      alt="montañas nevadas" width="50%" height="50%" className='foto'></img>

    </>
  )
}

export default App
