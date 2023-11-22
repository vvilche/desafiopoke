

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './views/Home'
import Pokemones from './views/Pokemones'
import DetallePokemon from './views/DetallePokemon'
import './App.css';

function App() {
  return (
    <>
    <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<Pokemones />} />
        <Route path="/pokemones/:id" element={<DetallePokemon />} />

      
      </Routes>

      <Footer />
    
    </BrowserRouter>
    </div>
    
     
    </>
  )
}

export default App
