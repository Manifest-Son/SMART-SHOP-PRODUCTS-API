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
        res.status(200).json({success: true, data: result.rows});
    } catch {
        res.status(500).json({success:false, message:err.message});
    }
}
)

const getSingleProduct = async (req, res) => 
    {
    const id = req.params.id;
    try{
        const result = await pool.query("SELECT * FROM products WHERE id=$1", [id]);
        if(result.rowCount === 0){
            res.status(404).json({success: false, message: "User not found"})
        } else {
            res.status(200).json({success: true, data: result.rows})
        }
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }}

router.get("/:id", getSingleProduct)

const getCreateProducts = async(req, res) => {
    try{
            const {productThumbnail, productTitle, productDescription, productCost, onOffer} = req.body;
            const newProduct = await pool.query("INSERT INTO products (productThumbnail, productTitle, productDescription, productCost, onOffer) VALUES ($1, $2, $3, $4, $5) RETURNING *",[productThumbnail, productTitle, productDescription, productCost, onOffer]);
            if(!productThumbnail) return res.status(400).json({success: false, message: "Product Thumbnail is required"})
            if(!productTitle) return res.status(400).json({success: false, message: "Product Title is required"})
            if(!productDescription) return res.status(400).json({success: false, message: "Product Description is required"})
            if(!productCost) return res.status(400).json({success: false, message: "Product Cost is required"})
            if(!onOffer) return res.status(400).json({success: false, message: "Offers is required"})
            res.send(newProduct);
            if(newProduct.rowCount === 1 ){
                res.status(201).json({success: true, message: "User created succesfully"})
            } 
    } catch(err){
        res.status(500).json({success: false, message: err.message})
    }
}
router.post("/", getCreateProducts)

function getUpdateProducts(req, res){
    
}
router.patch("/:id", getUpdateProducts)

const getDeleteProducts = async (req, res) => {
        const id = req.params.id;
        try{
            const result = await pool.query("DELETE FROM products WHERE id=$1", [id]);
            if(result.rowCount === 0){
                res.status(404).json({success: false, message: "Invalid User"})
            } else {
                res.status(200).json({success: true, message: "User deleted successfully"})
            }
        } catch (err) {
            res.status(500).json({success: false, message: err.message})
        }}

router.delete("/:id", getDeleteProducts)


export default router;