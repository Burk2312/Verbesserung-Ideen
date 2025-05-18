// pages/index.js
import Link from 'next/link';

export default function HomePage() {
    return (
        <div className="container mx-auto py-10 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-4">Willkommen auf der Startseite!</h1>
            <p>Hier kannst du deine Verbesserungsvorschläge einreichen:</p>
            <Link href="/vorschlag">
                <a className="text-blue-500 underline">Zur Vorschlagsseite</a>
            </Link>
        </div>
    );
}
