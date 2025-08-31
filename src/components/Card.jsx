import Link from 'next/link';
import Image from 'next/image';

export default function Card({ id, name, image, description }) {
	return (
		<div className="bg-white rounded shadow p-4 flex flex-col items-center">
			<Image src={image} alt={name} width={120} height={120} className="rounded-full mb-2" />
			<h2 className="text-lg font-bold mb-1">{name}</h2>
			<p className="text-gray-600 mb-2">{description}</p>
			<Link href={`/character/${id}`} className="mt-auto px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Detalhes</Link>
		</div>
	);
}
