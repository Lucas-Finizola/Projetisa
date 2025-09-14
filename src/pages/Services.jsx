import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { List, Grid } from 'lucide-react';

// Importando as imagens de serviços
import montagemEstruturaSolo from '../assets/images/Montagem de Estrutura de Solo para Placas Solares 2.png';
import escavacaoMecanizada from '../assets/images/servico_escavacao.jpg';
import redeSubterranea from '../assets/images/Rede Subterranea de Media Tensao Eficiencia e Estetica para a Distribuicao de Energia 1.png';
import conexaoMediaTensaoConvencional from '../assets/images/Montagem de Estrutura de Conexão de media tensao para rede convencional.png';
import montagemSubestacaoAbrigada from '../assets/images/Montagem de Subestação Abrigada Confiabilidade e Segurança Energética.jpg';
import subestacaoAerea from '../assets/images/Subestacao Aerea Distribuicao de Energia Confiavel e Eficiente.png';
import conexaoMediaTensao from '../assets/images/Montagem de Estrutura de Conexão de Média Tensão.jpg';
import entradaMediaTensaoCubiculo from '../assets/images/Benefícios da Estrutura de Entrada de Média Tensão para Cubículo de Medição.jpg';
import beneficiosServicos from '../assets/images/Benefícios de Nossos Serviços.jpg';
import planejamentoOrganizado from '../assets/images/Planejamento Organizado.jpg';

const Services = () => {
  const [viewMode, setViewMode] = useState('grid');

  const services = [
    {
      title: "Montagem de Estrutura de Solo para Placas Solares",
      description: "Soluções robustas e confiáveis para aproveitar ao máximo a energia solar, com instalação precisa e segura.",
      image: montagemEstruturaSolo,
      path: "/servicos/montagem-estrutura-solo"
    },
    {
      title: "Escavação Mecanizada",
      description: "Eficiência e produtividade no processo de escavação para suas obras, com equipamentos avançados e operadores especializados.",
      image: escavacaoMecanizada,
      path: "/servicos/escavacao-mecanizada"
    },
    {
      title: "Rede Subterrânea de Média Tensão",
      description: "Solução moderna e eficiente para distribuição de energia, com instalação confiável e esteticamente agradável.",
      image: redeSubterranea, 
      path: "/servicos/rede-subterranea"
    },
    {
      title: "Montagem de Estrutura de Conexão de Média Tensão para Rede Convencional",
      description: "Oferecemos serviços especializados de montagem de estrutura de conexão de média tensão para redes elétricas convencionais.",
      image: conexaoMediaTensaoConvencional,
      path: "/servicos/conexao-media-tensao-convencional"
    },
    {
      title: "Montagem de Subestação Abrigada",
      description: "Soluções completas e confiáveis para atender às suas necessidades de distribuição de energia.",
      image: montagemSubestacaoAbrigada,
      path: "/servicos/montagem-subestacao-abrigada"
    },
    {
      title: "Subestação Aérea",
      description: "Distribuição de energia confiável e eficiente com soluções personalizadas para subestações aéreas.",
      image: subestacaoAerea,
      path: "/servicos/subestacao-aerea"
    },
    {
      title: "Montagem de Estrutura de Conexão de Média Tensão",
      description: "Conecte e distribua energia com soluções confiáveis e eficientes para sistemas de média tensão.",
      image: conexaoMediaTensao,
      path: "/servicos/conexao-media-tensao"
    },
    {
      title: "Estrutura de Entrada de Média Tensão para Cubículo de Medição",
      description: "Garanta uma conexão confiável e eficiente para o fornecimento de energia elétrica.",
      image: entradaMediaTensaoCubiculo,
      path: "/servicos/entrada-media-tensao-cubiculo"
    },
    {
      title: "Benefícios de Nossos Serviços",
      description: "Descubra como nossas soluções podem otimizar seu projeto com eficiência energética, confiabilidade e segurança.",
      image: beneficiosServicos,
      path: "/servicos/beneficios-nossos-servicos"
    },
    {
      title: "Planejamento Organizado",
      description: "A base para o sucesso do seu projeto, garantindo precisão e eficiência em todas as etapas.",
      image: planejamentoOrganizado,
      path: "/servicos/planejamento-organizado"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-6 py-20">
        <div className="flex justify-between items-center mb-12">
          <motion.h1 
            className="text-4xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Nossos Serviços
          </motion.h1>
          <div className="flex space-x-2">
            <button onClick={() => setViewMode('grid')} className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'} transition-colors`}>
              <Grid className="w-6 h-6" />
            </button>
            <button onClick={() => setViewMode('list')} className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'} transition-colors`}>
              <List className="w-6 h-6" />
            </button>
          </div>
        </div>
        <motion.div 
          className={viewMode === 'grid' ? "grid md:grid-cols-2 gap-10" : "space-y-6"}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <Link to={service.path} className="block h-full">
                <motion.div 
                  className={`bg-white rounded-xl shadow-lg overflow-hidden flex group ${viewMode === 'grid' ? 'flex-col h-full' : 'flex-row items-center'}`}
                  whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                >
                  <div className={`overflow-hidden ${viewMode === 'grid' ? 'h-64' : 'w-48 h-32 flex-shrink-0'}`}>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                  </div>
                  <div className={`flex-grow ${viewMode === 'grid' ? 'p-8' : 'p-6'}`}>
                    <h2 className={`${viewMode === 'grid' ? 'text-2xl' : 'text-xl'} font-bold text-gray-800 mb-2`}>{service.title}</h2>
                    <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
