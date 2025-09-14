import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const EntradaMediaTensaoCubiculo = () => {
  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -100 },
  };

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
            Estrutura de Entrada de Média Tensão para Cubículo de Medição
          </h1>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Nossos serviços de estrutura de entrada de média tensão para cubículos de medição garantem uma conexão confiável e eficiente para o fornecimento de energia elétrica.             
            </p>
            <h2 className="text-2xl font-bold text-gray-700 mt-8 mb-4">Benefícios da Estrutura de Entrada de Média Tensão para Cubículo de Medição:</h2>
            <ul>
              <li><strong>Conexão Confiável:</strong> Nossa estrutura de entrada de média tensão garante uma conexão confiável entre sua instalação elétrica e a rede de distribuição de energia. Isso resulta em um fornecimento estável e consistente de energia para suas operações.</li>
              <li><strong>Facilidade de Medição:</strong> A integração do cubículo de medição permite uma leitura precisa e confiável dos dados de consumo elétrico. Isso facilita o monitoramento e o controle do consumo, auxiliando na gestão eficiente da energia.</li>
              <li><strong>Segurança Elétrica:</strong> Nossos serviços são realizados em conformidade com as normas de segurança elétrica. Garantimos que a estrutura de entrada seja projetada e instalada adequadamente, minimizando os riscos de falhas elétricas e garantindo a segurança dos equipamentos e das pessoas.</li>
              <li><strong>Conformidade Regulatória:</strong> Nossos serviços estão em conformidade com as regulamentações locais e setoriais. Isso assegura que sua instalação elétrica atenda a todos os requisitos legais e regulatórios, evitando possíveis penalidades e garantindo a conformidade do sistema.</li>
            </ul>
            <p>
             Confie em nossa expertise em estruturas de entrada de média tensão para cubículos de medição e garanta uma conexão confiável e eficiente para o fornecimento de energia elétrica. Entre em contato conosco hoje mesmo para discutir suas necessidades e começar a projetar uma solução personalizada para o seu projeto.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EntradaMediaTensaoCubiculo;
