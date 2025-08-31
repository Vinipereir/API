export default function Header({ title }) {
  return (
    <header className="w-full py-4 bg-blue-700 text-white text-center text-2xl font-semibold mb-8 shadow">
      {title}
    </header>
  );
}
