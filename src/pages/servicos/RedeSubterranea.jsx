import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { generateWhatsAppLink } from '../../utils/whatsapp';

const RedeSubterranea = () => {
  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -100 },
  };

  const serviceName = "Rede Subterrânea de Média Tensão";
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
            Rede Subterrânea de Média Tensão: Eficiência e Estética para a Distribuição de Energia
          </h1>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Nossos serviços de implantação de rede subterrânea de média tensão oferecem uma solução moderna e eficiente para a distribuição de energia elétrica. Com expertise em projetos de redes subterrâneas, nossa equipe especializada garante uma instalação confiável e esteticamente agradável, atendendo às suas necessidades específicas.
            </p>
            <h2 className="text-2xl font-bold text-gray-700 mt-8 mb-4">Principais aspectos do nosso serviço:</h2>
            <ul>
              <li><strong>Planejamento Personalizado:</strong> Realizamos um planejamento detalhado do projeto, considerando os requisitos técnicos e regulatórios. Levamos em conta fatores como a carga de energia, a topografia, a capacidade do solo e a distância entre os pontos de conexão para projetar uma rede subterrânea eficiente e segura.</li>
              <li><strong>Escolha de Componentes de Qualidade:</strong> Trabalhamos com materiais e componentes elétricos de alta qualidade, garantindo a durabilidade e o desempenho do sistema. Selecionamos cabos isolados, conectores, emendas e dispositivos de proteção adequados para garantir a eficiência e a segurança da rede subterrânea de média tensão.</li>
              <li><strong>Escavação e Instalação Profissional:</strong> Nossa equipe realiza a escavação mecanizada com precisão, minimizando os impactos ao ambiente e às áreas urbanas. Os cabos são instalados cuidadosamente nos dutos subterrâneos, garantindo a proteção adequada e o posicionamento correto para evitar danos futuros.</li>
              <li><strong>Testes e Certificações:</strong> Após a instalação, realizamos testes rigorosos para verificar a integridade e o desempenho da rede subterrânea. Isso inclui testes de continuidade elétrica, isolamento, resistência e qualidade de conexão.</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-700 mt-8 mb-4">Benefícios da Rede Subterrânea de Média Tensão:</h2>
            <ul>
                <li><strong>Estética e Integração Urbana:</strong> A rede subterrânea de média tensão proporciona uma aparência mais limpa e esteticamente agradável em áreas urbanas. Sem a presença de postes e fios aéreos, a paisagem é preservada, melhorando a integração visual em ambientes residenciais, comerciais e industriais.</li>
                <li><strong>Segurança e Confiabilidade:</strong> A instalação subterrânea elimina os riscos associados a danos causados por intempéries, vandalismo ou interferências externas. A rede fica protegida contra quedas de galhos, tempestades e outros eventos climáticos, garantindo um fornecimento de energia mais confiável e seguro.</li>
                <li><strong>Menor Manutenção e Maior Durabilidade:</strong> A rede subterrânea requer menos manutenção em comparação com a rede aérea. Os cabos protegidos estão menos suscetíveis a danos físicos e exposição às intempéries, resultando em uma maior vida útil do sistema e menos interrupções no fornecimento de energia.</li>
                <li><strong>Menores Perdas de Energia:</strong> A rede subterrânea reduz as perdas de energia elétrica durante a transmissão e a distribuição. A menor exposição a interferências externas e o uso de cabos de alta qualidade contribuem para uma eficiência energética aprimorada e uma distribuição mais eficiente da eletricidade.</li>
            </ul>
            <div className="mt-12 text-center border-t pt-8">
                <p className="text-xl mb-6 text-gray-800">
                    Interessado em uma solução de energia mais segura, confiável e esteticamente agradável?
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

export default RedeSubterranea;
