import { useEffect, useState } from "react";

import ProductCard from "../ProductCard/ProductCard";

import './ProductList.scss';

const ProductList = () => {

    const [ productsList, setProductsList ] = useState([]);

    useEffect( () => {

        fetch('/products')
            .then( response => response.json() )
            .then( products => setProductsList(products) );

    }, [] )

    return (
        <div className="product-list">
            {
                productsList.map( ( product, i ) => {
                    return <ProductCard product={product} key={i} />
                } )
            }
        </div>
    );
}

export default ProductList;