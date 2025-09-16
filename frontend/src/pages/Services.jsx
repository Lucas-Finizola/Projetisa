import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { List, Grid, Loader, AlertTriangle } from 'lucide-react';

const STRAPI_BASE_URL = 'http://localhost:1337';
const STRAPI_API_TOKEN = "b6288aa20ac7a555703be9a71b256ba0e8c9406fb6ade2b5b69ec8310bac82627b198ab8441c08e1069ea7bf5f276c4f11c3824642f4e274ac76d6f6b3349482a67e61908414079552adb9de89d43452bc4be099e09a7b4c27534eb17fbb50814926d94f360dc0583d2bea1c705e6d8327788ca6d00c860f510b7aefbb9422e1";

const Services = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('/api/servicos?populate=*', {
          headers: { 'Authorization': `Bearer ${STRAPI_API_TOKEN}` },
        });

        if (!response.ok) {
          throw new Error(`Falha na requisição: ${response.status} ${response.statusText}`);
        }

        const jsonResponse = await response.json();
        
        const validServices = (jsonResponse.data || []).filter(service => {
            if (!service || !service.id || !service.titulo) {
                console.warn('Serviço inválido da API (sem id ou título) foi ignorado:', service);
                return false;
            }
            return true;
        });
        setServices(validServices);

      } catch (e) {
        console.error("Erro crítico ao buscar ou processar serviços:", e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const extractSummary = (blocks) => {
    if (!blocks || !Array.isArray(blocks) || blocks.length === 0) return "";
    const firstParagraph = blocks.find(block => block.type === 'paragraph');
    if (!firstParagraph?.children) return "";
    const text = firstParagraph.children.map(child => child.text).join('');
    return text.length > 120 ? text.substring(0, 120) + '...' : text;
  };

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } };

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-6 py-20">
        <div className="flex justify-between items-center mb-12">
            <motion.h1 className="text-4xl font-bold text-gray-800" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                Nossos Serviços
            </motion.h1>
            <div className="flex space-x-2">
                <button onClick={() => setViewMode('grid')} className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'} transition-colors`}><Grid className="w-6 h-6" /></button>
                <button onClick={() => setViewMode('list')} className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'} transition-colors`}><List className="w-6 h-6" /></button>
            </div>
        </div>

        {loading && <div className="flex justify-center items-center h-64"><Loader className="w-12 h-12 animate-spin text-green-600" /><p className="ml-4 text-xl text-gray-600">Carregando serviços...</p></div>}

        {error && <div className="text-center bg-red-100 p-8 rounded-lg"><AlertTriangle className="w-12 h-12 mx-auto text-red-500"/><p className="text-2xl font-bold text-red-700 mt-4">Ocorreu um erro</p><p className="text-red-600 mt-2">Não foi possível carregar os serviços.</p><pre className="mt-4 text-sm text-left bg-red-50 p-4 rounded">Detalhe: {error}</pre></div>}

        {!loading && !error && services.length === 0 && <div className="text-center bg-yellow-100 p-8 rounded-lg"><AlertTriangle className="w-12 h-12 mx-auto text-yellow-500"/><p className="text-2xl font-bold text-yellow-800 mt-4">Nenhum serviço encontrado</p><p className="text-yellow-700 mt-2">Verifique se os serviços foram criados e <strong>publicados</strong> no painel de administração.</p></div>}

        {!loading && !error && services.length > 0 && (
          <motion.div className={viewMode === 'grid' ? "grid md:grid-cols-2 gap-10" : "space-y-6"} variants={containerVariants} initial="hidden" animate="visible">
            {services.map(service => {
              const { id, titulo, descricao, imagem } = service;
              const imageUrl = imagem?.url; 

              return (
                <motion.div key={id} variants={itemVariants}>
                  {/* PASSO 1: O link agora usa o ID do serviço */}
                  <Link to={`/servicos/${id}`} className="block h-full">
                    <motion.div className={`bg-white rounded-xl shadow-lg overflow-hidden flex group ${viewMode === 'grid' ? 'flex-col h-full' : 'flex-row items-center'}`} whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}>
                      <div className={`relative overflow-hidden ${viewMode === 'grid' ? 'h-64' : 'w-48 h-32 flex-shrink-0'} bg-gray-200`}>
                        {imageUrl ? (
                          <img src={`${STRAPI_BASE_URL}${imageUrl}`} alt={titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center text-gray-500"><AlertTriangle className="w-8 h-8"/><span>Sem imagem</span></div>
                        )}
                      </div>
                      <div className={`flex-grow ${viewMode === 'grid' ? 'p-8' : 'p-6'}`}>
                        <h2 className={`${viewMode === 'grid' ? 'text-2xl' : 'text-xl'} font-bold text-gray-800 mb-2`}>{titulo}</h2>
                        <p className="text-gray-600 leading-relaxed text-sm">{extractSummary(descricao)}</p>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Services;
