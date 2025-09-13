import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Energia Solar Residencial",
      description: "Economize na conta de luz da sua casa com um sistema de energia solar personalizado para suas necessidades.",
      image: "/src/assets/images/projetisa_servicos_diversos.png"
    },
    {
      title: "Energia Solar Comercial",
      description: "Reduza os custos operacionais da sua empresa e invista em sustentabilidade com nossas soluções para o comércio.",
      image: "/src/assets/images/projetisa_servicos_diversos.png"
    },
    {
      title: "Energia Solar Industrial",
      description: "Sistemas de grande porte para indústrias que buscam eficiência energética e redução de custos em larga escala.",
      image: "/src/assets/images/projetisa_servicos_diversos.png"
    },
    {
      title: "Energia Solar Rural",
      description: "Leve energia para o campo, otimize sua produção e reduza custos com nossas soluções para o agronegócio.",
      image: "/src/assets/images/projetisa_servicos_diversos.png"
    }
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Nossos Serviços</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={service.image} alt={service.title} className="w-full h-64 object-cover"/>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

