import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Eye, Gem, ArrowRight, Wind, Handshake } from 'lucide-react';
import { Skeleton } from '../components/ui/skeleton';

const STRAPI_BASE_URL = 'http://localhost:1337';
const STRAPI_API_TOKEN = "b6288aa20ac7a555703be9a71b256ba0e8c9406fb6ade2b5b69ec8310bac82627b198ab8441c08e1069ea7bf5f276c4f11c3824642f4e274ac76d6f6b3349482a67e61908414079552adb9de89d43452bc4be099e09a7b4c27534eb17fbb50814926d94f360dc0583d2bea1c705e6d8327788ca6d00c860f510b7aefbb9422e1";

const About = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch(`/api/equipes?populate=foto&sort=ordem:asc`, {
          headers: {
            'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Acesso não autorizado ou API falhou: ${response.status}`);
        }

        const jsonResponse = await response.json();
        
        const validData = (jsonResponse.data || []).filter(member => 
            member && member.nome && member.cargo && member.foto?.url
        );

        setTeamMembers(validData);
      } catch (error) {
        console.error("Falha ao buscar membros da equipe:", error);
        setTeamMembers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Excelência em Engenharia Elétrica
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Soluções completas com foco em eficiência, sustentabilidade e inovação.
          </motion.p>
        </div>
      </section>

      {/* Seção Quem Somos */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Nossa História e Compromisso</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                A Projetisa Construções Ltda é uma empresa do setor de engenharia elétrica, especializada em fornecer serviços abrangentes, projetos de ponta, execução de obras eficientes e soluções inovadoras com foco na eficiência energética e sustentabilidade, sempre levando em consideração a responsabilidade social e ambiental.
              </p>
              <div className="space-y-6 mt-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Wind className="w-7 h-7 text-green-600"/>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-800">Sustentabilidade</h4>
                    <p className="text-gray-600 leading-relaxed">
                      A sustentabilidade é um pilar fundamental. Buscamos minimizar o impacto ambiental de nossos projetos, adotando práticas e tecnologias sustentáveis e promovendo a conscientização sobre a importância da preservação do meio ambiente.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Handshake className="w-7 h-7 text-green-600"/>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-800">Parcerias Sólidas</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Valorizamos a parceria com nossos clientes e acreditamos na construção de relacionamentos sólidos e duradouros. Trabalhamos em estreita colaboração, compreendendo suas necessidades para oferecer soluções personalizadas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center mt-8 lg:mt-0">
              <motion.div whileHover={{ y: -5 }} className="bg-gray-100 p-6 rounded-lg shadow-sm">
                <h3 className="text-4xl font-bold text-green-600">+5 Anos</h3>
                <p className="text-gray-600">de Experiência</p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="bg-gray-100 p-6 rounded-lg shadow-sm">
                <h3 className="text-4xl font-bold text-green-600">+200</h3>
                <p className="text-gray-600">Projetos Concluídos</p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="bg-gray-100 p-6 rounded-lg shadow-sm">
                <h3 className="text-4xl font-bold text-green-600">+5MW</h3>
                <p className="text-gray-600">em Potência Instalada</p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="bg-gray-100 p-6 rounded-lg shadow-sm">
                <h3 className="text-4xl font-bold text-green-600">100%</h3>
                <p className="text-gray-600">de Clientes Satisfeitos</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Missão, Visão e Valores */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Nossos Pilares</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-lg shadow-md">
              <Eye className="mx-auto text-green-600 w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Visão</h3>
              <p className="text-gray-600">Ser reconhecido como referência regional na área da engenharia elétrica, buscando constantemente a satisfação dos clientes, gerando soluções inovadoras e criando valor de forma sustentável.</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-lg shadow-md">
              <Target className="mx-auto text-green-600 w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Missão</h3>
              <p className="text-gray-600">Atuar no setor da engenharia elétrica com padrões de excelência. Oferecer soluções inovadoras e tecnológicas, especialmente em energia renovável, valorizando colaboradores e exercendo responsabilidade social.</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-lg shadow-md">
              <Gem className="mx-auto text-green-600 w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Valores</h3>
              <p className="text-gray-600">Compromisso, Qualidade, Inovação, Segurança, Sustentabilidade e a Satisfação total do Cliente em cada etapa do projeto.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção Equipe com Galeria */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossa Equipe</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">Nossa equipe de profissionais altamente qualificados e experientes é um dos nossos maiores diferenciais. Eles possuem o conhecimento técnico e a expertise necessários para enfrentar os desafios mais complexos e entregar resultados excepcionais em cada projeto que realizamos.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {loading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="flex flex-col space-y-3">
                  <Skeleton className="h-[256px] w-full rounded-lg" /> 
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-3/4 mx-auto" />
                    <Skeleton className="h-4 w-1/2 mx-auto" />
                  </div>
                </div>
              ))
            ) : (
              teamMembers.map((member) => {
                const { nome, cargo, foto } = member;
                const imageUrl = STRAPI_BASE_URL + foto.url;

                return (
                  <motion.div 
                    key={member.id}
                    className="bg-gray-50 rounded-lg shadow-lg overflow-hidden text-center"
                    whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  >
                    {/* AQUI A MUDANÇA: de h-80 para h-64 */}
                    <img src={imageUrl} alt={`Foto de ${nome}`} className="w-full h-64 object-cover object-center" />
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-800">{nome}</h4>
                      <p className="text-green-600 font-semibold">{cargo}</p>
                    </div>
                  </motion.div>
                )
              })
            )}
          </div>
        </div>
      </section>

       {/* CTA Section */}
       <section className="bg-green-700 text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Veja um pouco mais do nosso trabalho</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Nossos projetos refletem nosso compromisso com a qualidade e a inovação. Explore nosso portfólio.</p>
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-green-700 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-200 transition-colors inline-flex items-center"
          >
            <span>Conhecer Projetos</span>
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.a>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
