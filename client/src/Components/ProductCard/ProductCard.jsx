import './ProductCard.scss' ;

const ProductCard = ({product}) => {
    return(
        <div className="product-card">
            <img 
                src={product.image}
                alt="product-image" 
            />
            <div className="card-body">
                <div className="product-name">
                    {product.name}
                </div>
                <div className="prices">
                    <div className="price">
                        $ {(product.mrp-product.discount).toFixed(2)}
                    </div>
                    <div className="orig-price">
                        $ {product.mrp.toFixed(2)}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProductCard ;