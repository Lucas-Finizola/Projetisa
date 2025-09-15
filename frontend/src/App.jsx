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
import TestApi from './pages/TestApi.jsx'; // ADICIONADO

// Importando as páginas de serviço
import MontagemEstruturaSolo from './pages/servicos/MontagemEstruturaSolo.jsx';
import EscavacaoMecanizada from './pages/servicos/EscavacaoMecanizada.jsx';
import RedeSubterranea from './pages/servicos/RedeSubterranea.jsx';
import ConexaoMediaTensaoConvencional from './pages/servicos/ConexaoMediaTensaoConvencional.jsx';
import MontagemSubestacaoAbrigada from './pages/servicos/MontagemSubestacaoAbrigada.jsx';
import SubestacaoAerea from './pages/servicos/SubestacaoAerea.jsx';
import ConexaoMediaTensao from './pages/servicos/ConexaoMediaTensao.jsx';
import EntradaMediaTensaoCubiculo from './pages/servicos/EntradaMediaTensaoCubiculo.jsx';
import BeneficiosNossosServicos from './pages/servicos/BeneficiosNossosServicos.jsx';
import PlanejamentoOrganizado from './pages/servicos/PlanejamentoOrganizado.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main>
          <Routes>
            <Route path="/test-api" element={<TestApi />} /> {/* ADICIONADO */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Rotas para os serviços detalhados */}
            <Route path="/servicos/montagem-estrutura-solo" element={<MontagemEstruturaSolo />} />
            <Route path="/servicos/escavacao-mecanizada" element={<EscavacaoMecanizada />} />
            <Route path="/servicos/rede-subterranea" element={<RedeSubterranea />} />
            <Route path="/servicos/conexao-media-tensao-convencional" element={<ConexaoMediaTensaoConvencional />} />
            <Route path="/servicos/montagem-subestacao-abrigada" element={<MontagemSubestacaoAbrigada />} />
            <Route path="/servicos/subestacao-aerea" element={<SubestacaoAerea />} />
            <Route path="/servicos/conexao-media-tensao" element={<ConexaoMediaTensao />} />
            <Route path="/servicos/entrada-media-tensao-cubiculo" element={<EntradaMediaTensaoCubiculo />} />
            <Route path="/servicos/beneficios-nossos-servicos" element={<BeneficiosNossosServicos />} />
            <Route path="/servicos/planejamento-organizado" element={<PlanejamentoOrganizado />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
