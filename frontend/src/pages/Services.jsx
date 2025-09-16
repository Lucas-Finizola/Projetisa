import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Loader, AlertTriangle, ChevronRight } from 'lucide-react';

const STRAPI_BASE_URL = 'http://localhost:1337';
const STRAPI_API_TOKEN = "b6288aa20ac7a555703be9a71b256ba0e8c9406fb6ade2b5b69ec8310bac82627b198ab8441c08e1069ea7bf5f276c4f11c3824642f4e274ac76d6f6b3349482a67e61908414079552adb9de89d43452bc4be099e09a7b4c27534eb17fbb50814926d94f360dc0583d2bea1c705e6d8327788ca6d00c860f510b7aefbb9422e1";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('/api/servicos?populate=*', {
          headers: {
            'Authorization': `Bearer ${STRAPI_API_TOKEN}`
          }
        });

        if (!response.ok) {
          throw new Error(`Falha na requisição: ${response.status} ${response.statusText}`);
        }

        const jsonResponse = await response.json();
        
        // ATUALIZADO: Filtrar por documentId, o novo identificador do Strapi v5
        const validServices = (jsonResponse.data || []).filter(service => {
            if (!service || !service.documentId || !service.titulo) {
                console.warn('Serviço inválido da API (sem documentId ou título) foi ignorado:', service);
                return false;
            }
            return true;
        });
        setServices(validServices);

      } catch (e) {
        console.error("Erro ao buscar serviços:", e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Nossos Serviços</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas e personalizadas em energia para atender às suas necessidades.
          </p>
        </div>

        {loading && <div className="flex justify-center items-center h-64"><Loader className="w-12 h-12 animate-spin text-green-600" /></div>}
        {error && <div className="text-center bg-red-50 p-8 rounded-lg"><AlertTriangle className="w-12 h-12 mx-auto text-red-500"/><p className="text-xl font-bold text-red-700 mt-4">Erro ao carregar serviços</p><p className="text-red-600 mt-2">{error}</p></div>}
        
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
                const imageUrl = service.imagem?.url;
                return (
                  <motion.div
                    // ATUALIZADO: Usar documentId como a chave única
                    key={service.documentId}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col"
                  >
                    {/* 
                      ATUALIZADO PARA STRAPI V5:
                      O link agora aponta para /servicos/{documentId} em vez de /{id}.
                    */}
                    <Link to={`/servicos/${service.documentId}`} className="block h-full flex flex-col">
                        {imageUrl && (
                            <img 
                                src={`${STRAPI_BASE_URL}${imageUrl}`}
                                alt={service.titulo}
                                className="w-full h-48 object-cover"
                            />
                        )}
                      <div className="p-6 flex-grow">
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.titulo}</h3>
                      </div>
                      <div className="bg-gray-100 p-4 mt-auto">
                        <div className="flex justify-between items-center text-green-600 font-semibold">
                          <span>Ver detalhes</span>
                          <ChevronRight className="w-5 h-5" />
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

export default Services;
