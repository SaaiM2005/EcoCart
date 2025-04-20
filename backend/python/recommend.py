from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

df = pd.read_csv('updated_with_eco_column.csv')  # Replace with your CSV path

@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.get_json()
    product_name = data.get('product_name')
    
    # Search for the product in the dataframe
    selected_product = df[df['productname'] == product_name]

    # If product not found, return an error message
    if selected_product.empty:
        return jsonify({'message': "Product not found in database.", 'image_url': None})
    
    # Extract eco-friendliness status and category for the selected product
    eco_status = selected_product['eco_friendly'].values[0]
    category = selected_product['categorie'].values[0]
    
    # If the product is not eco-friendly, suggest eco-friendly alternatives
    if not eco_status:
        alternatives = df[(df['categorie'] == category) & (df['eco_friendly'] == True)]
        if not alternatives.empty:
            alternative = alternatives.sample(1).iloc[0]
            message = f"The product you selected is not eco-friendly. Consider this eco-friendly alternative: {alternative['productname']} (₹{alternative['price']}). It's made of {alternative['description']}."
            return jsonify({'message': message, 'image_url': alternative['image url']})
        else:
            return jsonify({'message': "No eco-friendly alternatives found in this category.", 'image_url': None})
    else:
        message = f"Great choice! {product_name} is eco-friendly as it's made of {selected_product['description'].values[0]}."
        return jsonify({'message': message, 'image_url': selected_product['image url'].values[0]})

if __name__ == '__main__':
    app.run(debug=True, port=5001)