import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    address: '',
    kwh: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No futuro, esta lógica enviaria dados para o Directus ou um serviço de e-mail
    alert('Obrigado! Sua mensagem foi enviada. Entraremos em contato em breve!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: '',
      address: '',
      kwh: ''
    });
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Entre em Contato</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Fale Conosco</h2>
          <p className="text-gray-700 mb-6">
            Preencha o formulário abaixo ou utilize nossos canais de contato para tirar suas dúvidas e solicitar um orçamento.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nome Completo</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Seu nome" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Seu email" required />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">WhatsApp com DDD</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="(XX) XXXXX-XXXX" required />
            </div>
            <div>
              <label htmlFor="interest" className="block text-gray-700 text-sm font-bold mb-2">Interesse</label>
              <input type="text" id="interest" name="interest" value={formData.interest} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Ex: Energia Solar Residencial" />
            </div>
            <div>
              <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Endereço (para orçamento)</label>
              <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Rua, Número, Bairro, Cidade" />
            </div>
            <div>
              <label htmlFor="kwh" className="block text-gray-700 text-sm font-bold mb-2">Consumo Mensal (KWh) - Opcional</label>
              <input type="number" id="kwh" name="kwh" value={formData.kwh} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Ex: 300" />
            </div>
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline w-full">
              Enviar Mensagem
            </button>
          </form>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Nossos Contatos</h2>
          <div className="space-y-4 text-gray-700 text-lg">
            <p><strong>Telefone:</strong> (83) 2186-7527</p>
            <p><strong>WhatsApp:</strong> (83) 9 9655-6931</p>
            <p><strong>Email:</strong> contato@projetisa.eng.br</p>
            <p><strong>Endereço:</strong> R. João Teixeira de Carvalho, 123 - João Pessoa, PB</p>
            <div className="mt-6">
              <a href="https://wa.me/5583996556931" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.486 5.236 3.486 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.923 3.574 1.448 5.564 1.451 5.234 0 9.52-4.287 9.52-9.519 0-5.233-4.286-9.52-9.52-9.52-5.233 0-9.52 4.287-9.52 9.52 0 1.747.506 3.452 1.456 4.93l-1.477 5.45zm-1.432-4.092l1.362-.846c-.056-.114-.105-.229-.148-.346-.277-.702-.43-1.448-.43-2.204 0-3.957 3.218-7.176 7.178-7.176 1.938 0 3.77.746 5.176 2.152 1.406 1.406 2.151 3.238 2.151 5.177 0 3.958-3.218 7.178-7.176 7.178-1.94 0-3.77-.746-5.176-2.152l-1.362.846zm-1.432-4.092l1.362-.846c-.056-.114-.105-.229-.148-.346-.277-.702-.43-1.448-.43-2.204 0-3.957 3.218-7.176 7.178-7.176 1.938 0 3.77.746 5.176 2.152 1.406 1.406 2.151 3.238 2.151 5.177 0 3.958-3.218 7.178-7.176 7.178-1.94 0-3.77-.746-5.176-2.152l-1.362.846z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

