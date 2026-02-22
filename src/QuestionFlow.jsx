import { useState } from "react";
import { questions } from "./questions";
import QuestionCard from "./QuestionCard";
import Summary from "./Summary";
import { AnimatePresence, motion} from "framer-motion";

function QuestionFlow() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const [answers, setAnswers] = useState({});

  function handleNext(index, answer) {

    setAnswers(prev => ({
      ...prev,
      [index]: answer
    }));

    setCurrentIndex(prev => prev + 1);
  }

  if (currentIndex >= questions.length) {
    return (
      <motion.div
        initial={{ opacity: 0, y:40 }}
        animate={{ opacity: 1, y:0 }}
        exit={{ opacity: 0, y:-40 }}
       >
        <Summary
            answers={answers}
            questions={questions}
        />
      </motion.div>
    );
  }

  return (
    <div className="app">

        <AnimatePresence mode="wait">
            
            <motion.div
                key={currentIndex}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -80, opacity: 0, }}
                transition={{ duration: 0.5 }}
            >
                <QuestionCard
                    data={questions[currentIndex]}
                    index={currentIndex}
                    onNext={handleNext}
                />

                </motion.div>
        </AnimatePresence>
    </div>
  );
}

export default QuestionFlow;
