export default function Summary({ answers, questions }) {

  return (
    <div className="card">

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
