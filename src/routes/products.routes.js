import {Router} from 'express';
import pool from './db.config.js';

const router = Router();

// function getAllProducts(){
//     async (req, res) =>{
//         try{
//             const result = await pool.query("SELECT * FROM products");
//             res.status(200).json(result);
//         } catch {
//             res.status(500).json({success:false, message:err.message})
//         }
//     }
// }
router.get("/", async (req, res) => {
    try{
        const result = await pool.query("SELECT * FROM products");
        res.status(200).json(result.rows);
    } catch {
        res.status(500).json({success:false, message:err.message});
    }
}
)

function getSingleProduct(req, res){
    res.send("This will display all users.")
}
router.get("/:id", getSingleProduct)

function getCreateProducts(req, res){
    res.send("This will display all users.")
}
router.get("", getCreateProducts)

function getUpdateProducts(req, res){
    res.send("This updates the products")
}
router.get("/:id", getUpdateProducts)

function getDeleteProducts(req, res){
    res.send("This deletes the products")
}
router.get("/:id", getDeleteProducts)


export default router;