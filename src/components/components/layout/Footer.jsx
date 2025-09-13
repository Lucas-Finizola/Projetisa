import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center mt-auto">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Projetisa. Todos os direitos reservados.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-gray-300">Política de Privacidade</a>
          <a href="#" className="hover:text-gray-300">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

