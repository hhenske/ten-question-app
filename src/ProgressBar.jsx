import "./ProgressBar.css";


export default function ProgressBar({ total, current, onSelect }) {


    return (
    <div className="progress">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          className={`progress__step 
            ${i === current ? "active" : ""} 
            ${i < current ? "complete" : ""}
          `}
          onClick={() => onSelect(i)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
