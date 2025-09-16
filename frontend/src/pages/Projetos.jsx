import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { List, Grid } from 'lucide-react';

const STRAPI_BASE_URL = 'http://localhost:1337';
const STRAPI_API_TOKEN = "b6288aa20ac7a555703be9a71b256ba0e8c9406fb6ade2b5b69ec8310bac82627b198ab8441c08e1069ea7bf5f276c4f11c3824642f4e274ac76d6f6b3349482a67e61908414079552adb9de89d43452bc4be099e09a7b4c27534eb17fbb50814926d94f360dc0583d2bea1c705e6d8327788ca6d00c860f510b7aefbb9422e1";

const Projetos = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    const fetchProjetos = async () => {
      try {
        const response = await fetch('/api/projetos?populate=imagem_destaque', {
          headers: {
            'Authorization': `Bearer ${STRAPI_API_TOKEN}`
          }
        });
        const data = await response.json();
        
        // CORRIGIDO: Verifica a existência do documentId e dos attributes
        const validProjetos = (data.data || []).filter(p => p && p.documentId && p.attributes);
        setProjetos(validProjetos);

      } catch (error) {
        console.error('Erro ao buscar projetos:', error);
      }
    };

    fetchProjetos();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
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
            // CORRIGIDO: Acessando os dados dentro de 'attributes'
            const imageUrl = projeto.attributes.imagem_destaque?.data?.attributes?.url
              ? `${STRAPI_BASE_URL}${projeto.attributes.imagem_destaque.data.attributes.url}`
              : 'https://via.placeholder.com/400x300';
            
            const nomeProjeto = projeto.attributes.nome;
            const descricaoProjeto = projeto.attributes.descricao;

            const plainDescription = Array.isArray(descricaoProjeto) 
              ? descricaoProjeto.map(b => b.children.map(c => c.text).join('')).join(' ') 
              : descricaoProjeto;

            return (
              <motion.div
                key={projeto.documentId} // Chave correta
                variants={itemVariants}
              >
                <Link to={`/projetos/${projeto.documentId}`} className="block h-full"> {/* Link correto */}
                  <motion.div 
                    className={`bg-white rounded-xl shadow-lg overflow-hidden flex group ${viewMode === 'grid' ? 'flex-col h-full' : 'flex-row items-center'}`}
                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  >
                    <div className={`overflow-hidden ${viewMode === 'grid' ? 'h-64' : 'w-48 h-32 flex-shrink-0'}`}>
                      <img 
                        src={imageUrl} 
                        alt={nomeProjeto} // CORRIGIDO
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                      />
                    </div>
                    <div className={`flex-grow ${viewMode === 'grid' ? 'p-8' : 'p-6'}`}>
                      <h2 className={`${viewMode === 'grid' ? 'text-2xl' : 'text-xl'} font-bold text-gray-800 mb-2`}>{nomeProjeto}</h2> {/* CORRIGIDO */}
                      <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">{plainDescription}</p> {/* CORRIGIDO */}
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
