import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Контакты</h1>
      
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4">Наши контакты</h2>
          <p>Email: example@email.com</p>
          <p>Телефон: +7 (123) 456-78-90</p>
        </div>
        
        <Link href="/" className="inline-block px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors">
          ← Назад на главную
        </Link>
      </div>
    </div>
  ); 
}