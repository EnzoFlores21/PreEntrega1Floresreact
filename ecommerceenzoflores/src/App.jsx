import { useState } from 'react'


import NavBar from './componets/NavBar/NavBar';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';

// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      <ItemListContainer saludos="Hola" />
    </div>
  )
}

export default App
