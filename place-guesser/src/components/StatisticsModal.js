'use client'

import React, { useState } from 'react';

function StatisticsModal({ setShowStats }) {
    const [scoreData, setScoreData] = useState(null);
    const [showScores, setShowScores] = useState(false);

    const fetchScores = () => {
        fetch('/api/get_scores') 
            .then(response => response.json())
            .then(data => {
                setScoreData(data[0]);
                setShowScores(true);
            })
            .catch(error => {
                console.error('Error fetching scores:', error);
            });
    };

    return (
        <div>
            <button 
                onClick={fetchScores}
                className="bg-indigo-700 hover:bg-indigo-800 text-white p-2 rounded-3xl transition">
                Show Stats
            </button>
            {showScores && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-start">
                    <div className="ml-5 p-5 border w-[600px] shadow-lg rounded-3xl bg-white">
                        <div className="mt-3 text-center">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Your Statistics</h3>
                            <p className='text-gray-900'>Your Score: {scoreData ? scoreData.guessCount : 'Loading...'}</p>
                            {/* Here you can add a STAT bar based on scoreData */}
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
                                    onClick={() => setShowScores(false)}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default StatisticsModal;
