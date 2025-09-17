import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import Projetos from './pages/Projetos.jsx';

// Importações das páginas de detalhes
import ServiceDetail from './pages/ServiceDetail.jsx';
import ProjetoDetail from './pages/ProjetoDetail.jsx';

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
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Rotas de Detalhes Dinâmicas */}
            <Route path="/servicos/:documentId" element={<ServiceDetail />} />
            {/* PADRÃO CORRIGIDO: A rota de projetos agora usa /:documentId para consistência. */}
            <Route path="/projetos/:documentId" element={<ProjetoDetail />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
