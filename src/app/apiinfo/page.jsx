import React from 'react';

export default function ApiInfoPage() {
  return (
    <main className="max-w-xl mx-auto p-6 bg-white rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">Sobre a API</h1>
      <ul className="mb-4 space-y-2 text-base">
        <li><span className="font-semibold">Nome da API:</span> Rick and Morty API</li>
        <li><span className="font-semibold">Documentação:</span> <a href="https://rickandmortyapi.com/documentation" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Acessar documentação</a></li>
        <li><span className="font-semibold">URL base:</span> https://rickandmortyapi.com/api</li>
        <li><span className="font-semibold">Endpoint:</span> /character</li>
        <li><span className="font-semibold">Atributos:</span> id, name, status, species, type, gender, origin, location, image, episode</li>
      </ul>
      <p className="text-gray-600">A Rick and Morty API fornece informações detalhadas sobre personagens, episódios e locais do universo da série animada Rick and Morty. É uma API pública e gratuita, ideal para estudos e demonstrações.</p>
    </main>
  );
}
