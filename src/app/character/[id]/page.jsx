import axios from 'axios';
import Image from 'next/image';
import Header from '@/components/Header';
import Link from 'next/link';

export default async function CharacterDetailPage({ params }) {
  const { id } = params;
  let character = null;
  try {
    const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    character = res.data;
  } catch (error) {
    // Se der erro, pode chamar notFound() do next
    // throw new Error('Personagem não encontrado');
    return (
      <main className="flex flex-col items-center justify-center min-h-screen">
        <Header title="Personagem não encontrado" />
        <Link href="/character" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Voltar à lista</Link>
      </main>
    );
  }

  return (
    <main className="p-8 max-w-xl mx-auto">
      <Header title={character.name} />
      <div className="bg-white rounded shadow p-6 flex flex-col items-center">
        <Image src={character.image} alt={character.name} width={180} height={180} className="rounded-full mb-4" />
        <ul className="mb-4 text-lg">
          <li><strong>Status:</strong> {character.status}</li>
          <li><strong>Espécie:</strong> {character.species}</li>
          <li><strong>Gênero:</strong> {character.gender}</li>
          <li><strong>Origem:</strong> {character.origin?.name}</li>
          <li><strong>Localização:</strong> {character.location?.name}</li>
        </ul>
        <Link href="/character" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Voltar à lista</Link>
      </div>
    </main>
  );
}
