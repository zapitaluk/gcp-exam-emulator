import React from 'react';

const Question = ({ question, selectedAnswers, onAnswerChange }) => {
    const isMulti = question.type === 'multi';

    const handleChange = (option) => {
        if (isMulti) {
            const newAnswers = selectedAnswers.includes(option)
                ? selectedAnswers.filter((a) => a !== option)
                : [...selectedAnswers, option];
            onAnswerChange(newAnswers);
        } else {
            onAnswerChange([option]);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
                {question.id}. {question.text}
            </h3>
            <div className="space-y-3">
                {question.options.map((option, index) => (
                    <label
                        key={index}
                        className={`flex items-start p-3 rounded-md border cursor-pointer transition-colors ${selectedAnswers.includes(option)
                                ? 'bg-blue-50 border-blue-200'
                                : 'hover:bg-gray-50 border-gray-200'
                            }`}
                    >
                        <input
                            type={isMulti ? 'checkbox' : 'radio'}
                            name={`question-${question.id}`}
                            value={option}
                            checked={selectedAnswers.includes(option)}
                            onChange={() => handleChange(option)}
                            className={`mt-1 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 ${isMulti ? 'rounded' : 'rounded-full'
                                }`}
                        />
                        <span className="ml-3 text-gray-700">{option}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default Question;
