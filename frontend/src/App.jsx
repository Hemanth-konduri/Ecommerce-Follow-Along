import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import signup from './components/signup'
import products from './components/products'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <products/>

      <Login/>
      <signup/>
    </>
  )
}

export default App
