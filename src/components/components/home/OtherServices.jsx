import React from 'react';

const OtherServices = () => {
  const services = [
    {
      title: "Montagens e Estruturas",
      description: "Soluções completas para estruturas de solo, conexão em média tensão e mais."
    },
    {
      title: "Redes e Subestações",
      description: "Implantação e montagem de redes subterrâneas, subestações abrigadas e aéreas."
    },
    {
      title: "Obras de Infraestrutura",
      description: "Executamos desde a escavação mecanizada até a construção de redes de distribuição completas."
    }
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Soluções Completas em Engenharia Elétrica</h2>
          <p className="mt-4 text-lg text-gray-600">Além da energia solar, oferecemos um portfólio completo para grandes projetos.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="/services" className="bg-green-600 text-white font-bold py-4 px-10 rounded-lg hover:bg-green-700 transition duration-300 text-lg">
            Conheça Todos os Serviços
          </a>
        </div>
      </div>
    </div>
  );
};

export default OtherServices;
