
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import{About,Projects,Home,Contact} from './pages/'
function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
