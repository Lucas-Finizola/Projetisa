import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ConexaoMediaTensao = () => {
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
            Montagem de Estrutura de Conexão de Média Tensão: Confiabilidade e Eficiência Energética
          </h1>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Nossos serviços de montagem de estrutura de conexão de média tensão oferecem soluções confiáveis e eficientes para conectar e distribuir energia elétrica em sistemas de média tensão. Com conhecimento técnico e experiência, fornecemos montagens precisas e seguras, garantindo o correto funcionamento do seu sistema elétrico.
            </p>
            <h2 className="text-2xl font-bold text-gray-700 mt-8 mb-4">Principais aspectos do nosso serviço:</h2>
            <ul>
              <li><strong>Projeto Personalizado:</strong> Realizamos um estudo detalhado das necessidades do seu projeto, levando em consideração as especificações técnicas e os requisitos regulatórios. Com base nessa análise, projetamos uma estrutura de conexão personalizada, otimizando o desempenho do sistema de média tensão.</li>
              <li><strong>Seleção de Componentes de Qualidade:</strong> Trabalhamos com componentes elétricos de alta qualidade e durabilidade, garantindo uma montagem confiável e segura. Selecionamos cuidadosamente os equipamentos necessários, como isoladores, chaves, conectores e cabos, para garantir uma conexão estável e eficiente.</li>
              <li><strong>Montagem Profissional:</strong> Nossa equipe especializada realiza a montagem da estrutura de conexão de média tensão de acordo com as melhores práticas e normas de segurança. Garantimos a correta instalação dos componentes, a conexão adequada dos cabos e a fixação segura da estrutura, visando a durabilidade e a confiabilidade do sistema.</li>
              <li><strong>Testes e Certificações:</strong> Após a montagem, realizamos testes minuciosos para verificar o funcionamento adequado da estrutura de conexão. Isso inclui testes de continuidade elétrica, isolamento e resistência, garantindo a conformidade com as normas técnicas e as regulamentações específicas. Emitimos as certificações necessárias para comprovar a qualidade do serviço realizado.</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-700 mt-8 mb-4">Benefícios da Montagem de Estrutura de Conexão de Média Tensão:</h2>
            <ul>
              <li><strong>Confiabilidade do Sistema:</strong> Nossa montagem de estrutura de conexão assegura a confiabilidade do seu sistema de média tensão. Isso resulta em um fornecimento de energia estável e contínuo, evitando interrupções indesejadas e garantindo o bom funcionamento das suas operações elétricas.</li>
              <li><strong>Eficiência Energética:</strong> A correta montagem da estrutura de conexão de média tensão contribui para a eficiência energética do sistema. Minimizamos perdas de energia, garantindo uma distribuição mais eficiente e reduzindo o consumo desnecessário.</li>
              <li><strong>Segurança Elétrica:</strong> Nossas estruturas de conexão são projetadas e montadas levando em consideração a segurança elétrica. Garantimos a proteção adequada contra curto-circuitos, sobrecargas e outras condições adversas, proporcionando um ambiente seguro para as suas instalações.</li>
              <li><strong>Suporte e Manutenção:</strong> Além da montagem, oferecemos suporte técnico contínuo e serviços de manutenção preventiva. Estamos disponíveis para resolver eventuais problemas, realizar inspeções periódicas e garantir o bom funcionamento do sistema de conexão de média tensão.</li>
            </ul>
            <p>
              Confie em nossa experiência em montagem de estrutura de conexão de média tensão e desfrute de um sistema elétrico confiável e eficiente. Entre em contato conosco para mais informações e para discutir as necessidades específicas do seu projeto.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ConexaoMediaTensao;
