import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Loader, AlertTriangle, Calendar, ChevronRight } from 'lucide-react';

const STRAPI_BASE_URL = 'http://localhost:1337';
const STRAPI_API_TOKEN = "b6288aa20ac7a555703be9a71b256ba0e8c9406fb6ade2b5b69ec8310bac82627b198ab8441c08e1069ea7bf5f276c4f11c3824642f4e274ac76d6f6b3349482a67e61908414079552adb9de89d43452bc4be099e09a7b4c27534eb17fbb50814926d94f360dc0583d2bea1c705e6d8327788ca6d00c860f510b7aefbb9422e1";

// Função para formatar a data
const formatDate = (dateString) => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('pt-BR', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
};

const Noticias = () => {
  const [publicacoes, setPublicacoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPublicacoes = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/publicacoes?populate=*`, {
          headers: { 'Authorization': `Bearer ${STRAPI_API_TOKEN}` },
        });
        if (!response.ok) {
          throw new Error(`Falha na requisição: (Status: ${response.status})`);
        }
        const jsonResponse = await response.json();

        // Lógica de validação similar à página de Serviços
        const validPublicacoes = (jsonResponse.data || []).filter(p => {
            if (!p || !p.documentId || !p.titulo) {
                console.warn('Publicação inválida da API (sem documentId ou título) foi ignorada:', p);
                return false;
            }
            return true;
        });
        setPublicacoes(validPublicacoes);

      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPublicacoes();
  }, []);

  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Nossas Publicações</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Fique por dentro das últimas tendências, projetos e inovações no mundo da engenharia e energia.
          </p>
        </div>

        {loading && <div className="flex justify-center items-center h-64"><Loader className="w-12 h-12 animate-spin text-green-600" /></div>}
        {error && <div className="text-center bg-red-50 p-8 rounded-lg"><AlertTriangle className="w-12 h-12 mx-auto text-red-500"/><p className="text-xl font-bold text-red-700 mt-4">Erro ao Carregar Publicações</p><p className="text-red-600 mt-2">{error}</p></div>}
        
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {publicacoes.map((publicacao, index) => {
              // Acessando dados diretamente do objeto, seguindo o novo padrão
              const imageUrl = publicacao.imagem_destacada?.url;
              const categoriaPrincipal = publicacao.categorias?.[0]?.nome;
              
              return (
                <motion.div
                  // Usando documentId como chave única
                  key={publicacao.documentId}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group transform hover:-translate-y-2 transition-transform duration-300"
                >
                  {/* Link aponta para a rota com documentId */}
                  <Link to={`/noticias/${publicacao.documentId}`} className="block h-full flex flex-col">
                    <div className="relative h-56 w-full overflow-hidden">
                        {imageUrl ? (
                            <img 
                                src={`${STRAPI_BASE_URL}${imageUrl}`}
                                alt={publicacao.titulo}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                            />
                        ) : (
                            <div className='w-full h-full bg-gray-200'></div>
                        )}
                        {categoriaPrincipal && <span className="absolute top-4 left-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">{categoriaPrincipal}</span>}
                    </div>
                    
                    <div className="p-6 flex-grow flex flex-col">
                      <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">{publicacao.titulo}</h2>
                      <p className="text-gray-600 leading-relaxed text-base flex-grow line-clamp-3">{publicacao.resumo}</p>
                      <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center text-sm text-gray-500">
                        <div className="flex items-center">
                           <Calendar className="w-4 h-4 mr-2" />
                           {/* Acessando a data diretamente */}
                           <span>{formatDate(publicacao.data_publicacao)}</span>
                        </div>
                        <div className="flex items-center text-green-600 font-semibold">
                           <span>Leia mais</span>
                           <ChevronRight className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Noticias;
