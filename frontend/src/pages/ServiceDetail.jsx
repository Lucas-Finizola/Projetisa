import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Loader, AlertTriangle, ArrowLeft } from 'lucide-react';

const STRAPI_BASE_URL = 'http://localhost:1337';
const STRAPI_API_TOKEN = "b6288aa20ac7a555703be9a71b256ba0e8c9406fb6ade2b5b69ec8310bac82627b198ab8441c08e1069ea7bf5f276c4f11c3824642f4e274ac76d6f6b3349482a67e61908414079552adb9de89d43452bc4be099e09a7b4c27534eb17fbb50814926d94f360dc0583d2bea1c705e6d8327788ca6d00c860f510b7aefbb9422e1";

// Função para renderizar os blocos de texto do Strapi em HTML
const renderDescription = (blocks) => {
  if (!blocks || !Array.isArray(blocks)) {
    return null;
  }

  return blocks.map((block, index) => {
    const blockKey = `desc-block-${index}`;
    switch (block.type) {
      case 'heading':
        const Tag = `h${block.level}`;
        return <Tag key={blockKey} className="text-2xl font-bold text-gray-800 my-4">{block.children.map(child => child.text).join('')}</Tag>;
      case 'paragraph':
        return (
          <p key={blockKey} className="text-gray-700 leading-relaxed mb-4">
            {block.children.map((child, childIndex) => {
              const childKey = `p-child-${childIndex}`;
              if (child.bold) {
                return <strong key={childKey}>{child.text}</strong>;
              }
              return <span key={childKey}>{child.text}</span>;
            })}
          </p>
        );
      default:
        return null;
    }
  });
};

const ServiceDetail = () => {
  // ATUALIZADO PARA STRAPI V5: Usa 'documentId' em vez de 'id'
  const { documentId } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      if (!documentId) return;
      setLoading(true);
      try {
        // ATUALIZADO PARA STRAPI V5: Busca usando a URL com documentId
        const response = await fetch(`/api/servicos/${documentId}?populate=*`, {
          headers: { 'Authorization': `Bearer ${STRAPI_API_TOKEN}` },
        });

        if (!response.ok) {
          throw new Error(`Serviço não encontrado ou falha na requisição: ${response.statusText}`);
        }

        const jsonResponse = await response.json();
        setService(jsonResponse.data);
      } catch (e) {
        console.error("Erro ao buscar detalhe do serviço:", e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [documentId]); // ATUALIZADO: O gatilho do efeito agora é 'documentId'

  const imageUrl = service?.imagem?.url;

  return (
    <div className="bg-white py-20">
        <div className="container mx-auto px-6">
            {loading && <div className="flex justify-center items-center h-64"><Loader className="w-12 h-12 animate-spin text-green-600" /><p className="ml-4 text-xl">Carregando...</p></div>}
            {error && <div className="text-center bg-red-50 p-8 rounded-lg"><AlertTriangle className="w-12 h-12 mx-auto text-red-500"/><p className="text-xl font-bold text-red-700 mt-4">Erro ao carregar serviço</p><p className="text-red-600 mt-2">{error}</p></div>}
            
            {service && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                    <div className="mb-8">
                        <Link to="/services" className="flex items-center text-green-600 hover:text-green-800 font-semibold">
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Voltar para todos os serviços
                        </Link>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{service.titulo}</h1>
                    
                    {imageUrl && (
                        <div className="my-10 shadow-xl rounded-lg overflow-hidden">
                            <img src={`${STRAPI_BASE_URL}${imageUrl}`} alt={service.titulo} className="w-full h-auto object-cover"/>
                        </div>
                    )}

                    <div className="prose prose-lg max-w-none">
                        {renderDescription(service.descricao)}
                    </div>
                </motion.div>
            )}
        </div>
    </div>
  );
};

export default ServiceDetail;
