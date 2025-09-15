import React, { useState, useEffect } from 'react';

const TestApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('Iniciando...');

  // ------------------------------------------------------------------
  // PASSO 1: Insira seu Token da API Strapi aqui
  // ------------------------------------------------------------------
  const STRAPI_API_TOKEN = "63141beee697e7f10768e46ab7c1dc1703c7e550230ade5c63e8c91a66fbebf4dd358806a65d04308fe24e58f627f8ea4e2629e0e89b75cf2b85944795180c5ef4981424d059454f0b7b39bd19b682c5d9531d6e3cbaa3bcb9a1f44ef3cee45bbbe7c2be21b1c082e6233ced8dc21125bbe0018db29e78faf389573ab16d0149"; // Substitua por seu token real
  // ------------------------------------------------------------------

  useEffect(() => {
    const runTest = async () => {
      // ATUALIZADO: Usando o caminho do proxy
      const API_URL = '/api/servicos';
      
      setStatus(`Tentando buscar dados de: ${API_URL} (via proxy)`);
      
      if (STRAPI_API_TOKEN === "SEU_TOKEN_AQUI") {
        setStatus("ERRO DE CONFIGURAÇÃO: Por favor, insira seu token da API do Strapi no arquivo src/pages/TestApi.jsx");
        setError("Token não configurado.");
        setLoading(false);
        return;
      }

      try {
        const headers = {
          'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
        };

        setStatus("Enviando requisição com Token de Autorização via proxy...");
        const response = await fetch(API_URL, { headers });
        
        setStatus(`Recebida resposta com status: ${response.status}`);

        if (!response.ok) {
          const errorBody = await response.text();
          throw new Error(`Falha na requisição. Status: ${response.status}. Resposta: ${errorBody}`);
        }

        const jsonResponse = await response.json();
        setData(jsonResponse);
        setStatus("Sucesso! Os dados foram recebidos e processados via proxy.");

      } catch (e) {
        console.error('ERRO NO TESTE DA API:', e);
        setError(e.message);
        setStatus("Ocorreu um erro durante o teste.");
      } finally {
        setLoading(false);
      }
    };

    runTest();
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', lineHeight: '1.6' }}>
      <h1 style={{ borderBottom: '2px solid #eee', paddingBottom: '1rem' }}>Página de Teste da API Strapi</h1>
      <p><b>Status do Teste:</b> {status}</p>
      
      {loading && <p>Aguardando resultado...</p>}
      
      {error && (
        <div style={{ marginTop: '1rem' }}>
          <h2 style={{ color: 'red' }}>Resultado: FALHA</h2>
          <p>A API não pôde ser contatada ou retornou um erro.</p>
          <pre style={{ color: 'red', backgroundColor: '#ffe0e0', padding: '1rem', borderRadius: '5px', whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
            {error}
          </pre>
          <p style={{marginTop: '1rem'}}><b>Próximos Passos:</b> Verifique se o token inserido está correto e se ele tem as permissões necessárias no Strapi.</p>
        </div>
      )}
      
      {data && (
        <div style={{ marginTop: '1rem' }}>
          <h2 style={{ color: 'green' }}>Resultado: SUCESSO</h2>
          <p>Os dados foram buscados com sucesso do backend.</p>
          <pre style={{ backgroundColor: '#e0f2e0', padding: '1rem', borderRadius: '5px', maxHeight: '400px', overflowY: 'auto' }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default TestApi;
