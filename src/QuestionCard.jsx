import { useState, useEffect } from 'react';

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

      {/* Info section */}
      

      {(notSureChecked || expanded) && (
        <div className="info">

          <button
            className="close-button"
            onClick={() => {
            setNotSureChecked(false);
            setShowStillNotSure(false);
            setExpanded(false);
            setActiveTab(Object.keys(data.tabs)[0]);
            }}
            >
            X
          </button>


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
                  <button
                    key={key}
                    className={activeTab === key ? "tab active" : "tab"}
                    onClick={() => setActiveTab(key)}
                  >
                    {tab.title}
                  </button>
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
      )}
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
