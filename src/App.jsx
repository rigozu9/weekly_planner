import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
    return (
      <Router>
        <div className="container">
          <h1>Study plan app</h1>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    )
  }

  export default App