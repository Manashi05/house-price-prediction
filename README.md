# House Price Prediction using Machine Learning

## Project Overview

This project predicts house prices using **Machine Learning in Python**. The system takes several house features as input (such as area, number of bedrooms, etc.) and predicts the estimated price of the house.

A **Linear Regression model** is used to train the dataset and generate predictions. The trained model is integrated with a **web interface built using HTML, CSS, and JavaScript**, allowing users to input house details and get instant price predictions.

---

## Objectives

* Build a machine learning model to predict house prices.
* Apply data preprocessing and feature scaling.
* Train and evaluate the model using Python.
* Deploy the model with a simple web interface.
* Allow users to interact with the model through a browser.

---

## Technologies Used

### Programming & Libraries

* Python
* NumPy
* Pandas
* Scikit-learn
* Joblib

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Flask (Python Web Framework)

---

##  Project Structure

```
house-price-prediction/
│
├── house_price_model.pkl   # Trained machine learning model
├── requirements.txt        # Required Python libraries
│
├── main
│   └── index.html          # Web interface
    ├── app.py              # Flask application
│   ├── style.css           # Styling for the webpage
│   └── script.js           # JavaScript functionality
│
├── dataset/
│   └── housing.csv         # Dataset used for training
│
└── README.md               # Project documentation
```

---

## ⚙️ How the System Works

1. The dataset containing house features and prices is loaded.
2. Data preprocessing is applied:

   * Handling missing values
   * Feature scaling
   * Encoding categorical variables
3. The dataset is split into **training and testing sets**.
4. A **Linear Regression model** is trained on the training data.
5. The trained model is saved using **Joblib**.
6. A **Flask web application** loads the trained model.
7. Users enter house details through the **HTML form**.
8. JavaScript sends the input data to the Flask backend.
9. The model predicts the house price.
10. The predicted price is displayed on the webpage.

---

##  Model Used

**Linear Regression**

Linear Regression is used to find the relationship between house features and their prices. It predicts house prices based on input variables such as:

* Area
* Number of bedrooms
* Number of bathrooms
* Location features (if available)

---

##  Results

* The model successfully predicts house prices based on the dataset.
* Predictions are reasonably close to actual values.
* The system provides instant results through the web interface.
* The model demonstrates the practical application of machine learning in real estate price estimation.


---

## User Interface

The web interface allows users to:

* Enter house features
* Submit the form
* Receive predicted house price instantly

The interface is designed using **HTML for structure, CSS for styling, and JavaScript for interaction**.

---

##  Future Improvements

* Use advanced models such as Random Forest or Gradient Boosting.
* Improve prediction accuracy with more data.
* Add location-based features using maps.
* Deploy the project online for public use.
* Improve UI/UX design.

---

## Author

**Manashi Ramdam**

---

## 📜 License

This project is created for **educational and learning purposes**.
