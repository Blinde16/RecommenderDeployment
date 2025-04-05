import pickle

# Load the .sav file
with open("sav/article_recommender_model.sav", "rb") as file:
    blob = pickle.load(file)

# X
# knn_model
# item_mapper
# item_inv_mapper
# df_items

import pandas as pd

# Extract your variables
df_items = blob["df_items"]
item_mapper = blob["item_mapper"]
item_inv_mapper = blob["item_inv_mapper"]

df_items = df_items.reset_index()
df_items["model_index"] = df_items["itemId"].map(item_mapper)

# Function to get the title based on model_index
def get_title_by_model_index(model_index):
    row = df_items[df_items["model_index"] == model_index]
    if not row.empty:
        return row.iloc[0]["title"]
    return None

# Example usage
model_index_to_search = 1  # Replace with the desired model_index
title = get_title_by_model_index(model_index_to_search)
print(f"Title for model_index {model_index_to_search}: {title}")