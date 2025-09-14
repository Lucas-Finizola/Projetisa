import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { generateWhatsAppLink } from '../../utils/whatsapp';

const PlanejamentoOrganizado = () => {
  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -100 },
  };

  const serviceName = "Planejamento Organizado";
  const whatsappLink = generateWhatsAppLink(serviceName);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 min-h-screen"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="mb-8">
          <Link to="/services" className="inline-flex items-center text-green-600 font-semibold hover:text-green-800 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar para Serviços
          </Link>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Planejamento Organizado
          </h1>
          <div className="prose prose-lg max-w-none text-gray-600">
            
            <h2 className="text-2xl font-bold text-gray-700 mt-8 mb-4">Nossas Etapas de Planejamento:</h2>
            <ul>
              <li><strong>Planejamento Personalizado:</strong> Analisamos cuidadosamente as necessidades e requisitos de cada projeto. Nossa equipe de engenheiros projeta uma solução de rede de distribuição de média tensão otimizada e eficiente, considerando a topografia, as cargas de energia e as regulamentações locais.</li>
              <li><strong>Instalação Precisa:</strong> Nossa equipe qualificada de técnicos e eletricistas executa a construção da rede com precisão e habilidade. Utilizamos equipamentos e técnicas avançadas para garantir a qualidade da instalação, minimizando interrupções e maximizando a segurança.</li>
              <li><strong>Integração de Tecnologia:</strong> Acreditamos na importância de incorporar tecnologias avançadas em nossas soluções. Consideramos a integração de sistemas de automação, monitoramento remoto e outras tecnologias inteligentes para melhorar a eficiência operacional e facilitar a manutenção da rede.</li>
              <li><strong>Testes e Comissionamento:</strong> Realizamos testes rigorosos e comissionamento completo do sistema para garantir seu desempenho ideal e conformidade com os padrões regulatórios. Verificamos a continuidade elétrica, a resistência do isolamento e outros parâmetros importantes para garantir a segurança e a confiabilidade da rede.</li>
            </ul>
            
            <div className="mt-12 text-center border-t pt-8">
                <p className="text-xl mb-6 text-gray-800">
                    Venha falar conosco e solicitar seu orçamento.
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Phone className="mr-3 w-6 h-6" />
                  Falar com um especialista
                </a>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PlanejamentoOrganizado;
