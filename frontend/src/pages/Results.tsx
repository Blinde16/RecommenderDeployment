import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Results() {
    const [recommendations, setRecommendations] = useState<number[]>([]);
    const location = useLocation();

    // Extract contentId from query params
    const searchParams = new URLSearchParams(location.search);
    const contentId = searchParams.get('contentId') || 'defaultContentId'; // Replace 'defaultContentId' with a valid fallback if needed.

    useEffect(() => {
        if (!contentId) return;

        const fetchRecommendations = async () => {
            try {
                console.log("Fetching recommendations for contentId:", contentId);
                const response = await fetch(`http://127.0.0.1:5000/recommend?content_id=${contentId}`);
                const data = await response.json();
                console.log("API Response:", data);
                if (!Array.isArray(data.recommendations)) {
                    console.error("Invalid API response format. Expected an array of recommendations.");
                    return;
                }
                // Ensure the response contains an array of IDs
                setRecommendations(data.recommendations || []);
            } catch (error) {
                console.error("Error fetching recommendations:", error);
            }
        };

        fetchRecommendations();
    }, [contentId]);

    return (
        <div className="container mt-4">
            <h1>News Recommendations</h1>
            <h2>For Content ID: {contentId}</h2>
            
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Recommended Article IDs</th>
                    </tr>
                </thead>
                <tbody>
                    {recommendations.map((id) => (
                        <tr key={id}>
                            <td>{id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Results;
