import pandas as pd
import random

# Load the CSV file
df = pd.read_csv('updated_with_eco_column.csv')

def get_eco_suggestion(product_name):
    # Find the selected product
    selected_product = df[df['productname'] == product_name]
    
    if selected_product.empty:
        return "Product not found in database.", None
    
    # Get product details
    eco_status = selected_product['eco_friendly'].values[0]
    category = selected_product['categorie'].values[0]
    
    if not eco_status:  # If product is not eco-friendly
        # Find eco-friendly alternatives in the same category
        alternatives = df[(df['categorie'] == category) & (df['eco_friendly'] == True)]
        
        if not alternatives.empty:
            # Select a random eco-friendly alternative
            alternative = alternatives.sample(1).iloc[0]
            message = f"The product you selected is not eco-friendly. Consider this eco-friendly alternative: {alternative['productname']} (₹{alternative['price']}). It's made of {alternative['description']}."
            return message, alternative['image url']
        else:
            return "No eco-friendly alternatives found in this category.", None
    else:  # If product is already eco-friendly
        message = f"Great choice! {product_name} is eco-friendly as it's made of {selected_product['description'].values[0]}."
        return message, selected_product['image url'].values[0]

# Run interactively
while True:
    product_name = input("Enter a product name (or type 'exit' to quit): ")
    if product_name.lower() == "exit":
        break

    message, image_url = get_eco_suggestion(product_name)
    print("\n" + message)
    if image_url:
        print(f"Image URL: {image_url}")
    print()
