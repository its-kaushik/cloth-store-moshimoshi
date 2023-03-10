import { useEffect, useState } from "react";
import ProductCard2 from "../ProductCard2/ProductCard2";

import './ProductList2.scss';

const ProductList2 = ({ skip, limit, category }) => {

    const [genderProductsList, setGenderProductsList] = useState([]);

    useEffect( () => {

        fetch(`/products/${category}?skip=${skip}&limit=${limit}`)
            .then( response => response.json() )
            .then( products => setGenderProductsList(products) );
    }, [] )

    return (
        <div className="product-list2">
            {
                genderProductsList.map( (product, i) => {
                    return <ProductCard2 product={product} key={i} />
                } )
            }
        </div>
    );
}

export default ProductList2;