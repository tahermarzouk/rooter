import React from 'react';

const Product = ({ match, data }) => {

    const product = data.find(el => el.id === Number(match.params.productId))
    let productData;


    if (product)

        productData = (
            <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <hr />
                <h6>{product.status}</h6>
            </div>
        )

    else productData = <span>Product missing</span>


    return (<div>{productData}</div>);
}

export default Product;