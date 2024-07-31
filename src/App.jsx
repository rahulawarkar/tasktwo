
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Gallery from './components/Gallery'
import About from './components/About'

const App = () => {
  return (
    <div>
        <Nav/>
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/About" element={<About />} />
     
    </Routes>
  </div>
  )
}

export default App