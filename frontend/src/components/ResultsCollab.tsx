import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

interface ResultsCollabProps {
  title: string;
}

const ResultsCollab: React.FC<ResultsCollabProps> = ({ title }) => {
  return (
    <div className="table-wrapper">
      <h2>Collaborative Filtering</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Recommended Article Title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{title}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultsCollab;
