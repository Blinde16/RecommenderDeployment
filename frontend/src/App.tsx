import './App.css'
import Homepage from './pages/Homepage'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainResults from './pages/mainResults'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/mainResults" element={<MainResults />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
