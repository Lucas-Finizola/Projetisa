import React from 'react';
import { motion } from 'framer-motion';

const faqsData = [
  {
    question: "Quanto custa um sistema de energia solar?",
    answer: "O investimento varia conforme o consumo e tipo de propriedade. Fazemos uma simulação gratuita personalizada para você!"
  },
  {
    question: "Em quanto tempo o investimento se paga?",
    answer: "Normalmente entre 3 a 5 anos, dependendo do seu consumo atual. Após esse período, é economia pura por mais de 20 anos!"
  },
  {
    question: "A energia solar funciona em dias nublados?",
    answer: "Sim! Os painéis captam luz solar mesmo em dias nublados. À noite, você usa energia da rede elétrica com créditos gerados durante o dia."
  },
  {
    question: "Preciso de manutenção constante?",
    answer: "Não! A manutenção é mínima - apenas limpeza ocasional dos painéis. Os sistemas têm garantia de 25 anos."
  }
];

const Faq = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encontre respostas para as perguntas mais comuns sobre energia solar
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqsData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-700">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
