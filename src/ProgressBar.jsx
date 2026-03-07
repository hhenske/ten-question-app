import "./ProgressBar.css";

export default function ProgressBar({ total, current, onSelect }) {

  return (
    <div className="progress">

      {Array.from({ length: total }).map((_, i) => {

        const state =
          i < current ? "complete" :
          i === current ? "active" :
          "future";

        const clickable = i <= current + 1;

        return (
          <button
            key={i}
            className={`progress__step ${state}`}
            disabled={!clickable}
            onClick={() => onSelect(i)}
          >
            {i + 1}
          </button>
        );
      })}

    </div>
  );
}
