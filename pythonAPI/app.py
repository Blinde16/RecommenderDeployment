import pickle

# Replace 'your_model.sav' with the actual filename
sav_file = "sav/cosine_sim_model.sav"

# Load the .sav file
with open(sav_file, "rb") as file:
    model_data = pickle.load(file)

# Print out the type of the loaded object
print(f"Loaded object type: {type(model_data)}\n")

# If it's a dictionary, print the keys
if isinstance(model_data, dict):
    print("Keys in the .sav file:")
    for key in model_data.keys():
        print(f" - {key}")
    
    # Print an example value for the first key
    first_key = next(iter(model_data))
    print(f"\nExample data for key '{first_key}':")
    print(model_data[first_key])

# If it's a scikit-learn model or another object, print its attributes
else:
    print("Attributes of the loaded object:")
    print(dir(model_data))
