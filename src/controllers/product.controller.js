export const getAllProducts = async (req, res) => {
    async (req, res) =>{
        try{
            const result = await pool.query("SELECT * FROM products");
            res.status(200).json(result);
        } catch {
            res.status(500).json({success:false, message:err.message})
        }
    }
}

export const getSingleProduct = async (req, res) => 
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

export const postCreateProducts = async(req, res, next) => {
        try{
                const {productThumbnail, productTitle, productDescription, productCost, onOffer} = req.body;
                const newProduct = await pool.query("INSERT INTO products (productThumbnail, productTitle, productDescription, productCost, onOffer) VALUES ($1, $2, $3, $4, $5) RETURNING *",[productThumbnail, productTitle, productDescription, productCost, onOffer]);
                
                
        } catch(err){
            res.status(500).json({success: false, message: err.message})
        }
    }

export const getUpdateProducts = async (req, res) => {
        const id = req.params.id;
            const {productThumbnail, productTitle, productDescription, productCost, onOffer} = req.body;
        try{
            let updateProduct;
            if(productThumbnail){updateProduct = await pool.query("UPDATE products SET productThumbnail=$1 WHERE id=$2"),[productThumbnail, id]}
            if(productTitle){updateProduct = await pool.query("UPDATE products SET productTitle=$1 WHERE id=$2"),[productTitle, id]}
            if(productDescription){updateProduct = await pool.query("UPDATE products SET productDescription=$1 WHERE id=$2"),[productThumbnail, id]}
            if(productCost){updateProduct = await pool.query("UPDATE products SET productCost=$1 WHERE id=$2"),[productCost, id]}
            if(onOffer){updateProduct = await pool.query("UPDATE products SET onOffer=$1 WHERE id=$2"),[onOffer, id]}
            if (updateProduct.rowCount === 1){
                res.status(200).json({success: true, message: "User updated successfully"})
            } else {
                res.status(404).json("Invalid User")
            }
        } catch(err){
            res.status(500).json({success: false, message: err.message})
        }
    }

export const getDeleteProducts = async (req, res) => {
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