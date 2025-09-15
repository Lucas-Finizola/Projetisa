import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

// Componente para renderizar blocos de texto ricos do Strapi
const RichTextRenderer = ({ blocks }) => {
  if (!blocks) return null;

  return blocks.map((block, index) => {
    if (block.type === 'paragraph') {
      return (
        <p key={index} className="mb-6 text-lg text-gray-700 leading-relaxed">
          {block.children.map((child, childIndex) => {
            if (child.bold) {
              return <strong key={childIndex}>{child.text}</strong>;
            }
            if (child.italic) {
              return <em key={childIndex}>{child.text}</em>;
            }
            return child.text;
          })}
        </p>
      );
    }
    // Adicione mais tipos de bloco aqui conforme necessário (ex: heading, list)
    return null;
  });
};

const ServicoDetalhe = () => {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        // CORREÇÃO: Usando o proxy e especificando os campos a popular.
        const populateQuery = "populate[0]=ImagemPrincipal&populate[1]=Descricao&populate[2]=Galeria";
        const response = await fetch(`/api/servicos?filters[Slug][$eq]=${slug}&${populateQuery}`);

        if (!response.ok) {
          throw new Error(`A resposta da rede não foi OK: ${response.status} ${response.statusText}`);
        }

        const jsonResponse = await response.json();
        
        if (!jsonResponse.data || jsonResponse.data.length === 0) {
          throw new Error('Serviço não encontrado.');
        }

        const item = jsonResponse.data[0];
        const attributes = item.attributes;

        // As URLs das imagens precisam do endereço completo do backend.
        const imageUrl = attributes.ImagemPrincipal?.data?.attributes?.url
          ? `http://localhost:1337${attributes.ImagemPrincipal.data.attributes.url}`
          : 'https://via.placeholder.com/1200x600?text=Imagem+Principal';
        
        const galleryUrls = attributes.Galeria?.data?.map(img => `http://localhost:1337${img.attributes.url}`) || [];

        const formattedService = {
          id: item.id,
          title: attributes.Titulo,
          description: attributes.Descricao, // Passando o array de Rich Text diretamente
          image: imageUrl,
          gallery: galleryUrls
        };

        setService(formattedService);
      } catch (e) {
        setError(e.message);
        console.error("Falha ao buscar detalhes do serviço:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [slug]);

  if (loading) {
    return <div className="text-center py-40">Carregando detalhes do serviço...</div>;
  }

  if (error) {
    return <div className="text-center py-40 text-red-500">Erro: {error}. Verifique se o slug ''{slug}'' está correto e se a API está acessível.</div>;
  }

  if (!service) {
    return <div className="text-center py-40">Serviço não encontrado.</div>;
  }

  return (
    <div className="bg-white">
      {/* Hero Section with Main Image */}
      <motion.div 
        className="h-[50vh] bg-cover bg-center flex items-center justify-center text-white relative"
        style={{ backgroundImage: `url(${service.image})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.h1 
          className="text-5xl font-extrabold z-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {service.title}
        </motion.h1>
      </motion.div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Sobre o Serviço</h2>
          <div className="prose lg:prose-xl max-w-none">
            <RichTextRenderer blocks={service.description} />
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      {service.gallery && service.gallery.length > 0 && (
        <div className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Galeria de Imagens</h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={{ 
                visible: { transition: { staggerChildren: 0.2 } }
              }}
            >
              {service.gallery.map((img, index) => (
                <motion.div 
                  key={index} 
                  className="overflow-hidden rounded-lg shadow-lg"
                  variants={{ 
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={img} alt={`Galeria de ${service.title} - ${index + 1}`} className="w-full h-auto object-cover" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicoDetalhe;
