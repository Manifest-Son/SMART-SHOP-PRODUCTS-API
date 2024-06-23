# SMART-SHOP PRODUCTS API
In this project, I will be developing a RESTful API using Express.js and PostgreSQL to manage a collection of products. This API will allow clients to perform CRUD (Create, Read, Update, Delete) operations on the products stored in a PostgreSQL database. 


## Provided Data
I have a PostgreSQL table with named products containing the following fields:

```productThumbnail```: URL of the product's thumbnail image.

```productTitle```:Title of the product.

```productDescription```: description of the product.

```productCost```: cost of the product.

```onOffer```: a boolean indicating whether the product is on offer or not, true means the products is on offer and false means the product is not on offer.

Here is how I went about it:

Connecting my table with the Postgress Server
Get the dummy data. Having the products.sql file that gives database information in creating a table.
Adding the values and checking whweter thay have been successful using the "SELECT * FROM pRODDUCTS; brings to success.
