# SMART-SHOP PRODUCTS API

In this project, I will be developing a RESTful API using Express.js and PostgreSQL to manage a collection of products. This API will allow clients to perform CRUD (Create, Read, Update, Delete) operations on the products stored in a PostgreSQL database.

## Provided Data

I have a PostgreSQL table with named products containing the following fields:

`productThumbnail`: URL of the product's thumbnail image.

`productTitle`:Title of the product.

`productDescription`: description of the product.

`productCost`: cost of the product.

`onOffer`: a boolean indicating whether the product is on offer or not, true means the products is on offer and false means the product is not on offer.

Here is how I went about it:
## DATABASE CREATION
With the provided files, i used the following commands to create a new database.
I used the Postgres Server (psql).
```create table products (
	id SERIAL PRIMARY KEY,
	productThumbnail VARCHAR(500) NOT NULL,
	productTitle VARCHAR(50) NOT NULL,
	productDescription TEXT NOT NULL,
	productCost VARCHAR(50) NOT NULL,
	onOffer VARCHAR(50) NOT NULL
);
```
I obtained the dummy data. Having the ```products.sql``` file that gives database information in creating a table add an id column in the table using this command ___id SERIAL PRIMARY KEY___
Adding the values and checking whether they have been successful using the ``` "SELECT * FROM products ```; brings to success.
You will need to modify the all products section.

## SEARCHING FOR A PRODUCT
This request will be processed with the `GET` method. A finction is created to introduce a async and await functions to give a limit of processing the data.
`pool.query("SELECT * FROM products WHERE id=$1", [id])`
This command was passed where the `id` will determine the selection of the desired data in search.
A parameter is passed before with this command. `const id = req.params.id;`
## ADDING VALUE IN THE TABLE
I listed the table columns and passed the following function as an asynchronours function.
`pool.query("INSERT INTO products (productThumbnail, productTitle, productDescription, productCost, onOffer) VALUES ($1, $2, $3, $4, $5) RETURNING *",[productThumbnail, productTitle, productDescription, productCost, onOffer]);`  

## UPDATING VALUES IN THE TABLE
In this i updated my index. js gile with the following code.  
`app.use(express.json());` This allows the interaction of the json format in the program.
With this it allows us to pass in arguments that will give decisions on updating the database.
eg: if(productThumbnail){updateProduct = await pool.query("UPDATE products SET productThumbnail=$1 WHERE id=$2"),[productThumbnail, id]}

But before this, you will be required to pass in parameters.
`const id = req.params.id;`


## DELETING A VALUE IN THE TABLE
In deleting a value, the parameter is called through initializing it in the 'id' const `id = req.params.id;`
This filters the data requested in the database to DELETE the users data.
The code:
`pool.query("DELETE FROM products WHERE id=$1", [id])`