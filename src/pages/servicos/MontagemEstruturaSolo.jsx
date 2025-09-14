import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { generateWhatsAppLink } from '../../utils/whatsapp';

const MontagemEstruturaSolo = () => {
  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -100 },
  };

  const serviceName = "Montagem de Estrutura de Solo para Placas Solares";
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
            Montagem de Estrutura de Solo para Placas Solares
          </h1>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Nossos serviços de montagem de estrutura de solo para placas solares oferecem uma solução robusta e confiável para aproveitar ao máximo a energia solar. Com uma equipe especializada e experiente, garantimos uma instalação precisa e segura das placas solares, maximizando a eficiência energética do seu sistema.
            </p>

            <h2 className="text-2xl font-bold text-gray-700 mt-8 mb-4">Principais aspectos do nosso serviço:</h2>
            <ul>
              <li><strong>Projeto Personalizado:</strong> Realizamos uma análise detalhada do local e das condições ambientais para projetar uma estrutura de solo personalizada para suas placas solares. Consideramos fatores como inclinação, orientação solar e ventilação adequada para otimizar a geração de energia solar.</li>
              <li><strong>Seleção de Materiais de Qualidade:</strong> Utilizamos materiais duráveis e resistentes, projetados para suportar as condições ambientais adversas. Nossas estruturas são construídas com aço galvanizado ou alumínio de alta qualidade, garantindo resistência à corrosão e longa vida útil.</li>
              <li><strong>Montagem Profissional:</strong> Nossa equipe altamente capacitada realiza a montagem da estrutura de solo com precisão e segurança. Seguimos as diretrizes técnicas e as melhores práticas da indústria para garantir uma instalação confiável e estável.</li>
              <li><strong>Fundações Adequadas:</strong> Garantimos a correta instalação das fundações da estrutura de solo, levando em consideração o tipo de solo e as condições locais. Isso assegura a estabilidade e a segurança das placas solares, mesmo em áreas sujeitas a ventos fortes ou terrenos irregulares.</li>
              <li><strong>Manutenção e Acesso Fácil:</strong> Projetamos nossas estruturas de solo para facilitar a manutenção e o acesso às placas solares. Isso inclui a instalação de sistemas de fixação e travamento de fácil manuseio, permitindo inspeções regulares e a limpeza das placas, quando necessário.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-700 mt-8 mb-4">Benefícios da Montagem de Estrutura de Solo para Placas Solares:</h2>
            <ul>
                <li><strong>Geração Eficiente de Energia:</strong> Nossa montagem de estrutura de solo maximiza a exposição das placas solares ao sol, otimizando a geração de energia. Isso resulta em um aproveitamento máximo da energia solar disponível, reduzindo seus custos com eletricidade convencional.</li>
                <li><strong>Flexibilidade de Instalação:</strong> As estruturas de solo permitem uma maior flexibilidade na instalação das placas solares. Podem ser adaptadas a diferentes terrenos e espaços disponíveis, possibilitando a implementação de sistemas solares em locais onde a instalação em telhados não é viável.</li>
                <li><strong>Durabilidade e Resistência:</strong> Nossas estruturas são projetadas para resistir a condições climáticas adversas, como ventos fortes, chuvas intensas e variações de temperatura. Isso garante a durabilidade das placas solares ao longo do tempo, sem comprometer a eficiência do sistema.</li>
                <li><strong>Retorno Sustentável do Investimento:</strong> Ao aproveitar a energia solar com eficiência, você estará reduzindo sua dependência de fontes de energia convencionais e contribuindo para a redução das emissões de carbono.</li>
            </ul>

            <div className="mt-12 text-center border-t pt-8">
                <p className="text-xl mb-6 text-gray-800">
                    Pronto para aproveitar o máximo do potencial solar com uma estrutura robusta?
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

export default MontagemEstruturaSolo;
