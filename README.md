# product-api
Api to get all product information

For creating a product : http://localhost:8000/products/create Method: POST 
//request format:
product: {
  name: desired_product_name,
  quantity: desired_quantity
}
provide the name and quantity field with their respective values in the body in x-www-form-urlencoded format
************************************************************************************************************
For listing all the products: http://localhost:8000/products/ Method: GET
************************************************************************************************************
For deleting a product : http://localhost:8000/products/:id Method: DELETE
************************************************************************************************************
For updating quantity of a product : http://localhost:8000/products/:id/update_quantity Method: POST
//request format:
product: {
  quantity: desired_quantity
}
provide the quantity field with the value in the body in x-www-form-urlencoded format
