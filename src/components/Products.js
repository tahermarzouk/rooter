import React from 'react';
import { Link, Route } from 'react-router-dom'
import Product from './Product'
const Products = ({ match }) => {

    const productsData = [
        {
            id: 1,
            name: "NIKE Liteforce Blue Sneakers",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
            status: "Available"
        },

        {
            id: 2,
            name: "U.S. POLO ASSN. Slippers",
            description: "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
            status: "Available"
        },

        {
            id: 3,
            name: "ADIDAS Adispree Running Shoes",
            description: "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
            status: "Available"
        },

        {
            id: 4,
            name: "Lee Cooper Mid Sneakers",
            description: "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
            status: "Out of Stock"
        }

    ];

    const LinkList = productsData.map(product => {

        return (
            <li key={product.id}><Link to={`${match.url}/${product.id}`}>{product.name} </Link></li>
        )


    })

    return (<div>



        <div><h3>Products</h3>
            <ul>
                {LinkList}
            </ul>

        </div>

        <Route

            path={`${match.url}/:productId`}

            render={props => <Product data={productsData} {...props} />}

        />



        <Route

            exact
            path={match.url}
            render={() => (
                <span>Please select a product.</span>
            )}



        />


    </div>);
}

export default Products;