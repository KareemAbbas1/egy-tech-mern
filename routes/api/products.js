/* Start Imports */

import express from "express";
import { products } from "../../_Data.js";

/* End Imports */


const router = express.Router();



// Route: GET request -> api/products
// Description: Get All Products
// Access: Public
router.get('/', async (req, res) => {
    res.json(products)
    // .catch(error => res.status(404).json({message: `Faild to get all products, ${error.message}` }))
});


export default router;