import pickle
import numpy as np

# Load the similarity matrix
with open("sav/cosine_sim_model.sav", "rb") as file:
    similarity_matrix = pickle.load(file)

def get_similar_articles(content_id, num_recommendations=5):
    """
    Get the most similar articles based on content similarity.

    Parameters:
    - content_id (int): Index of the article in the dataset.
    - num_recommendations (int): Number of recommendations to return.

    Returns:
    - List of recommended article indices.
    """
    if content_id >= similarity_matrix.shape[0]:
        return {"error": "Invalid content_id"}

    # Get similarity scores for this article
    similarity_scores = similarity_matrix[content_id]

    # Get top N most similar article indices (excluding itself)
    similar_articles = np.argsort(similarity_scores)[::-1][1:num_recommendations + 1]

    return similar_articles.tolist()

# Test with an example article ID
example_article_id = 10
print(f"Recommended articles for {example_article_id}: {get_similar_articles(example_article_id)}")
