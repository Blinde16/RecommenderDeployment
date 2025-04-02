import pickle

# Load the .sav file
with open("sav/cosine_sim_model.sav", "rb") as file:
    model_data = pickle.load(file)

# Print type and shape
print(f"Type: {type(model_data)}")

# If it's a NumPy array, check its shape
if hasattr(model_data, "shape"):
    print(f"Shape: {model_data.shape}")

# Print a small portion of the data
print("First few values:\n", model_data[:5] if hasattr(model_data, "__getitem__") else model_data)

