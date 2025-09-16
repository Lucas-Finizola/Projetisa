import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { List, Grid } from 'lucide-react';

const Projetos = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    const fetchProjetos = async () => {
      try {
        // Usa o proxy do Vite para evitar problemas com o CORS em desenvolvimento.
        const response = await fetch('/api/projetos?populate=imagem_destaque');
        const data = await response.json();
        setProjetos(data.data);
      } catch (error) {
        console.error('Erro ao buscar projetos:', error);
      }
    };

    fetchProjetos();
  }, []);

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

  // A URL base da API agora é o próprio servidor do Vite, que usa o proxy.
  const API_URL = '';

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
            Nossos Projetos
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
          className={viewMode === 'grid' ? "grid md:grid-cols-2 lg:grid-cols-3 gap-10" : "space-y-6"}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projetos.map((projeto) => {
            // Construindo a URL completa da imagem usando o proxy
            const imageUrl = projeto.attributes.imagem_destaque?.data?.attributes?.url
              ? `${API_URL}${projeto.attributes.imagem_destaque.data.attributes.url}`
              : 'https://via.placeholder.com/400x300'; // Uma imagem placeholder caso não haja imagem

            return (
              <motion.div
                key={projeto.id}
                variants={itemVariants}
              >
                <Link to={`/projetos/${projeto.id}`} className="block h-full">
                  <motion.div 
                    className={`bg-white rounded-xl shadow-lg overflow-hidden flex group ${viewMode === 'grid' ? 'flex-col h-full' : 'flex-row items-center'}`}
                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  >
                    <div className={`overflow-hidden ${viewMode === 'grid' ? 'h-64' : 'w-48 h-32 flex-shrink-0'}`}>
                      <img 
                        src={imageUrl} 
                        alt={projeto.attributes.nome}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                      />
                    </div>
                    <div className={`flex-grow ${viewMode === 'grid' ? 'p-8' : 'p-6'}`}>
                      <h2 className={`${viewMode === 'grid' ? 'text-2xl' : 'text-xl'} font-bold text-gray-800 mb-2`}>{projeto.attributes.nome}</h2>
                      {/* O Strapi retorna o texto rico como markdown, precisamos de uma lib para renderizar ou usamos uma versão em texto puro */}
                      <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">{projeto.attributes.descricao}</p>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Projetos;
