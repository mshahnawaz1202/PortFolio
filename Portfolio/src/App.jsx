import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { About, Projects, Home, Contact } from './pages/'
import Layout from './components/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout route: Navbar + Outlet wraps all pages */}
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          {/* Catch-all: redirect unknown paths to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
