document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("predictionForm");
    const resultBox = document.getElementById("resultBox");
    const resultValue = document.getElementById("resultValue");
    const loadSampleBtn = document.getElementById("loadSampleBtn");

    // Load sample data
    loadSampleBtn.addEventListener("click", () => {
        document.getElementById("longitude").value = -122.23;
        document.getElementById("latitude").value = 37.88;
        document.getElementById("housing_median_age").value = 41;
        document.getElementById("total_rooms").value = 880;
        document.getElementById("total_bedrooms").value = 129;
        document.getElementById("population").value = 322;
        document.getElementById("households").value = 126;
        document.getElementById("median_income").value = 8.32;
        document.getElementById("ocean_proximity").value = "NEAR BAY";
    });

    // Handle form submit
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Gather input values
        const payload = {
            longitude: parseFloat(document.getElementById("longitude").value),
            latitude: parseFloat(document.getElementById("latitude").value),
            housing_median_age: parseFloat(document.getElementById("housing_median_age").value),
            total_rooms: parseFloat(document.getElementById("total_rooms").value),
            total_bedrooms: document.getElementById("total_bedrooms").value
                ? parseFloat(document.getElementById("total_bedrooms").value)
                : null,
            population: parseFloat(document.getElementById("population").value),
            households: parseFloat(document.getElementById("households").value),
            median_income: parseFloat(document.getElementById("median_income").value),
            ocean_proximity: document.getElementById("ocean_proximity").value
        };

        try {
            // Send data to local Flask backend
            const response = await fetch(`${BACKEND_URL}/predict`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (response.ok) {
                resultValue.innerText = `$${data.predicted_house_value.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
                resultBox.style.display = "block";
            } else {
                resultValue.innerText = `Error: ${data.error}`;
                resultBox.style.display = "block";
            }

        } catch (err) {
            resultValue.innerText = `Error: ${err.message}`;
            resultBox.style.display = "block";
        }
    });
});