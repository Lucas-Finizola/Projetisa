
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Loader, AlertTriangle, Calendar, ChevronLeft, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const STRAPI_API_TOKEN = "b6288aa20ac7a555703be9a71b256ba0e8c9406fb6ade2b5b69ec8310bac82627b198ab8441c08e1069ea7bf5f276c4f11c3824642f4e274ac76d6f6b3349482a67e61908414079552adb9de89d43452bc4be099e09a7b4c27534eb17fbb50814926d94f360dc0583d2bea1c705e6d8327788ca6d00c860f510b7aefbb9422e1";

// CORREÇÃO: Adicionando a opção timeZone: 'UTC' para evitar problemas de fuso horário.
const formatDate = (dateString) => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
};

const renderContent = (blocks) => {
  if (!blocks || !Array.isArray(blocks)) return null;
  return blocks.map((block, index) => {
    const key = `block-${index}`;
    if (block.type === 'heading') {
      const Tag = `h${block.level}`;
      return <Tag key={key} className="font-bold text-gray-800 my-4 text-2xl">{block.children.map(c => c.text).join('')}</Tag>;
    }
    if (block.type === 'paragraph') {
      return <p key={key} className="text-gray-700 leading-relaxed mb-4">{block.children.map((c, i) => c.bold ? <strong key={i}>{c.text}</strong> : <span key={i}>{c.text}</span>)}</p>;
    }
    return null;
  });
};

const NoticiaDetail = () => {
  const { id } = useParams();
  const [publicacao, setPublicacao] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPublicacao = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const response = await fetch(`/api/publicacoes/${id}?populate=*`, {
          headers: { 'Authorization': `Bearer ${STRAPI_API_TOKEN}` }
        });
        if (!response.ok) throw new Error(`O servidor respondeu com status ${response.status}.`);
        
        const jsonResponse = await response.json();

        if (!jsonResponse || !jsonResponse.data) throw new Error('A publicação não foi encontrada ou a resposta da API é inválida.');
        
        setPublicacao(jsonResponse.data);

      } catch (e) {
        console.error('[ERRO]', e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPublicacao();
  }, [id]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen"><Loader className="w-16 h-16 animate-spin text-green-600" /></div>;
  }

  if (error) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <AlertTriangle className="w-16 h-16 mx-auto text-red-500"/>
        <h1 className="mt-6 text-3xl font-bold text-red-700">Erro ao carregar a publicação</h1>
        <p className="mt-2 text-red-600">{error}</p>
        <Link to="/noticias" className="mt-8 inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">Voltar para Notícias</Link>
      </div>
    );
  }

  if (!publicacao) {
    return <div className="text-center py-20">Publicação não encontrada.</div>;
  }

  const STRAPI_BASE_URL = 'http://localhost:1337';
  const imageUrl = publicacao.imagem_destacada?.data?.attributes?.url;
  const categoriaPrincipal = publicacao.categorias?.data?.[0]?.attributes?.nome;
  const galeriaImagens = publicacao.galeria?.data;

  return (
    <div className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
          <div className="max-w-4xl mx-auto">
            <Link to="/noticias" className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors mb-6">
              <ChevronLeft className="w-5 h-5 mr-1" />
              <span>Voltar para todas as notícias</span>
            </Link>
            {categoriaPrincipal && <p className="text-sm font-semibold text-green-600 uppercase tracking-wider">{categoriaPrincipal}</p>}
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4">{publicacao.titulo}</h1>
            <div className="flex items-center text-gray-500 mb-8">
              <Calendar className="w-5 h-5 mr-2" /><span className="text-base">{formatDate(publicacao.data_publicacao)}</span>
            </div>
            {imageUrl && <div className="mb-10 rounded-lg overflow-hidden shadow-lg"><img src={`${STRAPI_BASE_URL}${imageUrl}`} alt={publicacao.titulo} className="w-full h-auto object-cover" /></div>}
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">{renderContent(publicacao.conteudo)}</div>
            {galeriaImagens && galeriaImagens.length > 0 && <div className="mt-16"><h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Galeria de Imagens</h3><Carousel className="w-full max-w-3xl mx-auto"><CarouselContent>{galeriaImagens.map(image => (<CarouselItem key={image.id} className="md:basis-1/2"><div className="p-1"><img src={`${STRAPI_BASE_URL}${image.attributes.url}`} alt={image.attributes.alternativeText || 'Imagem da galeria'} className="rounded-lg shadow-md w-full h-full object-cover" /></div></CarouselItem>))}</CarouselContent><CarouselPrevious /><CarouselNext /></Carousel></div>}
            <div className="mt-16 pt-8 border-t border-gray-200 text-center"><p className="text-lg text-gray-600">Gostou do que leu? Compartilhe ou entre em contato!</p><Link to="/contato" className="mt-4 inline-flex items-center px-8 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-transform transform hover:scale-105">Fale Conosco <ArrowRight className="w-5 h-5 ml-2" /></Link></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NoticiaDetail;
