import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const EscavacaoMecanizada = () => {
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
            Escavação Mecanizada: Eficiência e Produtividade no Processo de Escavação
          </h1>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Oferecemos serviços de escavação mecanizada para atender às suas necessidades de construção e obras. Com o uso de equipamentos avançados e operadores especializados, garantimos uma escavação eficiente, precisa e segura, proporcionando maior produtividade ao seu projeto.
            </p>

            <h2 className="text-2xl font-bold text-gray-700 mt-8 mb-4">Nossos Serviços:</h2>
            <ul>
              <li><strong>Planejamento e Preparação:</strong> Realizamos uma análise detalhada do local e desenvolvemos um plano de escavação personalizado, levando em consideração as características do terreno, as especificações do projeto e as restrições existentes. Preparamos adequadamente o local para garantir uma escavação eficiente e sem contratempos.</li>
              <li><strong>Escavação Precisa:</strong> Utilizamos equipamentos modernos de escavação, como escavadeiras, retroescavadeiras e mini escavadeiras, para realizar o trabalho de forma precisa e eficiente. Nossos operadores experientes são habilidosos em manusear essas máquinas, garantindo resultados de alta qualidade.</li>
              <li><strong>Gestão de Resíduos:</strong> Durante o processo de escavação, gerenciamos de forma responsável e adequada os resíduos resultantes. Seja a remoção de terra, pedras ou outros materiais, cuidamos da sua disposição de acordo com as regulamentações ambientais vigentes.</li>
              <li><strong>Segurança e Conformidade:</strong> A segurança é nossa prioridade. Nossos operadores são treinados para seguir rigorosamente os protocolos de segurança durante todo o processo de escavação. Além disso, nos certificamos de que todas as operações estejam em conformidade com as normas e regulamentos aplicáveis.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-700 mt-8 mb-4">Benefícios da Escavação Mecanizada:</h2>
            <ul>
                <li><strong>Eficiência e Produtividade:</strong> A escavação mecanizada permite a conclusão mais rápida das tarefas de escavação, resultando em maior eficiência e produtividade. Isso ajuda a reduzir os prazos de construção e a minimizar os atrasos no projeto.</li>
                <li><strong>Precisão e Qualidade:</strong> Com o uso de equipamentos especializados, garantimos uma escavação precisa e de alta qualidade. Isso é essencial para a instalação de fundações, tubulações, redes subterrâneas e outros elementos importantes em seu projeto.</li>
                <li><strong>Redução de Esforço Manual:</strong> A escavação mecanizada reduz a necessidade de trabalho manual intensivo, minimizando o esforço físico necessário. Isso proporciona um ambiente de trabalho mais seguro e reduz o risco de lesões relacionadas ao trabalho.</li>
                <li><strong>Flexibilidade e Adaptabilidade:</strong> Os equipamentos de escavação mecanizada são versáteis e podem lidar com diferentes tipos de solo e condições de terreno. Isso nos permite enfrentar uma variedade de projetos e atender às necessidades específicas de cada cliente.</li>
            </ul>
             <p>
              Confie em nossa equipe especializada em escavação mecanizada para garantir um processo de escavação eficiente, seguro e de alta qualidade. Entre em contato conosco hoje mesmo e descubra como podemos atender às suas necessidades de escavação de forma profissional e confiável.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EscavacaoMecanizada;
