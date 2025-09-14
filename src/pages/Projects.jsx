import React from 'react';
import projectImage from '../assets/images/projetisa_projeto_exemplo.png';

const Projects = () => {
  const projects = [
    {
      title: "Instalação Residencial - João Pessoa",
      description: "Sistema fotovoltaico completo para residência, gerando economia de 90% na conta de luz.",
      image: projectImage
    },
    {
      title: "Fazenda Solar - Agreste Paraibano",
      description: "Projeto de grande porte para irrigação e consumo da propriedade rural, com retorno do investimento em 3 anos.",
      image: projectImage
    },
    {
      title: "Comércio Sustentável - Campina Grande",
      description: "Solução para redução de custos operacionais de um supermercado, com impacto positivo na imagem da empresa.",
      image: projectImage
    }
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Nossos Projetos</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-64 object-cover"/>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a href="#" className="text-green-600 hover:underline font-semibold">Ver Detalhes</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
