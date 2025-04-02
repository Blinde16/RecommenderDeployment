from flask import Flask, request, jsonify
import pickle
import numpy as np
from inspect_sav import get_similar_articles
app = Flask(__name__)

# Load the similarity matrix
with open("sav/cosine_sim_model.sav", "rb") as file:
    similarity_matrix = pickle.load(file)

@app.route("/recommend", methods=["GET"])
def recommend():
    content_id = request.args.get("content_id", type=int)

    if content_id is None or content_id >= similarity_matrix.shape[0]:
        return jsonify({"error": "Invalid content_id"}), 400

    # Get top recommendations
    similar_articles = np.argsort(similarity_matrix[content_id])[::-1][1:6]

    return jsonify({"recommendations": similar_articles.tolist()})

if __name__ == "__main__":
    app.run(debug=True)
