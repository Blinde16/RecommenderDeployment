import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export interface ResultsWideDeepProps {
  recommendations: string[];
}

const ResultsWideDeep: React.FC<ResultsWideDeepProps> = ({
  recommendations,
}) => {
  return (
    <div className="table-wrapper">
      <h2>Wide & Deep Recommendations</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Recommended Article Title</th>
          </tr>
        </thead>
        <tbody>
          {recommendations.length > 0 ? (
            recommendations.map((title, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{title}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2}>No recommendations available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsWideDeep;
