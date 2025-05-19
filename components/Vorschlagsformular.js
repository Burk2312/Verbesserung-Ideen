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
        <div className="max-w-3xl mx-auto my-10 p-10 bg-white rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Verbesserungsvorschlag einreichen</h2>
            
            <form onSubmit={handleSubmit}>
                {!anonymous && (
                    <div className="mb-6">
                        <label className="block font-medium text-gray-700 mb-2">Dein Name (optional)</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Dein Name"
                            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                )}

                <div className="mb-6">
                    <label className="block font-medium text-gray-700 mb-2">Dein Vorschlag</label>
                    <textarea
                        value={suggestion}
                        onChange={(e) => setSuggestion(e.target.value)}
                        placeholder="Beschreibe deinen Vorschlag..."
                        rows="6"
                        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex items-center mb-6">
                    <input 
                        type="checkbox" 
                        checked={anonymous} 
                        onChange={(e) => setAnonymous(e.target.checked)} 
                        className="mr-2 w-5 h-5"
                    />
                    <span>Anonym einreichen</span>
                </div>

                <button 
                    type="submit" 
                    className="w-full py-3 bg-blue-600 text-white rounded-md font-bold hover:bg-blue-700 shadow-lg"
                >
                    Vorschlag einreichen
                </button>
            </form>
        </div>
    );
};

export default Vorschlagsformular;
