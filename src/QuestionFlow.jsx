import { useState } from "react";
import { questions } from "./questions";
import QuestionCard from "./QuestionCard";

function QuestionFlow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    function goNext() {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
       }
    }

    if (currentIndex >= questions.length) {
        return <div className="app">Finished!</div>;
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