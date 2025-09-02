import React from 'react';

export default function ApiInfoPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-lg mx-auto py-8">
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h1 className="text-2xl font-bold mb-6 text-gray-900 text-center">Sobre a API</h1>
          
          <div className="space-y-4 mb-6">
            <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Nome da API</h3>
              <p className="text-gray-700">Rick and Morty API</p>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Documentação</h3>
              <a href="https://rickandmortyapi.com/documentation" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                Acessar documentação oficial
              </a>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">URL Base</h3>
              <code className="text-sm bg-blue-50 text-blue-800 px-3 py-1 rounded font-mono">https://rickandmortyapi.com/api</code>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Endpoint Utilizado</h3>
              <code className="text-sm bg-blue-50 text-blue-800 px-3 py-1 rounded font-mono">/character</code>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Atributos da Resposta</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {['id', 'name', 'status', 'species', 'type', 'gender', 'origin', 'location', 'image', 'episode'].map(attr => (
                  <span key={attr} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded font-mono">{attr}</span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">Sobre a API</h3>
            <p className="text-blue-800 text-sm leading-relaxed">
              A Rick and Morty API fornece informações detalhadas sobre personagens, episódios e locais do universo da série animada Rick and Morty. É uma API pública e gratuita, ideal para estudos e demonstrações de desenvolvimento web.
            </p>
          </div>
          
          <div className="mt-6 text-center">
            <a href="/" className="inline-block py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Voltar à Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
