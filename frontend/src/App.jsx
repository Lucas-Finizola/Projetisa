import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import TestApi from './pages/TestApi.jsx';
import Projetos from './pages/Projetos.jsx';

// PASSO 3.1: Importar o novo componente de detalhe do serviço
import ServiceDetail from './pages/ServiceDetail.jsx';

// As importações antigas de serviços estáticos foram removidas.

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
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Rotas de teste (podem ser removidas) */}
            <Route path="/test-api" element={<TestApi />} />
            <Route path="/projetos-teste" element={<Projetos />} />
            
            {/* 
              PASSO 3.2: A nova rota dinâmica. 
              Isso captura qualquer URL como /servicos/1, /servicos/2, etc.
              e renderiza o componente ServiceDetail, passando o 'id' para ele.
            */}
            <Route path="/servicos/:id" element={<ServiceDetail />} />

            {/* As rotas antigas e estáticas para cada serviço foram removidas. */}

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
