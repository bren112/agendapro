import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from './components/footer';
import Container from './paginas/containerindex';
import Adm from './paginas/navegar';
import Cliente from './paginas/cliente';
import Clientepagina from './paginas/clientepagina';
import Admpage from './paginas/admpage';

function App() {
  return (
    <>
      <Router>
        <div className='header'>
          <h1 id='logo-index'>AgendaPro
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-calendar-check" viewBox="0 0 16 16">
              <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
            </svg>
          </h1>

        <div className='link-header'>
          <Link to="/">Home</Link>
          <Link to="/adm">Administrador</Link>
          <Link to="/cliente">Cliente</Link>

        </div>
        </div>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/adm" element={<Adm />} />
          <Route path="/cliente" element={<Cliente />} />
          <Route path="/cliente" element={<Cliente />} />
          <Route path="/clientepagina" element={<Clientepagina />} />
          <Route path="/admpage" element={<Admpage />} />
          
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;