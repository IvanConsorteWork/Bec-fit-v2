import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Details from "./pages/Details";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </>
  )
}

export default App
