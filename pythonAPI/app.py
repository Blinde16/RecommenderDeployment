from flask import Flask, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS #Import CORS

app = Flask(__name__)
CORS(app) 

# Content Filtering Recommendation
with open("sav/cosine_sim_model.sav", "rb") as file:
    similarity_matrix = pickle.load(file)

@app.route("/recommend", methods=["GET"])
def recommend():
    content_id = request.args.get("content_id", type=int)

    if content_id is None or content_id >= similarity_matrix.shape[0]:
        return jsonify({"error": "Invalid content_id"}), 400

    similar_articles = np.argsort(similarity_matrix[content_id])[::-1][1:6]

    return jsonify({"recommendations": similar_articles.tolist()})



# Collaborative Filtering Recommendation
with open("sav/article_recommender_model.sav", "rb") as file:
    data = pickle.load(file)

# Map data
df_items = data["df_items"]
item_mapper = data["item_mapper"]
df_items = df_items.reset_index()
df_items["model_index"] = df_items["itemId"].map(item_mapper)


@app.route("/collab_recommend", methods=["GET"])
def collab_recommend():
    content_id = request.args.get("content_id", type=int)

    if content_id is None:
        return jsonify({"error": "Missing content_id"}), 400

    # Filter the DataFrame where model_index equals the content_id
    row = df_items[df_items["model_index"] == content_id]

    if not row.empty:
        # Return JSON with the title
        return jsonify({"title": row.iloc[0]["title"]})

    return jsonify({"error": "Content ID not found"}), 404



if __name__ == "__main__":
    app.run(debug=True)