import React from 'react';

function StatisticsModal({ setShowStats, score }) {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-20 left-0 ml-5 p-5 border w-96 shadow-lg rounded-md bg-white">
                <div className="mt-3 text-center">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Your Statistics</h3>
                    <p>Your Score: {score}</p>
                    {/* Here I will add a STAT bar when I get a chance*/}
                    <button className="bg-red-500 hover:bg-red-700 text-black font-bold py-2 px-4 rounded mt-4"
                            onClick={() => setShowStats(false)}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}


export default StatisticsModal;
