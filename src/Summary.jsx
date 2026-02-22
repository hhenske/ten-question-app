export default function Summary({ answers, questions }) {

  const finalAnswer = answers[9];
  const isYes = finalAnswer === "yes";
  const isNotSure = finalAnswer === "not_sure";


  return (
    <div className="card">

      {/* Conditional message section */}

      <div style={{ marginBottom: "24px" }}>
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

            <p style={{ marginTop: "16px" }}>
              Please use the form below to let us know you have begun your journey to follow Jesus
            </p>
          </>
        )}

        {isNotSure && (
          <>
            <h2>That's okay!</h2>
            <p>Thank you for completing this questionnaire. Below is a summary of your answers to help you further explore your questions.</p>
            <p>Please don't hesitate to use the form below to reach out with your questions.</p>
          </>)}
      </div>

      {/* Summary table */}
      
      <h2>Your Responses</h2>

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

    </div>
  );
}
