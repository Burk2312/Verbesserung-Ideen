import React, { useState } from 'react';

const Vorschlagsformular = () => {
    const [name, setName] = useState('');
    const [anonymous, setAnonymous] = useState(false);
    const [impactAreas, setImpactAreas] = useState({
        productivity: '',
        cost: '',
        quality: '',
        environment: ''
    });
    const [suggestion, setSuggestion] = useState('');

    const impactLevels = ["sehr positiv", "positiv", "etwas positiv", "neutral", "etwas negativ", "negativ", "sehr negativ"];

    const handleImpactChange = (area, value) => {
        setImpactAreas((prev) => ({ ...prev, [area]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name: anonymous ? "Anonym" : name, impactAreas, suggestion });
        alert("Vorschlag erfolgreich eingereicht!");
        setName('');
        setAnonymous(false);
        setImpactAreas({ productivity: '', cost: '', quality: '', environment: '' });
        setSuggestion('');
    };

    return (
        <div className="max-w-3xl mx-auto my-10 p-8 shadow-lg rounded-2xl bg-white">
            <h2 className="text-2xl font-bold mb-6">Verbesserungsvorschlag einreichen</h2>
            <div className="mb-4">
                <label>Name (optional)</label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={anonymous}
                    placeholder="Dein Name"
                    className="w-full p-2 border rounded mb-2"
                />
                <label className="flex items-center mt-2">
                    <input type="checkbox" checked={anonymous} onChange={(e) => setAnonymous(e.target.checked)} />
                    <span className="ml-2">Anonym einreichen</span>
                </label>
            </div>
            <div className="mb-4">
                <label>Beschreibung des Vorschlags</label>
                <textarea
                    value={suggestion}
                    onChange={(e) => setSuggestion(e.target.value)}
                    placeholder="Beschreibe deinen Vorschlag..."
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                {Object.keys(impactAreas).map((area) => (
                    <div key={area} className="mb-6">
                        <label className="capitalize mb-2">Auswirkung auf {area}</label>
                        <div>
                            {impactLevels.map((level) => (
                                <label key={level} className="flex items-center mb-2">
                                    <input
                                        type="radio"
                                        value={level}
                                        checked={impactAreas[area] === level}
                                        onChange={() => handleImpactChange(area, level)}
                                        className="mr-2"
                                    />
                                    {level}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={handleSubmit} className="w-full p-3 bg-blue-500 text-white rounded">
                Vorschlag einreichen
            </button>
        </div>
    );
};

export default Vorschlagsformular;

