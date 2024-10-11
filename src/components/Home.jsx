import { useState, useEffect } from "react"
import axios from 'axios'

const Home = () => {
  const [plans, setPlans] = useState("")

  useEffect (() => {
    const fetchPlans = async () => {
      try {
        const res = await axios.get("http://localhost:3000/plans")
        setPlans(res.data)
      } catch (e) {
        console.error("There was an error!", e)
      }
    }

    fetchPlans()
  }, [])

  return (
    <div>{plans}</div>
  )
}

export default Home