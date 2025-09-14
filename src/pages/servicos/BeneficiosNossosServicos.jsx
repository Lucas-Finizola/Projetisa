import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { generateWhatsAppLink } from '../../utils/whatsapp';

const BeneficiosNossosServicos = () => {
  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -100 },
  };

  const serviceName = "Benefícios de Nossos Serviços";
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
            {serviceName}
          </h1>
          <div className="prose prose-lg max-w-none text-gray-600">
            <h2 className="text-2xl font-bold text-gray-700 mt-8 mb-4">Principais Benefícios:</h2>
            <ul>
              <li><strong>Eficiência Energética:</strong> Nossas soluções de rede de média tensão são projetadas para otimizar o fluxo de energia, minimizando perdas e aumentando a eficiência energética. Isso resulta em economia de custos e contribui para a sustentabilidade ambiental.</li>
              <li><strong>Confiabilidade e Estabilidade:</strong> Construímos redes de distribuição robustas e confiáveis, projetadas para lidar com cargas variáveis e atender às demandas crescentes de energia. Isso garante uma distribuição estável e contínua de eletricidade, evitando interrupções e garantindo o funcionamento adequado de equipamentos e sistemas.</li>
              <li><strong>Segurança:</strong> Nosso compromisso com a segurança é fundamental. Seguimos rigorosamente as normas e regulamentos de segurança durante todo o processo de construção, garantindo um ambiente de trabalho seguro para nossa equipe e para a comunidade em geral.</li>
              <li><strong>Suporte e Manutenção Contínua:</strong> Além da construção, oferecemos suporte e serviços de manutenção contínua para garantir o desempenho ideal do sistema ao longo do tempo. Nossa equipe está pronta para resolver quaisquer problemas e fornecer assistência técnica sempre que necessário.</li>
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

export default BeneficiosNossosServicos;
