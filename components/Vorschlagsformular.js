import React, { useState } from 'react';

const Vorschlagsformular = () => {
    const [name, setName] = useState('');
    const [anonymous, setAnonymous] = useState(false);
    const [suggestion, setSuggestion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Vorschlag erfolgreich eingereicht!");
        setName('');
        setAnonymous(false);
        setSuggestion('');
    };

    return (
        <div className="max-w-3xl mx-auto my-10 p-8 bg-white rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Verbesserungsvorschlag einreichen</h2>
            
            <div className="mb-4">
                <label className="block font-medium text-gray-700">Name (optional)</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={anonymous}
                    placeholder="Dein Name"
                    className="w-full p-3 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label className="flex items-center mt-2">
                    <input 
                        type="checkbox" 
                        checked={anonymous} 
                        onChange={(e) => setAnonymous(e.target.checked)} 
                        className="mr-2"
                    />
                    <span>Anonym einreichen</span>
                </label>
            </div>
            
            <div className="mb-4">
                <label className="block font-medium text-gray-700">Beschreibung des Vorschlags</label>
                <textarea
                    value={suggestion}
                    onChange={(e) => setSuggestion(e.target.value)}
                    placeholder="Beschreibe deinen Vorschlag..."
                    className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            
            <button 
                onClick={handleSubmit} 
                className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
                Vorschlag einreichen
            </button>
        </div>
    );
};

export default Vorschlagsformular;
