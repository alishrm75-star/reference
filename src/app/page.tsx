import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Homi Reference</h1>
        <p className="text-lg text-gray-600 mb-8">
          Каталог HTML-снимков Alteg.io для просмотра и референса дизайна
        </p>
        
        <div className="space-y-4">
          <Link
            href="/ref"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white 
                     font-semibold py-4 px-6 rounded-lg transition-colors 
                     text-center text-lg"
          >
            Открыть каталог Reference UI →
          </Link>
          
          <div className="pt-4 border-t border-gray-200">
            <h2 className="text-sm font-semibold text-gray-700 mb-2">
              Другие разделы:
            </h2>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• API endpoints: <code className="bg-gray-100 px-2 py-1 rounded">/api/*</code></li>
              <li>• Knowledge Base: в разработке</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
  