import React from 'react';

const ExamResult = ({ result, onExit }) => {
    const { examName, score, isPass, sectionScores } = result;

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        Exam Results: {examName}
                    </h2>
                    <div className={`mt-4 text-2xl font-bold ${isPass ? 'text-green-600' : 'text-red-600'}`}>
                        {isPass ? 'PASS' : 'FAIL'}
                    </div>
                    <p className="mt-2 text-lg text-gray-600">
                        Overall Score: {score.toFixed(1)}%
                    </p>
                </div>

                <div className="mt-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Sectional Breakdown</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Section Name
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Correct / Total
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Score (%)
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {sectionScores.map((section, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {section.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {section.correct} / {section.total}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <div className="flex items-center">
                                                <span className="mr-2">{section.percentage.toFixed(1)}%</span>
                                                <div className="w-24 bg-gray-200 rounded-full h-2.5">
                                                    <div
                                                        className={`h-2.5 rounded-full ${section.percentage >= 70 ? 'bg-green-500' : 'bg-red-500'
                                                            }`}
                                                        style={{ width: `${section.percentage}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-8 flex justify-center">
                    <button
                        onClick={onExit}
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 md:w-auto md:px-10"
                    >
                        Exit to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ExamResult;
