import React, { useState, useEffect } from 'react';
import Question from './Question';
import ExamResult from './ExamResult';

const ExamRunner = ({ exam, onExit }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(90 * 60); // 90 minutes in seconds
    const [examResult, setExamResult] = useState(null);

    useEffect(() => {
        if (examResult) return; // Stop timer if exam is done

        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, [examResult]);

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    const currentQuestion = exam.questions[currentQuestionIndex];
    const currentAnswers = answers[currentQuestion.id] || [];

    const handleAnswerChange = (newAnswers) => {
        setAnswers({
            ...answers,
            [currentQuestion.id]: newAnswers,
        });
    };

    const handleNext = () => {
        if (currentQuestionIndex < exam.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const calculateScore = () => {
        let totalCorrect = 0;
        const sectionStats = {};

        // Initialize section stats
        exam.questions.forEach(q => {
            if (!sectionStats[q.section]) {
                sectionStats[q.section] = { total: 0, correct: 0, name: q.section };
            }
            sectionStats[q.section].total++;
        });

        exam.questions.forEach((question) => {
            const userAnswers = answers[question.id] || [];
            const correctAnswers = question.correctAnswer;

            // Check for exact match
            let isCorrect = false;
            if (userAnswers.length === correctAnswers.length) {
                isCorrect = userAnswers.every((ans) => correctAnswers.includes(ans));
            }

            if (isCorrect) {
                totalCorrect++;
                if (sectionStats[question.section]) {
                    sectionStats[question.section].correct++;
                }
            }
        });

        const overallScore = (totalCorrect / exam.questions.length) * 100;
        const sectionScores = Object.values(sectionStats).map(stat => ({
            name: stat.name,
            total: stat.total,
            correct: stat.correct,
            percentage: stat.total > 0 ? (stat.correct / stat.total) * 100 : 0
        }));

        return {
            examName: exam.name,
            score: overallScore,
            isPass: overallScore >= 70,
            sectionScores: sectionScores
        };
    };

    const handleSubmit = () => {
        if (confirm("Are you sure you want to submit your exam?")) {
            try {
                const result = calculateScore();
                setExamResult(result);
            } catch (error) {
                console.error("Error submitting exam:", error);
                alert("An error occurred while submitting the exam. Please check the console for details.");
            }
        }
    };

    if (examResult) {
        return <ExamResult result={examResult} onExit={onExit} />;
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col" >
            {/* Header */}
            < header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-10" >
                <div className="flex items-center space-x-4">
                    <img src={`${import.meta.env.BASE_URL}zapital-logo.png`} alt="Zapital Logo" className="h-16 w-auto" />
                    <div>
                        <h1 className="text-xl font-bold text-gray-800">{exam.name}</h1>
                        <p className="text-sm text-gray-500">Webassessor Simulation</p>
                    </div>
                </div>
                <div className="text-lg font-mono font-medium text-gray-700 bg-gray-50 px-4 py-2 rounded border border-gray-200">
                    Time Remaining: {formatTime(timeLeft)}
                </div>
            </header >

            {/* Main Content */}
            < main className="flex-grow container mx-auto px-4 py-8 max-w-4xl" >
                <div className="mb-6 flex justify-between items-center">
                    <span className="text-gray-600 font-medium">
                        Question {currentQuestionIndex + 1} of {exam.questions.length}
                    </span>
                    <div className="w-1/3 bg-gray-200 rounded-full h-2.5">
                        <div
                            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                            style={{ width: `${((currentQuestionIndex + 1) / exam.questions.length) * 100}%` }}
                        ></div>
                    </div>
                </div>

                <Question
                    question={currentQuestion}
                    selectedAnswers={currentAnswers}
                    onAnswerChange={handleAnswerChange}
                />
            </main >

            {/* Footer Navigation */}
            < footer className="bg-white border-t border-gray-200 px-6 py-4 sticky bottom-0" >
                <div className="container mx-auto max-w-4xl flex justify-between items-center">
                    <button
                        onClick={handlePrev}
                        disabled={currentQuestionIndex === 0}
                        className={`px-6 py-2 rounded-md font-medium transition-colors ${currentQuestionIndex === 0
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                            }`}
                    >
                        Previous
                    </button>

                    <div className="space-x-4">
                        <button
                            onClick={onExit}
                            className="px-6 py-2 rounded-md font-medium text-gray-600 hover:text-gray-800"
                        >
                            Exit Exam
                        </button>
                        {currentQuestionIndex === exam.questions.length - 1 ? (
                            <button
                                onClick={handleSubmit}
                                className="px-6 py-2 rounded-md font-medium bg-green-600 text-white hover:bg-green-700 shadow-sm"
                            >
                                Submit Exam
                            </button>
                        ) : (
                            <button
                                onClick={handleNext}
                                className="px-6 py-2 rounded-md font-medium bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                            >
                                Next
                            </button>
                        )}
                    </div>
                </div>
            </footer >
        </div >
    );
};

export default ExamRunner;
