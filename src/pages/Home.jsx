import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sun,
  Zap,
  Leaf,
  TrendingUp,
  Shield,
  CheckCircle,
  DollarSign,
  Building,
  ArrowRight,
  Star,
  Phone,
  MessageSquare, // Adicionado
  Mail, // Adicionado
  Construction
} from 'lucide-react';

import heroImage from '../assets/projetisa_projeto_exemplo.png';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consumption: '',
    propertyType: 'residencial'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Função para o formulário Netlify (E-mail)
  const handleSubmit = (e) => {
    // A lógica de e.preventDefault() não é mais necessária para o Netlify
    alert('Obrigado! Sua simulação foi enviada por e-mail. Entraremos em contato em breve!');
  };

  // Função para o botão WhatsApp
  const handleWhatsAppSubmit = () => {
    const { name, email, phone, consumption, propertyType } = formData;

    if (!name || !phone || !consumption) {
      alert('Por favor, preencha pelo menos os campos de nome, WhatsApp e valor da conta.');
      return;
    }

    const message = `Olá, equipe da Projetisa!\n\nGostaria de solicitar um orçamento para um projeto de instalação de painéis solares. Seguem meus dados para análise inicial:\n\n- *Nome Completo:* ${name}\n- *WhatsApp para Contato:* ${phone}\n- *E-mail:* ${email || 'Não informado'}\n- *Valor Médio da Conta de Luz:* R$ ${consumption}\n- *Tipo de Propriedade:* ${propertyType}\n\nAguardo o contato de um especialista para darmos continuidade. Obrigado!`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=5583996556931&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToHeroForm = () => {
    const element = document.getElementById('hero-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  
  const whatsappSpecialistLink = `https://api.whatsapp.com/send?phone=5583996556931`;

  const benefits = [
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
      description: "Sistemas duráveis com garantia estendida e baixíssima manutenção."
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Simulação Gratuita",
      description: "Análise personalizada do seu consumo e potencial de economia"
    },
    {
      step: "2",
      title: "Projeto Personalizado",
      description: "Engenheiros criam projeto sob medida para suas necessidades"
    },
    {
      step: "3",
      title: "Instalação Profissional",
      description: "Instalação rápida, segura e com mínimo impacto"
    },
    {
      step: "4",
      title: "Economia Imediata",
      description: "Sistema conectado e você já começa a economizar!"
    }
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Empresário",
      content: "Minha empresa economiza R$ 3.500 por mês com a energia solar da Projetisa. Investimento que se pagou em 3 anos!",
      rating: 5,
      savings: "R$ 3.500/mês"
    },
    {
      name: "Ana Santos",
      role: "Proprietária Residencial",
      content: "Conta de luz que era R$ 450 agora é apenas R$ 35. Recomendo a Projetisa para todos!",
      rating: 5,
      savings: "92% de economia"
    },
    {
      name: "João Oliveira",
      role: "Fazendeiro",
      content: "Sistema rural perfeito! Energia para toda a propriedade e ainda sobra para vender energia.",
      rating: 5,
      savings: "100% independente"
    }
  ];

  const otherServices = [
    {
      icon: <Sun className="w-10 h-10" />,
      title: "Estrutura de Solo para Placas Solares",
      description: "Soluções robustas para aproveitar ao máximo a energia solar, com instalação precisa e segura."
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Rede Subterrânea de Média Tensão",
      description: "Solução moderna para distribuição de energia, com instalação confiável e esteticamente agradável."
    },
    {
      icon: <Building className="w-10 h-10" />,
      title: "Montagem de Subestação Abrigada",
      description: "Soluções completas e confiáveis para atender às suas necessidades de distribuição de energia."
    },
    {
      icon: <Construction className="w-10 h-10" />,
      title: "Escavação Mecanizada",
      description: "Eficiência e produtividade no processo de escavação para suas obras, com equipamentos avançados."
    }
  ];

  const faqs = [
    {
      question: "Quanto custa um sistema de energia solar?",
      answer: "O investimento varia conforme o consumo e tipo de propriedade. Fazemos uma simulação gratuita personalizada para você!"
    },
    {
      question: "Em quanto tempo o investimento se paga?",
      answer: "Normalmente entre 3 a 5 anos, dependendo do seu consumo atual. Após esse período, é economia pura por mais de 20 anos!"
    },
    {
      question: "A energia solar funciona em dias nublados?",
      answer: "Sim! Os painéis captam luz solar mesmo em dias nublados. À noite, você usa energia da rede elétrica com créditos gerados durante o dia."
    },
    {
      question: "Preciso de manutenção constante?",
      answer: "Não! A manutenção é mínima - apenas limpeza ocasional dos painéis. Os sistemas têm garantia de 25 anos."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Transforme a Luz do Sol em
                <span className="text-yellow-400"> Economia Real</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Descubra como a energia solar pode reduzir sua conta de luz em até
                <strong className="text-yellow-400"> 95%</strong> e valorizar seu imóvel
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={whatsappSpecialistLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Falar com Especialista
                </motion.a>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Simulação 100% Gratuita</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Sem Compromisso</span>
                </div>
              </div>
            </motion.div>

            {/* Formulário Hero com ID */}
            <motion.div
              id="hero-form"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Calcule Sua Economia Agora!
              </h3>
              <form 
                name="simulacao" 
                method="POST" 
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="simulacao" />
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Seu melhor e-mail (opcional)"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="WhatsApp com DDD"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900"
                    required
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="consumption"
                    placeholder="Valor da conta de luz (R$)"
                    value={formData.consumption}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900"
                    required
                  />
                </div>
                <div>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900"
                  >
                    <option value="residencial">Residencial</option>
                    <option value="comercial">Comercial</option>
                    <option value="industrial">Industrial</option>
                    <option value="rural">Rural</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-bold text-base transition-colors flex items-center justify-center"
                    >
                      <MessageSquare className="mr-2 w-5 h-5" />
                      Enviar por WhatsApp
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-bold text-base transition-colors flex items-center justify-center"
                    >
                      <Mail className="mr-2 w-5 h-5" />
                      Enviar por E-mail
                    </motion.button>
                </div>
              </form>
              <p className="text-xs text-gray-600 text-center mt-4">
                ✓ Seus dados estão seguros conosco
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção de Urgência */}
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

      {/* Seção de Benefícios */}
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
            {benefits.map((benefit, index) => (
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

      {/* Seção Como Funciona */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seu Caminho para a Independência Energética
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Em apenas 4 passos simples, você terá seu sistema de energia solar funcionando
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="text-green-600 text-5xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Depoimentos */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Clientes Reais, Economias Reais
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Veja o que nossos clientes satisfeitos têm a dizer sobre a Projetisa
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "{testimonial.content}"
                </p>
                <p className="font-semibold text-gray-900">
                  {testimonial.name}, <span className="text-gray-600">{testimonial.role}</span>
                </p>
                <p className="text-green-600 font-bold mt-2">
                  Economia: {testimonial.savings}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Outros Serviços */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Soluções Completas em Engenharia Elétrica
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Além da energia solar, a Projetisa oferece um portfólio completo de serviços para atender seu projeto, seja ele residencial, comercial ou industrial.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {otherServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-green-600 mb-5 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <Link 
                  to="/services"
                  className="bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-700 transition-transform transform hover:scale-105 shadow-lg inline-flex items-center"
                >
                  <span>Ver Todos os Serviços</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção FAQ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dúvidas Frequentes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Encontre respostas para as perguntas mais comuns sobre energia solar
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Simplificado */}
      <section id="simulacao" className="py-20 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Não Perca Mais Tempo e Dinheiro!
            </h2>
            <p className="text-xl mb-8">
              A cada mês que passa, você está perdendo a oportunidade de economizar e contribuir para um futuro mais sustentável.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToHeroForm} // Leva o usuário de volta para o formulário principal
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-10 py-5 rounded-lg font-bold text-xl transition-colors shadow-lg"
            >
              QUERO MINHA SIMULAÇÃO GRATUITA!
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
