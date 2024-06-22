import express from "express";
import productsRouter from './routes/products.routes.js'

const app = express()



app.listen(3000, () => {
    console.log("Server running on port 3000...")
})