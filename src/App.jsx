import React, { useState } from 'react';
import ExamSelector from './components/ExamSelector';
import ExamRunner from './components/ExamRunner';
import { exams } from './data/exams';

function App() {
    const [currentView, setCurrentView] = useState('selection'); // 'selection' or 'exam'
    const [selectedExam, setSelectedExam] = useState(null);

    const handleExamSelect = (exam) => {
        if (exam.questions.length === 0) {
            alert("This exam content is coming soon!");
            return;
        }
        setSelectedExam(exam);
        setCurrentView('exam');
    };

    const handleExitExam = () => {
        if (confirm("Are you sure you want to exit the exam? All progress will be lost.")) {
            setSelectedExam(null);
            setCurrentView('selection');
        }
    };

    return (
        <div className="App relative min-h-screen">
            {currentView === 'selection' && (
                <ExamSelector exams={exams} onSelect={handleExamSelect} />
            )}
            {currentView === 'exam' && selectedExam && (
                <ExamRunner exam={selectedExam} onExit={handleExitExam} />
            )}
            <div className="fixed bottom-2 right-2 text-xs text-gray-400 bg-white px-2 py-1 rounded shadow-sm">
                v{__APP_VERSION__}
            </div>
        </div>
    );
}

export default App;
