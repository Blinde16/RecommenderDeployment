import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

interface Recommendation {
  model_index: number;
  title: string;
}

interface ResultsCollabProps {
  recommendations: Recommendation[];
}

const ResultsCollab: React.FC<ResultsCollabProps> = ({ recommendations }) => {
  return (
    <div className="table-wrapper">
      <h2>Collaborative Filtering</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Model Index</th>
            <th>Recommended Article Title</th>
          </tr>
        </thead>
        <tbody>
          {recommendations.map((rec) => (
            <tr key={rec.model_index}>
              <td>{rec.model_index}</td>
              <td>{rec.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsCollab;
