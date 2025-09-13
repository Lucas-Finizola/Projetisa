import React from 'react';
import logo from '../../../assets/logo.PNG';

const Header = () => {
  return (
    <header className="bg-green-600 text-white p-4 sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="Logo da Projetisa" className="h-12" />
        <div>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-gray-300">Início</a></li>
            <li><a href="/about" className="hover:text-gray-300">Sobre</a></li>
            <li><a href="/services" className="hover:text-gray-300">Serviços</a></li>
            <li><a href="/projects" className="hover:text-gray-300">Projetos</a></li>
            <li><a href="/blog" className="hover:text-gray-300">Blog</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contato</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
