import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white p-6">
      <div className="max-w-sm mx-auto py-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Rick & Morty CRUD</h1>
          <p className="text-gray-600">Next.js 15</p>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <Image
            src="/Eu.jpg"
            alt="Foto do Vinicius Pereira de Oliveira"
            width={80}
            height={80}
            className="rounded-full mx-auto mb-3 object-cover"
          />
          <h2 className="text-gray-900 font-medium mb-1">Vinicius Pereira de Oliveira</h2>
          <p className="text-sm text-gray-600 mb-1">Turma: 2TDS2</p>
          <p className="text-sm text-gray-600 mb-4">Escola: Senai</p>
          <p className="text-sm italic text-gray-700 mb-6">"A persistência realiza o impossível."</p>
          
          <div className="space-y-3">
            <a href="/apiinfo" className="block w-full py-2 px-4 bg-blue-600 text-white rounded text-center hover:bg-blue-700 transition">
              Sobre a API
            </a>
            <a href="/character" className="block w-full py-2 px-4 bg-green-600 text-white rounded text-center hover:bg-green-700 transition">
              Personagens
            </a>
            <a href="/naoexiste" className="block w-full py-2 px-4 bg-red-600 text-white rounded text-center hover:bg-red-700 transition">
              Página de Erro
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
