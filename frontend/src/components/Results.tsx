import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

interface ResultsProps {
  recommendations: number[];
}

function Results({ recommendations }: ResultsProps) {
  return (
    <div className="tables-container">
      <div className="table-wrapper">
        <h2>Content Filtering</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Recommended Article IDs</th>
            </tr>
          </thead>
          <tbody>
            {recommendations.map((id, index) => (
              <tr key={index}>
                <td>{id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Results;
