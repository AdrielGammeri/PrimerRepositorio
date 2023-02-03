import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import Contactopage from "./Pages/Contactopage";
import Galeriapage from "./Pages/Galeriapage";  
import Homepage from "./Pages/Homepage";
import Nosotropage from "./Pages/Nosotrospage";
import Novedadespages from "./Pages/Novedadespages";

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/contacto" element={<Contactopage/>}/>
        <Route path="/galeria" element={<Galeriapage/>}/>
        <Route path="/nosotros" element={<Nosotropage/>}/>
        <Route path="/novedades" element={<Novedadespages/>}/>
      </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  );
}

export default App;
