import { useState } from "react";
import { questions } from "./questions";
import QuestionCard from "./QuestionCard";
import Summary from "./Summary";


function QuestionFlow() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState({});

    function goNext() {
        setAnswers(prev => ({
            ...prev, [index]: answer

        }));

        setCurrentIndex(prev => prev + 1);
       }
    }

    if (currentIndex >= questions.length) {
        return <Summary answers={answers} questions={questions} />;
    }

    
    return (
        <div className="app">
            <QuestionCard
                data={questions[currentIndex]}
                index={currentIndex}
                onNext={goNext}
            />
        </div>
    );
}

export default QuestionFlow;