import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { generateWhatsAppLink } from '../../utils/whatsapp';

const ConexaoMediaTensaoConvencional = () => {
  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -100 },
  };

  const serviceName = "Montagem de Estrutura de Conexão de Média Tensão para Rede Convencional";
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
            Montagem de Estrutura de Conexão de Média Tensão para Rede Convencional
          </h1>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Oferecemos serviços especializados de montagem de estrutura de conexão de média tensão para redes elétricas convencionais. Nossa equipe qualificada e experiente está pronta para fornecer soluções eficientes e confiáveis, garantindo uma conexão segura e estável de energia.
            </p>
            <h2 className="text-2xl font-bold text-gray-700 mt-8 mb-4">Principais aspectos do nosso serviço:</h2>
            <ul>
              <li><strong>Projeto Personalizado:</strong> Realizamos um projeto personalizado, levando em consideração as especificações técnicas e requisitos de sua rede elétrica. Analisamos fatores como a capacidade de carga, a topografia, as normas regulatórias e as necessidades específicas de conexão.</li>
              <li><strong>Seleção de Materiais de Qualidade:</strong> Utilizamos materiais de alta qualidade e durabilidade, como postes, isoladores, conectores e cabos, garantindo a integridade da estrutura de conexão e o desempenho adequado da rede elétrica.</li>
              <li><strong>Montagem Profissional:</strong> Nossa equipe realiza a montagem da estrutura de conexão com habilidade e precisão. Seguimos os padrões técnicos e de segurança exigidos, garantindo a correta instalação dos componentes e a confiabilidade da conexão de média tensão.</li>
              <li><strong>Testes e Verificações:</strong> Após a montagem, realizamos testes e verificações rigorosos para garantir o correto funcionamento da estrutura de conexão. Isso inclui testes de isolamento, continuidade elétrica e resistência, assegurando a qualidade e segurança da rede.</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-700 mt-8 mb-4">Benefícios da Montagem de Estrutura de Conexão de Média Tensão:</h2>
            <ul>
                <li><strong>Conexão Estável e Segura:</strong> Nossa montagem de estrutura de conexão de média tensão proporciona uma conexão elétrica estável e segura. Isso garante um fornecimento confiável de energia elétrica, reduzindo interrupções e falhas no sistema.</li>
                <li><strong>Conformidade com Normas Regulatórias:</strong> Seguimos as normas e regulamentos técnicos aplicáveis, garantindo a conformidade da estrutura de conexão com os padrões de segurança e qualidade exigidos pelas autoridades reguladoras.</li>
                <li><strong>Eficiência Energética:</strong> Uma estrutura de conexão adequada e bem montada contribui para a eficiência energética de sua rede elétrica, reduzindo perdas de energia e maximizando a distribuição de eletricidade.</li>
                <li><strong>Durabilidade e Resistência:</strong> Nossos materiais de alta qualidade e montagem profissional garantem a durabilidade e resistência da estrutura de conexão, suportando as condições ambientais e climáticas adversas.</li>
            </ul>
            <div className="mt-12 text-center border-t pt-8">
                <p className="text-xl mb-6 text-gray-800">
                    Precisa de uma conexão de média tensão confiável para sua rede?
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Phone className="mr-3 w-6 h-6" />
                  Solicitar Serviço
                </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ConexaoMediaTensaoConvencional;
