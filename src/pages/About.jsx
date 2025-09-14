import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Eye, Gem, ArrowRight } from 'lucide-react';

const About = () => {

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
            Paixão por Engenharia e Inovação
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Conheça a jornada da Projetisa, uma empresa nascida do compromisso com a excelência, a sustentabilidade e o futuro da energia no Brasil.
          </motion.p>
        </div>
      </section>

      {/* Seção Quem Somos */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossa História</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                A Projetisa Construções Ltda é uma empresa do setor de engenharia elétrica, especializada em fornecer serviços abrangentes, projetos de ponta, execução de obras eficientes e soluções inovadoras com foco na eficiência energética e sustentabilidade, sempre levando em consideração a responsabilidade social e ambiental.
              </p>
              <p className="text-gray-600 font-semibold leading-relaxed">
                Nosso compromisso em ser uma empresa inovadora impulsiona-nos a buscar constantemente a satisfação dos nossos clientes. A excelência na qualidade dos serviços que oferecemos é um valor fundamental para nós.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-4xl font-bold text-green-600">+5 Anos</h3>
                <p className="text-gray-600">de Experiência</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-4xl font-bold text-green-600">+200</h3>
                <p className="text-gray-600">Projetos Concluídos</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-4xl font-bold text-green-600">+5MW</h3>
                <p className="text-gray-600">em Potência Instalada</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-4xl font-bold text-green-600">100%</h3>
                <p className="text-gray-600">de Clientes Satisfeitos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Missão, Visão e Valores */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-lg shadow-md">
              <Eye className="mx-auto text-green-600 w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Visão</h3>
              <p className="text-gray-600">
                Nosso objetivo é sermos reconhecidos como referência regional na área da engenharia elétrica, buscando constantemente a satisfação dos nossos clientes. Nosso foco é gerar soluções inovadoras e criar valor de forma sustentável.
              </p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-lg shadow-md">
              <Target className="mx-auto text-green-600 w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Missão</h3>
              <p className="text-gray-600">
                Nossa missão é atuar no setor da engenharia elétrica, proporcionando padrões de excelência nos serviços aos clientes. Nosso foco é oferecer soluções inovadoras e tecnológicas, especialmente no campo da energia renovável. Valorizamos nossos colaboradores e exercemos responsabilidade social em todas as nossas atividades.
              </p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-lg shadow-md">
              <Gem className="mx-auto text-green-600 w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Valores</h3>
              <p className="text-gray-600">
                Compromisso, Qualidade, Inovação, Segurança, Sustentabilidade e, acima de tudo, a Satisfação total do Cliente em cada etapa do projeto.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção Equipe (Sem imagem por enquanto) */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossa Equipe</h2>
           <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Contamos com um time de profissionais altamente qualificados e experientes, prontos para enfrentar os desafios mais complexos e entregar resultados excepcionais.
           </p>
           <div className="max-w-4xl mx-auto bg-gray-200 h-80 rounded-lg shadow-lg flex items-center justify-center">
            <p className="text-gray-500">[Quando tiver a foto da equipe, ela entrará aqui]</p>
           </div>
        </div>
      </section>

       {/* CTA Section */}
       <section className="bg-green-700 text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Veja Nossa Expertise em Ação</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nossos projetos refletem nosso compromisso com a qualidade e a inovação. Explore nosso portfólio.
          </p>
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
