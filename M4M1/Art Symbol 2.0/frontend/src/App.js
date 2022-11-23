import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from "./Componentes/layout/Header";
import Nav from "./Componentes/layout/Nav";
import Footer from "./Componentes/layout/Footer";

import Contactopage from "./Pages/Contactopage";
import Galeriapage from "./Pages/Galeriapage";  
import Homepage from "./Pages/Homepage";
import Nosotropage from "./Pages/Nosotrospage";
import Serviciospages from "./Pages/Serviciospages";

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="contacto" element={<Contactopage/>}/>
        <Route path="galeria" element={<Galeriapage/>}/>
        <Route path="nosotros" element={<Nosotropage/>}/>
        <Route path="servicios" element={<Serviciospages/>}/>
      </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  );
}

export default App;
