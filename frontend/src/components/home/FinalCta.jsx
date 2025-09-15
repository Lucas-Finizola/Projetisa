import React from 'react';
import { motion } from 'framer-motion';

const FinalCta = ({ scrollToHeroForm }) => {
  return (
    <section id="simulacao" className="py-20 bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Não Perca Mais Tempo e Dinheiro!
          </h2>
          <p className="text-xl mb-8">
            A cada mês que passa, você está perdendo a oportunidade de economizar e contribuir para um futuro mais sustentável.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToHeroForm} // Leva o usuário de volta para o formulário principal
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-10 py-5 rounded-lg font-bold text-xl transition-colors shadow-lg"
          >
            QUERO MINHA SIMULAÇÃO GRATUITA!
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCta;
