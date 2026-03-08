from flask import Flask, request, jsonify
from flask_cors import CORS  
import joblib
import pandas as pd
import numpy as np
import os

# -----------------------------
# Initialize Flask app
# -----------------------------
app = Flask(__name__)
CORS(app)
app.secret_key = os.environ.get("SECRET_KEY", "super-secret-key")

# -----------------------------
# Load trained pipeline model
# -----------------------------
MODEL_PATH = os.environ.get("MODEL_PATH", "house_price_model.pkl")

try:
    model = joblib.load(MODEL_PATH)
except FileNotFoundError:
    print(f"Model file not found at {MODEL_PATH}")
    model = None

# -----------------------------
# Home route
# -----------------------------
@app.route("/")
def home():
    return "House Price Prediction API is running!"

# -----------------------------
# Prediction route
# -----------------------------
@app.route("/predict", methods=["POST"])
def predict():
    if not model:
        return jsonify({"error": "Model not loaded"}), 500

    data = request.json

    try:
        input_df = pd.DataFrame([{
            "longitude": float(data["longitude"]),
            "latitude": float(data["latitude"]),
            "housing_median_age": float(data.get("housing_median_age", 0)),
            "total_rooms": float(data.get("total_rooms", 0)),
            "total_bedrooms": float(data.get("total_bedrooms", np.nan) or np.nan),
            "population": float(data.get("population", 0)),
            "households": float(data.get("households", 0)),
            "median_income": float(data.get("median_income", 0)),
            "ocean_proximity": data.get("ocean_proximity", "INLAND")
        }])

        prediction = model.predict(input_df)[0]

        return jsonify({"predicted_house_value": float(prediction)})

    except KeyError as e:
        return jsonify({"error": f"Missing field: {str(e)}"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# -----------------------------
# Run app
# -----------------------------
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))  # Render sets this automatically
    debug_mode = os.environ.get("FLASK_DEBUG", "False").lower() in ["true", "1"]
    app.run(host="0.0.0.0", port=port, debug=debug_mode)
