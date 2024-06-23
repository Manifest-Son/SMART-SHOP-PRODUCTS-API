import {Router} from 'express';
import pool from './db.config.js';
import {getAllProducts, getSingleProduct, postCreateProducts, getUpdateProducts, getDeleteProducts} from '../controllers/product.controller.js'
import { vaildateProducts } from '../middlewares/products.middlewares.js';

const router = Router();


router.get("/", getAllProducts)


router.get("/:id", getSingleProduct)


router.post("/", postCreateProducts,vaildateProducts)

router.patch("/:id", getUpdateProducts)

router.delete("/:id", getDeleteProducts)


export default router;