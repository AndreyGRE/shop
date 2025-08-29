import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">О нас</h1>
      
      <div className="max-w-2xl mx-auto">
        <p className="text-lg mb-6">
          Это страница о нашей компании. Здесь мы рассказываем о том, чем занимаемся.
        </p>
        
        <Link href="/" className="inline-block px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors">
          ← Назад на главную
        </Link>
      </div>
    </div>
  );
} 