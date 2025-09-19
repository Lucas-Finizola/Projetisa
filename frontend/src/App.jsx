import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact.jsx';
import Projetos from './pages/Projetos.jsx';

// Importações das páginas de detalhes
import ServiceDetail from './pages/ServiceDetail.jsx';
import ProjetoDetail from './pages/ProjetoDetail.jsx';

// NOVAS IMPORTAÇÕES PARA NOTÍCIAS
import Noticias from './pages/Noticias.jsx';
import NoticiaDetail from './pages/NoticiaDetail.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main>
          <Routes>
            {/* Rotas principais */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projetos" element={<Projetos />} /> 
            <Route path="/contact" element={<Contact />} />

            {/* ROTA ANTIGA DO BLOG REMOVIDA */}
            
            {/* NOVAS ROTAS PARA NOTÍCIAS (AGORA COM :id) */}
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/noticias/:id" element={<NoticiaDetail />} />
            
            {/* Rotas de Detalhes Dinâmicas */}
            <Route path="/servicos/:documentId" element={<ServiceDetail />} />
            <Route path="/projetos/:documentId" element={<ProjetoDetail />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
