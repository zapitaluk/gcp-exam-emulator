import React from 'react';

const ExamSelector = ({ exams, onSelect }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <div className="flex justify-center mb-6">
                    <img src={`${import.meta.env.BASE_URL}zapital-logo.png`} alt="Zapital Logo" className="h-12 w-auto" />
                </div>
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Select Exam</h1>
                <div className="space-y-4">
                    <label htmlFor="exam-select" className="block text-sm font-medium text-gray-700">
                        Available Exams
                    </label>
                    <select
                        id="exam-select"
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border"
                        onChange={(e) => {
                            const selectedExam = exams.find(exam => exam.id === e.target.value);
                            if (selectedExam) {
                                onSelect(selectedExam);
                            }
                        }}
                        defaultValue=""
                    >
                        <option value="" disabled>Choose an exam...</option>
                        {exams.map((exam) => (
                            <option key={exam.id} value={exam.id}>
                                {exam.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mt-6 text-center text-sm text-gray-500">
                    <p>Select an exam to begin the simulation.</p>
                </div>
            </div>
        </div>
    );
};

export default ExamSelector;
