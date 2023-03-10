const productsDatabase = require('../models/products.mongo');

async function addNewProduct (product) {

    const newProduct = new productsDatabase(product);

    try {

        const savedProduct = await newProduct.save() ;
        return savedProduct ;

    } catch(error) {

        console.log(`Error while adding product : ${error}`);

    }
}

async function getAllProducts (skip, limit) {

    try {

        const allProducts = await productsDatabase
            .find({}, { '__v': 0 })
            .sort('-dateAdded')
            .skip(skip)
            .limit(limit);

        return allProducts ;

    } catch(error) {

        console.log(`Error while getting all products : ${error}`);
    
    }

}

async function getProductsByCategory (skip, limit, category) {

    try {

        console.log(`Finding for : ${category}`);

        const products = await productsDatabase
            .find({
                category: `${category}`
            }, { '__v': 0})
            .sort('-dateAdded')
            .skip(skip)
            .limit(limit);

        return products ;

    } catch(error) {

        console.log(`Error while getting products by category : ${error}`);

    }

}

module.exports = {
    addNewProduct,
    getAllProducts,
    getProductsByCategory
}