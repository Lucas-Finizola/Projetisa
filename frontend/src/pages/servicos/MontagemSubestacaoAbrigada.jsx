import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { generateWhatsAppLink } from '../../utils/whatsapp';
import WhatsappIcon from '../../components/icons/WhatsappIcon';

const MontagemSubestacaoAbrigada = () => {
  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -100 },
  };

  const serviceName = "Montagem de Subestação Abrigada";
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
            Montagem de Subestação Abrigada: Confiabilidade e Segurança Energética
          </h1>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Nossos serviços de montagem de subestação abrigada fornecem uma solução completa e confiável para atender às suas necessidades de distribuição de energia. Com experiência em projetos de subestações, nossa equipe qualificada oferece uma montagem precisa e eficiente, garantindo um fornecimento seguro e estável de energia elétrica.
            </p>
            <h2 className="text-2xl font-bold text-gray-700 mt-8 mb-4">Principais aspectos do nosso serviço:</h2>
            <ul>
              <li><strong>Projeto Personalizado:</strong> Realizamos um estudo detalhado das suas demandas e requisitos específicos. Com base nessa análise, desenvolvemos um projeto personalizado para a montagem da subestação abrigada, levando em consideração a capacidade de carga, os dispositivos de proteção, a segurança e a conformidade com as normas elétricas.</li>
              <li><strong>Seleção de Equipamentos Adequados:</strong> Trabalhamos com uma variedade de fornecedores confiáveis para garantir a escolha adequada dos equipamentos da subestação. Selecionamos transformadores, disjuntores, painéis de controle e outros dispositivos necessários, levando em conta a eficiência energética, a confiabilidade e a durabilidade.</li>
              <li><strong>Montagem Profissional:</strong> Nossa equipe altamente qualificada realiza a montagem da subestação abrigada de forma precisa e eficiente. Seguimos os procedimentos de segurança e as diretrizes técnicas, garantindo uma instalação segura e de alta qualidade.</li>
              <li><strong>Testes e Verificações:</strong> Após a montagem, realizamos testes rigorosos para garantir o funcionamento adequado da subestação. Isso inclui testes de funcionamento dos equipamentos, verificações de continuidade elétrica, resistência e isolamento, assegurando a conformidade com os padrões de qualidade e segurança.</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-700 mt-8 mb-4">Benefícios da Montagem de Subestação Abrigada:</h2>
            <ul>
                <li><strong>Confiabilidade Energética:</strong> Nossa montagem de subestação abrigada oferece um fornecimento de energia confiável e estável. Isso reduz o risco de falhas e interrupções no sistema elétrico, garantindo a continuidade das operações e evitando perdas econômicas.</li>
                <li><strong>Proteção e Segurança:</strong> A subestação abrigada proporciona uma proteção adequada aos equipamentos elétricos e às conexões. Isso minimiza o risco de danos causados por condições ambientais adversas, como umidade, poeira ou impactos mecânicos.</li>
                <li><strong>Otimização de Espaço:</strong> A subestação abrigada é projetada para otimizar o espaço disponível, proporcionando uma solução compacta e eficiente. Isso é especialmente vantajoso em áreas com restrições de espaço ou onde a estética do ambiente é importante.</li>
                <li><strong>Manutenção Simplificada:</strong> A estrutura abrigada facilita a manutenção dos equipamentos da subestação. O acesso aos componentes é mais fácil e seguro, permitindo inspeções regulares, reparos e substituições quando necessário, minimizando o tempo de inatividade do sistema.</li>
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
                  <WhatsappIcon className="mr-3 w-6 h-6" />
                  Falar com um especialista
                </a>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MontagemSubestacaoAbrigada;
