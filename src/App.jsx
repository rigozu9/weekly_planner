import { useState, useEffect } from "react"
import axios from 'axios'

const App = () => {
  const [greeting, setGreeting] = useState("")

  useEffect (() => {
    const fetchGreeting = async () => {
      try {
        const res = await axios.get("http://localhost:3000")
        setGreeting(res.data)
      } catch (e) {
        console.error("There was an error!", e)
      }
    }

    fetchGreeting()
  }, [])

  return (
    <div>{greeting}</div>
  )
}

export default App