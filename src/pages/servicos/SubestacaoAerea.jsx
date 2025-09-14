import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const SubestacaoAerea = () => {
  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -100 },
  };

  const serviceName = "Subestação Aérea";
  const whatsappMessage = `Olá! Gostaria de solicitar um orçamento para o serviço de ${serviceName}.`;
  const whatsappLink = `https://api.whatsapp.com/send?phone=5583996556931&text=${encodeURIComponent(whatsappMessage)}`;

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
            Subestação Aérea: Distribuição de Energia Confiável e Eficiente
          </h1>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Nossos serviços abrangem a montagem e instalação de subestações aéreas, fornecendo soluções eficientes para a distribuição de energia elétrica. Com expertise e compromisso com a qualidade, nossa equipe especializada garante a construção de subestações aéreas seguras e confiáveis, atendendo às necessidades específicas de nossos clientes.
            </p>
            <h2 className="text-2xl font-bold text-gray-700 mt-8 mb-4">Principais aspectos do nosso serviço:</h2>
            <ul>
              <li><strong>Projeto Personalizado:</strong> Realizamos um projeto personalizado de acordo com as demandas e requisitos de energia de cada cliente. Levamos em consideração fatores como a carga elétrica, a capacidade de distribuição, a topografia e as normas regulatórias para criar um projeto eficiente e seguro.</li>
              <li><strong>Seleção de Equipamentos Adequados:</strong> Trabalhamos com equipamentos de alta qualidade, como transformadores, disjuntores, chaves seccionadoras e para-raios, selecionando-os de acordo com as necessidades específicas de cada subestação aérea. Garantimos a conformidade com as normas técnicas e de segurança aplicáveis.</li>
              <li><strong>Montagem e Instalação Profissional:</strong> Nossa equipe altamente qualificada realiza a montagem e instalação da subestação aérea com precisão e cuidado. Seguimos os procedimentos adequados de montagem, cabeamento e conexão dos equipamentos, garantindo a eficiência e a confiabilidade do sistema.</li>
              <li><strong>Testes e Comissionamento:</strong> Após a instalação, realizamos testes rigorosos para verificar o desempenho e a segurança da subestação aérea. Isso inclui testes de funcionamento, isolamento, curto-circuito e proteção. Certificamo-nos de que todos os componentes estejam em pleno funcionamento antes de colocar a subestação em operação.</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-700 mt-8 mb-4">Benefícios da Subestação Aérea:</h2>
            <ul>
              <li><strong>Distribuição Eficiente:</strong> As subestações aéreas permitem a distribuição eficiente da energia elétrica para áreas residenciais, comerciais e industriais. Elas garantem a estabilidade da tensão e a redução de perdas elétricas durante o processo de distribuição, melhorando a qualidade e confiabilidade do fornecimento de energia.</li>
              <li><strong>Otimização do Espaço:</strong> As subestações aéreas ocupam menos espaço em comparação com as subestações convencionais, o que é especialmente vantajoso em áreas urbanas onde o espaço é limitado. Elas podem ser instaladas em postes ou estruturas elevadas, otimizando o uso do espaço disponível.</li>
              <li><strong>Manutenção Simplificada:</strong> A manutenção de subestações aéreas é mais acessível e simplificada em comparação com subestações subterrâneas. A identificação e resolução de problemas são mais ágeis, o que contribui para a redução do tempo de inatividade e dos custos de manutenção.</li>
              <li><strong>Flexibilidade e Expansibilidade:</strong> As subestações aéreas são projetadas para serem facilmente adaptáveis e expansíveis. Caso haja um aumento na demanda de energia, é possível adicionar novos equipamentos ou realizar modificações no sistema de forma mais prática e rápida.</li>
            </ul>
            <div className="mt-12 text-center border-t pt-8">
                <p className="text-xl mb-6 text-gray-800">
                    Garanta uma distribuição de energia confiável e eficiente.
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

export default SubestacaoAerea;
