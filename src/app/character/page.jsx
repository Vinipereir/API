
"use client";

import axios from 'axios';
import Card from '@/components/Card';
import Header from '@/components/Header';
import Link from 'next/link';
import { Button } from 'antd';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

export default function CharacterListPage() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(res => {
        setCharacters(res.data.results);
        setLoading(false);
      })
      .catch(err => {
        setError('Erro ao buscar personagens');
        setLoading(false);
        toast.error('Erro ao buscar personagens!');
      });
  }, []);

  const handleToast = () => {
    toast.info('Exemplo de feedback com Toastify!');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-100 to-blue-200 p-8 flex flex-col items-center">
      <Header title="Personagens de Rick and Morty" />
      <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-5xl mb-8 gap-4">
        <Button type="primary" onClick={handleToast} className="w-full sm:w-auto">
          Mostrar Toastify
        </Button>
        <Link href="/" className="w-full sm:w-auto">
          <Button type="default" className="bg-white border-blue-600 text-blue-700 hover:bg-blue-50 w-full sm:w-auto">
            Voltar para Home
          </Button>
        </Link>
      </div>
      <div className="w-full max-w-5xl">
        {loading ? (
          <div className="text-center text-lg py-12">Carregando personagens...</div>
        ) : error ? (
          <div className="text-center text-red-600 py-12">{error}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {characters.map((char) => (
              <Card key={char.id} name={char.name} image={char.image} description={char.species} id={char.id} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
