import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white p-6">
      <div className="max-w-sm mx-auto py-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Rick & Morty CRUD</h1>
          <p className="text-gray-600">Next.js 15</p>
        </div>
        <div className="bg-white rounded-3xl shadow-xl p-10 flex flex-col items-center border border-gray-100">
          <Image
            src="/Eu.jpg"
            alt="Foto do Vinicius Pereira de Oliveira"
            width={120}
            height={120}
            className="rounded-full aspect-square mb-4 object-cover border-4 border-blue-100 shadow-lg"
          />
          <h2 className="text-lg font-bold text-gray-800 mb-1">Turma: <span className="font-extrabold">2TDS2</span></h2>
          <h3 className="text-base text-gray-500 mb-1">Escola: <span className="font-semibold">Senai</span></h3>
          <h3 className="text-base text-gray-500 mb-4">Aluno: <span className="font-semibold">Vinicius Pereira de Oliveira</span></h3>
          <blockquote className="italic text-blue-700 border-l-4 border-blue-300 pl-4 mb-6 bg-blue-50 w-full text-center rounded">“A persistência realiza o impossível.”</blockquote>
          <div className="flex flex-col gap-3 w-full mt-2">
            <a href="/apiinfo" className="w-full text-center px-4 py-2 bg-blue-500/90 text-white rounded-xl font-semibold shadow hover:bg-blue-600 transition">Sobre a API</a>
            <a href="/character" className="w-full text-center px-4 py-2 bg-green-500/90 text-white rounded-xl font-semibold shadow hover:bg-green-600 transition">Listagem de Personagens</a>
            <a href="/naoexiste" className="w-full text-center px-4 py-2 bg-red-500/90 text-white rounded-xl font-semibold shadow hover:bg-red-600 transition">Página de Erro (Not Found)</a>
          </div>
        </div>
      </div>
    </main>
  );
}
