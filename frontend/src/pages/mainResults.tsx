import './css/homepage.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Results from '../components/Results';
import ResultsCollab from '../components/ResultsCollab';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MainResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const contentId = queryParams.get('contentId');

  const [contentRecommendations, setContentRecommendations] = useState<number[]>([]);
  const [collabTitle, setCollabTitle] = useState<string>('');

  useEffect(() => {
    if (!contentId) return;

    const fetchRecommendations = async () => {
      try {
        // Content filtering API
        const contentResponse = await fetch(`http://127.0.0.1:5000/recommend?content_id=${contentId}`);
        const contentData = await contentResponse.json();
        setContentRecommendations(contentData.recommendations || []);

        // Collaborative filtering API
        const collabResponse = await fetch(`http://127.0.0.1:5000/collab_recommend?content_id=${contentId}`);
        const collabData = await collabResponse.json();
        setCollabTitle(collabData.title || 'No title found');

      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    fetchRecommendations();
  }, [contentId]);

  return (
    <>
      <div className='homeTitle'>
        <h1>Recommendations for Content ID: {contentId}</h1>
      </div>
      <div>
        <Results recommendations={contentRecommendations} />
        <ResultsCollab title={collabTitle} />
      </div>
    </>
  );
};

export default MainResults;
