import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 text-center mt-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-center md:text-left">
            <p className="font-bold">Projetisa Engenharia</p>
            <p>R. João Teixeira de Carvalho, 123 - João Pessoa</p>
            <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
          </div>
          <div className="text-center md:text-right">
            <p className="font-bold">Entre em contato</p>
            <p>Telefone: (83) 2186-7527</p>
            <p>WhatsApp: (83) 9 9655-6931</p>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mt-4 border-t border-gray-700 pt-4">
          <a href="#" className="hover:text-gray-300 text-sm">Política de Privacidade</a>
          <a href="#" className="hover:text-gray-300 text-sm">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
