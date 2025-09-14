import React from 'react';
import { motion } from 'framer-motion';
import {
  DollarSign,
  Leaf,
  TrendingUp,
  Shield
} from 'lucide-react';

const benefitsData = [
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Economia de até 95%",
    description: "Reduza drasticamente sua conta de luz e proteja-se dos aumentos tarifários."
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "100% Sustentável",
    description: "Contribua para um futuro mais verde utilizando energia limpa e renovável."
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Valoriza seu Imóvel",
    description: "Aumente o valor de mercado da sua propriedade com tecnologia moderna."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Garantia de 25 Anos",
    description: "Sistemas duráveis com baixíssima manutenção."
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por Que Escolher Energia Solar?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra as vantagens exclusivas que só a energia solar pode oferecer
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="text-green-600 mb-4 flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
