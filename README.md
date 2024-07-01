Almost all routes have frontend interaction except for:

1. http://localhost:8080/api/productos/:id PUT method
2. http://localhost:8080/api/productos/:id DELETE method
3. http://localhost:8080/api/carrito/:id  DELETE method
4. http://localhost:8080/api/carrito/:id/productos/:id_prod DELETE method

Usage:
1. PUT method: Body -> Raw in JSON:
   {
   "title": "AAAA",
   "price": "22",
   "thumbnail": "a1.com",
   "description": "Hoja con letras",
   "code": "AAAA111",
   "stock": "6"
   }
   Send
2. DELETE method: Body -> none
3. DELETE method: Body -> none
4. DELETE method: Body -> none
