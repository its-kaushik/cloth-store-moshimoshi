const { 
    addNewProduct, 
    getAllProducts, 
    getProductsByCategory 
} = require("../../models/products.model");
const { createError } = require("../../utils/error");
const { getPagination } = require("../../utils/query") ;

async function httpAddNewProduct (req, res, next) {

    const product = req.body ;

    if( !product.name || !product.mrp || !product.image || !product.category ){
        return res.status(400).json({
            error: "Required Field Missing"
        });
    }

    product.dateAdded = new Date();

    try{

        const savedProduct = await addNewProduct(product);
        return res.status(201).json(savedProduct);
        
    } catch(error){

        next(error) ;

    }
}

async function httpGetAllProducts (req, res, next) {

    const { skip, limit } = getPagination(req.query);

    try {

        const products = await getAllProducts(skip, limit) ;
        return res.status(200).json(products);

    } catch(error){

        next(error);

    }

}

async function httpGetProductsByCategory (req, res, next) {

    const category = req.params.category ;
    const { skip, limit } = getPagination(req.query);

    try {

        const products = await getProductsByCategory(skip, limit, category) ;
        return res.status(200).json(products);

    } catch (error){

        next(error);

    }

}

module.exports = {
    httpAddNewProduct,
    httpGetAllProducts,
    httpGetProductsByCategory
}