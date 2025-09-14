import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const LaudoAterramento = () => {
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
            Laudo de Aterramento
          </h1>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              O laudo de aterramento é um documento técnico essencial que avalia a eficiência do sistema de aterramento de uma instalação elétrica. Ele garante a segurança de pessoas, equipamentos e da própria edificação contra descargas atmosféricas e falhas elétricas.
            </p>
            <h2 className="text-2xl font-bold text-gray-700 mt-8 mb-4">Benefícios de um Laudo de Aterramento:</h2>
            <ul>
              <li><strong>Segurança:</strong> Protege contra choques elétricos, curtos-circuitos e outros acidentes de origem elétrica.</li>
              <li><strong>Proteção de Equipamentos:</strong> Evita danos a equipamentos sensíveis causados por sobretensões e descargas elétricas.</li>
              <li><strong>Conformidade com Normas:</strong> Atende às exigências de normas técnicas como a NBR 5410 e a NBR 5419, além de ser um requisito para a obtenção de alvarás e licenças.</li>
              <li><strong>Prevenção de Incêndios:</strong> Um sistema de aterramento inadequado pode gerar faíscas e superaquecimento, que são potenciais causas de incêndio.</li>
            </ul>
            
            <p>
              Nossa equipe de especialistas realiza medições precisas e uma análise completa do seu sistema de aterramento, fornecendo um laudo detalhado com as medições realizadas, as conclusões e as recomendações para adequação, caso sejam necessárias. Entre em contato conosco e garanta a segurança e a conformidade da sua instalação.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LaudoAterramento;
