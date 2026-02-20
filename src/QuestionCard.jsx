import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


export default function QuestionCard({ data, onNext, index }) {

  const [yesChecked, setYesChecked] = useState(false);
  const [notSureChecked, setNotSureChecked] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [showStillNotSure, setShowStillNotSure] = useState(false);

  const [activeTab, setActiveTab] = useState(
    data.tabs ? Object.keys(data.tabs)[0] : null
  );

  function handleYes() {
    setYesChecked(true);
    setNotSureChecked(false);
    setTimeout(() => {
        onNext(index, "yes");
    }, 1500);
  }

  function handleNotSure() {
    if (!showStillNotSure) {
        setShowStillNotSure(true);
        setExpanded(true);
        setNotSureChecked(false);
        setYesChecked(false);
        return;
    }   
    
    onNext(index, "not_sure");
  }

  function handleConsiderClick() {
    setExpanded(true);
    setNotSureChecked(true);
    setYesChecked(false);
  }

  useEffect(() => {
    setYesChecked(false);
    setNotSureChecked(false);
    setExpanded(false);
    setShowStillNotSure(false);

    if (data.tabs) {
        setActiveTab(Object.keys(data.tabs)[0]);
    }
  }, [data]);


  return (
    <div className="card">


      {/* Question or Statement */}
      <h2>
        {yesChecked ? data.statement : data.question}
      </h2>

      {/* Consider link */}
      {!yesChecked && (
        <div style={{ fontSize: "14px", marginTop: "4px" }}>
          Consider{" "}
          <span
            onClick={handleConsiderClick}
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              color: "#1a73e8"
            }}
          >
            {data.consider.reference} ESV
          </span>
        </div>
      )}


            <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
          >
            <div className="info">

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95     }}
                className="close-button"
                onClick={() => {
                  setNotSureChecked(false);
                  setShowStillNotSure(false);
                  setExpanded(false);

                  if (data.tabs) {
                    setActiveTab(Object.keys(data.tabs)[0]);
                  }
                }}
              >
                X
              </motion.button>

              {/* Consider verse */}
              {data.consider && (
                <div className="consider-verse">
                  <strong>{data.consider.reference} ESV</strong>
                  <p>{data.consider.text}</p>
                </div>
              )}

              {/* Tabs */}
              {data.tabs && (
                <div>

                  {/* Tab buttons */}
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

                  {/* Tab content */}
                  <div className="tab-content">

                    {data.tabs[activeTab]?.points &&
                      data.tabs[activeTab].points.map((point, i) => (
                        <p key={i}>• {point}</p>
                      ))}

                    {data.tabs[activeTab]?.verses &&
                      data.tabs[activeTab].verses.map((verse, i) => (
                        <p key={i}>
                          <strong>{verse.reference}</strong> — {verse.text}
                        </p>
                      ))}

                  </div>

                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Checkboxes */}
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

    </div>
  );
}
