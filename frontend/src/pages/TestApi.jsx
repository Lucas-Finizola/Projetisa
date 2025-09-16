import React, { useState, useEffect } from 'react';

const STRAPI_API_TOKEN = "b6288aa20ac7a555703be9a71b256ba0e8c9406fb6ade2b5b69ec8310bac82627b198ab8441c08e1069ea7bf5f276c4f11c3824642f4e274ac76d6f6b3349482a67e61908414079552adb9de89d43452bc4be099e09a7b4c27534eb17fbb50814926d94f360dc0583d2bea1c705e6d8327788ca6d00c860f510b7aefbb9422e1";

const TestApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Vamos tentar buscar o serviço com ID 2, exatamente como a página de detalhes faria.
        const response = await fetch('/api/servicos', {
          headers: {
            'Authorization': `Bearer ${STRAPI_API_TOKEN}`
          }
        });

        if (!response.ok) {
          // Se a resposta não for bem-sucedida, vamos capturar o erro para exibi-lo.
          throw new Error(`Erro na Rede: ${response.status} ${response.statusText}`);
        }

        const json = await response.json();
        setData(json);
      } catch (e) {
        console.error("Erro capturado na página de teste:", e);
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Página de Teste de API</h1>
      <p className="mb-4">Esta página está tentando buscar: <strong>/api/servicos/2?populate=*</strong></p>
      
      {loading && <p className="text-blue-600">Carregando dados...</p>}
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          <strong className="font-bold">Ocorreu um Erro!</strong>
          <pre className="mt-2 bg-red-50 p-2 rounded">{error.toString()}</pre>
          <p className="mt-4"><strong>Diagnóstico:</strong> Isso confirma que o backend (Strapi) está retornando um erro (provavelmente 404 Not Found) para esta requisição. A causa mais provável é que o serviço com ID 2, embora exista, não está com o status <strong>Publicado</strong>.</p>
        </div>
      )}

      {data && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
           <strong className="font-bold">Sucesso!</strong>
           <p>O backend respondeu com os seguintes dados:</p>
           <pre className="mt-2 bg-green-50 p-2 rounded text-sm">{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default TestApi;
