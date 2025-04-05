import "./css/homepage.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Results from "../components/Results";
import ResultsCollab from "../components/ResultsCollab";
import ResultsWideDeep from "../components/ResultsWideDeep";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const MainResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const contentId = queryParams.get("contentId");
  const [wideDeepRecommendations, setWideDeepRecommendations] = useState<
    string[]
  >([]);

  const [contentRecommendations, setContentRecommendations] = useState<
    number[]
  >([]);
  interface Recommendation {
    model_index: number;
    title: string;
  }

  const [collabRecommendations, setCollabRecommendations] = useState<
    Recommendation[]
  >([]);

  useEffect(() => {
    if (!contentId) return;

    const fetchRecommendations = async () => {
      try {
        // Content filtering API
        const contentResponse = await fetch(
          `http://127.0.0.1:5000/recommend?content_id=${contentId}`
        );
        const contentData = await contentResponse.json();
        setContentRecommendations(contentData.recommendations || []);

        // Collaborative filtering API
        const collabResponse = await fetch(
          `http://127.0.0.1:5000/collab_recommend?content_id=${contentId}`
        );
        const collabData = await collabResponse.json();
        setCollabRecommendations(collabData.recommendations || []);

        //Wide and Deep Azure Endpoint
        const azureUrl =
          "http://c972b158-bf28-4503-ae69-cea4984d13c9.centralus.azurecontainer.io/score";
        const azureKey = "8dLAHlflYopt3m6Jfjpogo30GeIP43BW";

        const azureBody = {
          content_id: Number(contentId), // or however your endpoint expects it
        };

        const azureResponse = await fetch(azureUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${azureKey}`,
          },
          body: JSON.stringify(azureBody),
        });

        const azureData = await azureResponse.json();
        setWideDeepRecommendations(azureData.recommendations || []);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
    };

    fetchRecommendations();
  }, [contentId]);

  return (
    <>
      <div className="homeTitle">
        <h1>Recommendations for Content ID: {contentId}</h1>
      </div>
      <div>
        <Results recommendations={contentRecommendations} />
        <ResultsCollab recommendations={collabRecommendations} />
        <ResultsWideDeep recommendations={wideDeepRecommendations} />
      </div>
    </>
  );
};

export default MainResults;
