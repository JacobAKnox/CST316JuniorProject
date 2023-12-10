'use client'

import React, { useState } from 'react';
import { getGuessCount, max_guesses } from '@/game/game';
import { v4 as uuidv4 } from 'uuid';

function StatisticsModal({ setShowStats }) {
    const [scoreData, setScoreData] = useState(null);
    const [showScores, setShowScores] = useState(false);

    // Generate a session ID using UUID v4
    const sessionID = uuidv4();

    const calculateScore = (guessCount) => {
        return Math.min(guessCount, max_guesses);
    };

    // Function to post the score
    const postScore = (guessCount) => {
        fetch('/api/save_scores', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sessionID, guessCount }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Score saved:', data);
        })
        .catch((error) => {
            console.error('Error saving score:', error);
        });
    };

    // Function to fetch scores
    const fetchScores = () => {
        fetch('/api/get_scores')
            .then(response => response.json())
            .then(data => {
                const guessCount = getGuessCount();
                setScoreData({ ...data[0], guessCount });
                setShowScores(true);

                // Post the score
                postScore(guessCount);
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
                <div className="fixed inset-0 bg-gray-600 bg-opacity-0 overflow-y-auto h-full w-full flex items-end justify-center">
                    <div className="p-5 border w-[400px] shadow-lg rounded-3xl bg-white">
                        <div className="mt-3 text-center">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Your Statistics</h3>
                            <p className='text-gray-800'>
                                {scoreData && scoreData.guessCount >= max_guesses ? 
                                    "Game Over" : 
                                    `Your Score: ${calculateScore(scoreData.guessCount)}`}
                            </p>
                            {/* Add a STAT bar based on scoreData */}
                            <button 
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
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
