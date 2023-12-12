'use client'

import React, { useState } from 'react';
import Cookies from 'js-cookie'
import { getGuessCount, max_guesses } from '@/game/game';

function StatisticsModal({ setShowStats }) {
    const [scoreData, setScoreData] = useState([]);
    const [showScores, setShowScores] = useState(false);

    function updateStatisticsModal(data) { 
      setScoreData([...scoreData, data])
    }

    const calculateScore = (guessCount) => {
        return Math.min(guessCount, max_guesses);
    };

    // Function to fetch scores
    async function fetchScores() {
        let userid = Cookies.get('userid')
        let userscores_list = []
        let todays_score = 0
        
        if (userid) {
          const response = await fetch(`/api/get_scores?userid=${userid}`, {
            method: 'GET'
          })
        
          if (!response.ok) {
            alert('failed to fetch scores')
          }
           
           const response_data = await response.json()
           userscores_list = response_data.userscores
        }
        

      console.log('userscores_list = ')
      console.log(userscores_list)
      if (userscores_list.length > 0) {
        todays_score = userscores_list[userscores_list.length-1].score
      }

      console.log('todays_score = ' + todays_score)
      updateStatisticsModal(todays_score) 
      setShowScores(true)
    };

    return (
        <div>
            <button 
                onClick={fetchScores}
                className="bg-indigo-700 hover:bg-indigo-800 text-white p-2 rounded-3xl transition">
                Show Stats
            </button>
            {showScores && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-0 overflow-y-auto h-full w-full flex items-end justify-center z-[5000]">
                    <div className="p-5 border w-[400px] shadow-lg rounded-3xl bg-white">
                        <div className="mt-3 text-center">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Your Statistics</h3>
                            <p className='text-gray-800'>
                                {scoreData && scoreData.guessCount >= max_guesses ? 
                                    "Game Over" : 
                                    `Your Score: ${calculateScore(scoreData[0])}`}
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
