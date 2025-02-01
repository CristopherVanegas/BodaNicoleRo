import { WeddingPage } from './WeddingPage/WeddingPage'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WeddingPage />
    </>
  )
}

export default App
