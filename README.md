To start the project, run the desired script for the desired mode with the chosen persistence: 

dev:mongo = Development with Mongo persistence
dev:mem = Development with in-memory persistence
prod = Production (Mongo)

To run tests, first start the server and then run the test for the persistence selected when starting the server

Endpoints:
/api/products => Get all products
/api/products/:id => Get a product by ID
/api/products/category/:category => Get all products by category (organics/inorganics)
/signup => Register user
/login => log in with a user account
/logout => Log out user
/profile => View user profile
/cart => View user's shopping cart
/checkout => Place an order for the products in the cart
/support => complaints chat

The methods for /api/products can be tested through Postman 