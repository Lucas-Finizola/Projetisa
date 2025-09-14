import React from 'react';
import { motion } from 'framer-motion';

const processSteps = [
  {
    step: "1",
    title: "Simulação Gratuita",
    description: "Análise personalizada do seu consumo e potencial de economia"
  },
  {
    step: "2",
    title: "Projeto Personalizado",
    description: "Engenheiros criam projeto sob medida para suas necessidades"
  },
  {
    step: "3",
    title: "Instalação Profissional",
    description: "Instalação rápida, segura e com mínimo impacto"
  },
  {
    step: "4",
    title: "Economia Imediata",
    description: "Sistema conectado e você já começa a economizar!"
  }
];

const Process = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Seu Caminho para a Independência Energética
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Em apenas 4 passos simples, você terá seu sistema de energia solar funcionando
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <div className="text-green-600 text-5xl font-bold mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
