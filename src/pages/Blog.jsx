import React from 'react';

const Blog = () => {
  const posts = [
    {
      title: "O Futuro da Energia Solar no Brasil",
      date: "10 de Setembro de 2025",
      excerpt: "Descubra as tendências e inovações que estão moldando o mercado de energia solar no Brasil e como a Projetisa está na vanguarda dessa transformação.",
      image: "https://via.placeholder.com/400x250/007bff/ffffff?text=Noticia+1"
    },
    {
      title: "Como a Energia Solar Reduz Seus Custos Operacionais",
      date: "05 de Setembro de 2025",
      excerpt: "Para empresas, a energia solar não é apenas uma escolha sustentável, mas uma estratégia inteligente para cortar despesas e aumentar a lucratividade.",
      image: "https://via.placeholder.com/400x250/28a745/ffffff?text=Noticia+2"
    },
    {
      title: "Mitos e Verdades sobre a Instalação de Painéis Solares",
      date: "01 de Setembro de 2025",
      excerpt: "Desvendamos os principais mitos e apresentamos as verdades sobre a instalação e o funcionamento dos sistemas de energia solar.",
      image: "https://via.placeholder.com/400x250/ffc107/ffffff?text=Noticia+3"
    }
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Últimas Notícias</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm mb-3">{post.date}</p>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <a href="#" className="text-green-600 hover:underline font-semibold">Ler Mais</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

