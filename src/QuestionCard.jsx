import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

export default function QuestionCard({ data, onNext, onBack, answer, index }) {

  const [selected, setSelected] = useState(answer ?? null);
  const [yesChecked, setYesChecked] = useState(answer === "yes");
  const [notSureChecked, setNotSureChecked] = useState(answer === "not_sure");
  const [expanded, setExpanded] = useState(false);
  const [showStillNotSure, setShowStillNotSure] = useState(false);
  const [activeTab, setActiveTab] = useState(null);


  useEffect(() => {
    setSelected(answer ?? null);
    setYesChecked(answer === "yes");
    setNotSureChecked(answer === "not_sure");
  }, [answer]);

  useEffect(() => {
    setExpanded(false);
    setShowStillNotSure(false);

    if (data.tabs) {
      setActiveTab(Object.keys(data.tabs)[0]);
    } else {
      setActiveTab(null);
    }
  }, [data]);

  function handleYes() {
    setYesChecked(true);
    setNotSureChecked(false);
    setSelected("yes");

    if (showStillNotSure) {
      setExpanded(false);
    }

    setTimeout(() => {
      onNext(index, "yes");
    }, 1200);
  }

  function handleNotSure() {

    if (!showStillNotSure) {
      setShowStillNotSure(true);
      setExpanded(true);
      setNotSureChecked(false);
      setYesChecked(false);
      return;
    }

    setNotSureChecked(true);
    setYesChecked(false);
    setSelected("not_sure");

    onNext(index, "not_sure");
  }

  function handleConsiderClick() {
    setExpanded(true);
    setNotSureChecked(true);
    setYesChecked(false);
  }

  function handleClose() {
    setExpanded(false);
    setShowStillNotSure(false);
    setNotSureChecked(false);

    if (data.tabs) {
      setActiveTab(Object.keys(data.tabs)[0]);
    }
  }

  return (
    <div className="card">

      <h2>
        {yesChecked ? data.statement : data.question}
      </h2>

      {!yesChecked && data.consider && (
        <div className="consider-prompt">
          Consider{" "}
          <span
            onClick={handleConsiderClick}
            className="consider-link"
          >
            {data.consider.reference} ESV
          </span>
        </div>
      )}

      <AnimatePresence>
        {expanded && (
          <motion.div
            className="info"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
          >

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="close-button"
              onClick={handleClose}
            >
              ×
            </motion.button>

            {data.consider && (
              <div className="consider-verse">
                <div className="consider-reference">
                  {data.consider.reference} ESV
                </div>

                <p>{data.consider.text}</p>
              </div>
            )}

            {/* WITH TABS */}
            {data.tabs && (
              <>
                <div className="tab-buttons">
                  {Object.entries(data.tabs).map(([key, tab]) => (
                    <motion.button
                      key={key}
                      className={activeTab === key ? "tab active" : "tab"}
                      onClick={() => setActiveTab(key)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tab.title}
                    </motion.button>
                  ))}
                </div>

                <div className="tab-content">
                  {data.tabs[activeTab]?.points?.map((point, i) => (
                    <p key={i}>• {point}</p>
                  ))}

                  {data.tabs[activeTab]?.verses?.map((verse, i) => (
                    <p key={i}>
                      <strong>{verse.reference}</strong> — {verse.text}
                    </p>
                  ))}
                </div>
              </>
            )}

            {/* WITHOUT TABS */}
            {!data.tabs && data.verses && (
              <div className="tab-content">
                {data.verses.map((verse, i) => (
                  <p key={i}>
                    <strong>{verse.reference}</strong> — {verse.text}
                  </p>
                ))}
              </div>
            )}

          </motion.div>
        )}
      </AnimatePresence>

      <div className="checkboxes">

        <label>
          <input
            type="checkbox"
            checked={yesChecked}
            onChange={handleYes}
          />
          Yes
        </label>

        <label>
          <input
            type="checkbox"
            checked={notSureChecked}
            onChange={handleNotSure}
          />
          {showStillNotSure ? "Still Not Sure" : "Not Sure"}
        </label>

      </div>

     {index > 0 && (
      <div className="nav-buttons">
        <button className="back-button" onClick={onBack}>
            ← Back
          </button>
        </div>
      )}

    </div>
  );
}
