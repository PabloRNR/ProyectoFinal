import './normalize.css';
import './App.css';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import ActoresPage from './pages/ActoresPage';
import CatalogoPage from './pages/CatalogoPage';
import ContactoPage from './pages/ContactoPage';



function App() {
  return (
    // <div className="App">
      <Router>
      <Header></Header>
      <Nav/>
      <Routes>
      <Route path="/" exact element={<HomePage />} />
        <Route path="/Actores" exact element={<ActoresPage />} />
        <Route path="/Catalogo" exact element={<CatalogoPage />} />
        <Route path="/Contacto" exact element={<ContactoPage />} />
      </Routes>
      <Footer/>
      </Router>
    //{*// </div> */}
  );
}


export default App;
