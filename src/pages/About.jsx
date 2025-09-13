import React from 'react';
import equipeImage from '../assets/projetisa_equipe_profissional.png';

const About = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Sobre Nós</h1>
      <div className="max-w-3xl mx-auto text-lg leading-relaxed">
        <p className="mb-4">
          A Projetisa é uma empresa de engenharia elétrica especializada em soluções inovadoras e sustentáveis, com foco principal em energia solar. Com anos de experiência no mercado, nos dedicamos a oferecer projetos de alta qualidade que geram economia significativa para nossos clientes e contribuem para um futuro mais verde.
        </p>
        <p className="mb-4">
          Nossa missão é atuar no setor da engenharia elétrica, proporcionando padrões de excelência nos serviços aos clientes. Nosso foco é oferecer soluções inovadoras e tecnológicas, especialmente no campo da energia renovável. Valorizamos nossos colaboradores e exercemos responsabilidade social em todas as nossas atividades.
        </p>
        <p className="mb-4">
          Visamos ser reconhecidos como referência regional na área da engenharia elétrica, buscando constantemente a satisfação dos nossos clientes. Nosso objetivo é gerar soluções inovadoras e criar valor de forma sustentável.
        </p>
        <h2 className="text-3xl font-bold mt-10 mb-6 text-center">Nossa Equipe</h2>
        <p className="text-center mb-8">
          Contamos com uma equipe de profissionais altamente qualificados e experientes, prontos para enfrentar os desafios mais complexos e entregar resultados excepcionais em cada projeto.
        </p>
        {/* Imagem da equipe - no futuro viria do CMS */}
        <img src={equipeImage} alt="Equipe Projetisa" className="w-full rounded-lg shadow-lg mb-8" />
      </div>
    </div>
  );
};

export default About;
