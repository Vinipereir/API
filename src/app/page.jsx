import Image from 'next/image';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Next.js 15 CRUD - Rick and Morty</h1>
        </div>
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center">
          <Image
            src="/Eu.jpg"
            alt="Foto do Vinicius Pereira de Oliveira"
            width={120}
            height={120}
            className="rounded-full aspect-square mb-4 object-cover border-4 border-gray-200 shadow-sm"
          />
          <h2 className="text-xl font-semibold text-gray-700 mb-1">Turma: <span className="font-bold">2TDS2</span></h2>
          <h3 className="text-base text-gray-500 mb-1">Escola: <span className="font-medium">Senai</span></h3>
          <h3 className="text-base text-gray-500 mb-4">Aluno: <span className="font-medium">Vinicius Pereira de Oliveira</span></h3>
          <blockquote className="italic text-blue-600 border-l-4 border-blue-400 pl-4 mb-6">“A persistência realiza o impossível.”</blockquote>
          <div className="flex flex-col gap-3 w-full mt-2">
            <a href="/apiinfo" className="w-full text-center px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition">Sobre a API</a>
            <a href="/character" className="w-full text-center px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition">Listagem de Personagens</a>
            <a href="/naoexiste" className="w-full text-center px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition">Página de Erro (Not Found)</a>
          </div>
        </div>
      </div>
    </main>
  );
}
