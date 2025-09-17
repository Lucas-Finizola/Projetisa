import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Loader, AlertTriangle, ArrowLeft, Calendar } from 'lucide-react';

const STRAPI_BASE_URL = 'http://localhost:1337';
const STRAPI_API_TOKEN = "b6288aa20ac7a555703be9a71b256ba0e8c9406fb6ade2b5b69ec8310bac82627b198ab8441c08e1069ea7bf5f276c4f11c3824642f4e274ac76d6f6b3349482a67e61908414079552adb9de89d43452bc4be099e09a7b4c27534eb17fbb50814926d94f360dc0583d2bea1c705e6d8327788ca6d00c860f510b7aefbb9422e1";

const renderDescription = (blocks) => {
  if (!blocks) return null;
  if (!Array.isArray(blocks)) {
    return <p className="text-gray-700 leading-relaxed mb-4">{blocks}</p>;
  }
  return blocks.map((block, index) => {
    if (block.type === 'paragraph') {
      return (
        <p key={`desc-block-${index}`} className="text-gray-700 leading-relaxed mb-4">
          {block.children.map((child, childIndex) => {
            const key = `p-child-${childIndex}`;
            if (child.bold) return <strong key={key}>{child.text}</strong>;
            return <span key={key}>{child.text}</span>;
          })}
        </p>
      );
    }
    return null;
  });
};

// Função para formatar a data
const formatDate = (dateString) => {
  if (!dateString) return 'Data não informada';
  return new Date(dateString).toLocaleDateString('pt-BR', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
};

const ProjetoDetail = () => {
  const { documentId } = useParams();
  const [projeto, setProjeto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjeto = async () => {
      if (!documentId) return;
      setLoading(true);
      try {
        const response = await fetch(`/api/projetos/${documentId}?populate=*`, {
          headers: { 'Authorization': `Bearer ${STRAPI_API_TOKEN}` },
        });
        if (!response.ok) {
          throw new Error(`Projeto não encontrado: ${response.statusText}`);
        }
        const jsonResponse = await response.json();
        setProjeto(jsonResponse.data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProjeto();
  }, [documentId]);

  const imageUrl = projeto?.imagem_destaque?.url;
  const galeria = projeto?.galeria || [];

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6">
        {loading && <div className="flex justify-center items-center h-64"><Loader className="w-12 h-12 animate-spin text-green-600" /><p className="ml-4 text-xl">Carregando projeto...</p></div>}
        {error && <div className="text-center bg-red-50 p-8 rounded-lg"><AlertTriangle className="w-12 h-12 mx-auto text-red-500"/><p className="text-xl font-bold text-red-700 mt-4">Erro ao carregar</p><p className="text-red-600 mt-2">{error}</p></div>}
        
        {projeto && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <div className="mb-8">
              <Link to="/projetos" className="flex items-center text-green-600 hover:text-green-800 font-semibold">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Voltar para todos os projetos
              </Link>
            </div>
            {/* CORRIGIDO: usa 'titulo' */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{projeto.titulo}</h1>
            
            {/* NOVO: Exibindo a data do projeto */}
            <div className="flex items-center text-gray-500 mb-6">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{formatDate(projeto.data_do_projeto)}</span>
            </div>

            {imageUrl && (
              <div className="my-10 shadow-xl rounded-lg overflow-hidden">
                <img src={`${STRAPI_BASE_URL}${imageUrl}`} alt={projeto.titulo} className="w-full h-auto object-cover"/>
              </div>
            )}
            <div className="prose prose-lg max-w-none mb-16">
              {renderDescription(projeto.descricao)}
            </div>

            {/* NOVO: Seção da Galeria */}
            {galeria.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Galeria de Imagens</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {galeria.map((imagem) => (
                    <motion.div key={imagem.hash} className="overflow-hidden rounded-lg shadow-lg" whileHover={{ scale: 1.05, y: -5 }}>
                      <img src={`${STRAPI_BASE_URL}${imagem.url}`} alt={imagem.alternativeText || projeto.titulo} className="w-full h-64 object-cover" />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjetoDetail;
