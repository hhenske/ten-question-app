import { useState } from "react"; // ALSO: fix capitalization here

export default function Summary({ answers, questions, onRestart }) {

  const finalAnswer = answers[9];
  const isYes = finalAnswer === "yes";
  const isNotSure = finalAnswer === "not_sure";
  const [showWhy, setShowWhy] = useState(false);

  
  return (
    <div className="card">

      {/* Conditional message section */}
      <div className="summary-message">
        {isYes && (
          <>
            <h2>That's fantastic!</h2>
            <p>
              Here are some next steps to get you started on your Christian walk:
            </p>
            <ul>
              <li>
                <a href="https://www.churchfinder.com" target="_blank" rel="noopener noreferrer">
                  Find a church community to connect with
                </a>
              </li>
              <li>
                <a href="https://join.bsfinternational.org/find-in-person-group" target="_blank" rel="noopener noreferrer">
                  Find a Bible study or discipleship group to join
                </a>
              </li>
              <li>
                <a href="https://biblehub.com/q/what_should_a_new_christian_do_next.htm" target="_blank" rel="noopener noreferrer">
                  What should a new Christian do next?
                </a>
              </li>
            </ul>

            <p className="encouragement">
              Please use the <a href="#contact-form">form below</a> to let us know you have begun your journey to follow Jesus
            </p>
          </>
        )}

        {isNotSure && (
          <>
            <h2>That's okay!</h2>
            <p>
              Thank you for completing this questionnaire. Below is a summary of your answers to help you further explore your questions.
            </p>
            <p>
              Please don't hesitate to use the <a href="#contact-form">form below</a> to reach out with your questions.
            </p>
          </>
        )}
      </div>

      {/* Restart + Header */}
      <div className="summary-header">
        <h2>Your Responses</h2>
        <button onClick={onRestart} className="restart-button">
          Start Over
        </button>
      </div>

      {/* Summary table */}
      <table className="summary-table">
        <thead>
          <tr>
            <th>Statement</th>
            <th>Yes</th>
            <th>Still Not Sure</th>
          </tr>
        </thead>

        <tbody>
          {questions.map((q, i) => {
            const answer = answers[i];

            return (
              <tr key={i}>
                <td>{q.statement}</td>
                <td style={{ textAlign: "center" }}>
                  {answer === "yes" ? "✓" : ""}
                </td>
                <td style={{ textAlign: "center" }}>
                  {answer === "not_sure" ? "✓" : ""}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Why connect Toggle */}
      <div className="encouragement">
        <span
          onClick={() => setShowWhy(!showWhy)}
          className="why-toggle"
        >
          Why connect?
        </span>

        {showWhy && (
          <div className="why-connect">
            <p>
              Christianity is not meant to be done alone. Scripture encourages believers to grow together,
              ask questions, and support one another.
            </p>
            <p>
              We want to encourage you to let us know if you've decided to follow Jesus,
              so we can pray for you and help you with any questions you may still have.
              But also, if you have questions or concerns preventing you from wanting to follow Jesus,
              we'd love to discuss them with you.
            </p>
          </div>
        )}
      </div>

            {/* Contact Form */}
      <div style={{ marginTop: "32px" }}>
        <div id="contact-form" className="contact-section">
          <h3>Contact Us</h3>

          <form
            action="https://formsubmit.co/hcover333@gmail.com"
            method="POST"
          >
            {/* Prevent captcha */}
            <input type="hidden" name="_captcha" value="false" />

            {/* Pass final answer */}
            <input
              type="hidden"
              name="Final Response"
              value={isYes ? "Yes" : "Still Not Sure"}
            />

            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              required
              className="form-input"
            />

            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              required
              className="form-input"
            />

            <textarea
              name="Questions"
              placeholder="Your questions..."
              rows="4"
              className="form-input"
            />

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}
