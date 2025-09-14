import React from 'react';
import { motion } from 'framer-motion';

const UrgencyBanner = ({ scrollToHeroForm }) => {
  return (
    <section className="py-16 bg-red-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ⚡ ATENÇÃO: A Tarifa de Energia Não Para de Subir!
          </h2>
          <p className="text-xl mb-6">
            Enquanto as tarifas só aumentam, quem tem energia solar está economizando milhares de reais por ano.
            <strong> Não deixe para depois!</strong>
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToHeroForm}
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            PROTEJA-SE DOS AUMENTOS AGORA!
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default UrgencyBanner;
