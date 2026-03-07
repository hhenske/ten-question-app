import "./ProgressBar.css";

export default function ProgressBar({ total, current, onSelect }) {

  return (
    <div className="progress">
      {Array.from({ length: total }).map((_, i) => {

        const isActive = i === current;
        const isComplete = i < current;
        const isClickable = i <= current + 1;

        return (
          <button
            key={i}
            className={`progress__step 
              ${isActive ? "active" : ""} 
              ${isComplete ? "complete" : ""}
            `}
            disabled={!isClickable}
            onClick={() => onSelect(i)}
          >
            {i + 1}
          </button>
        );
      })}
    </div>
  );
}

