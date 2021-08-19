import React, {useContext} from 'react'
import { ProductsContext } from '../Global/ProductsContext';
import Banner from './Banner';
import { CartContext } from '../Global/CartContext';

const Products = () =>{

    const {products} = useContext(ProductsContext);
    // const data = useContext(CartContext);
    // console.log("Data variable",data);
    const {dispatch} = useContext(CartContext);

    return(
        // <h1>Products</h1>
        <div className="container">
        <Banner />
        <div className="products">
            {products.map((product) => {
                {/* console.log(product); */}
                return ( //return vì dùng hàm map(()=>return ...) / k dùng return: map(x => x*2)
                    <div className="product" key={product.id}>

                        <div className="product-image">
                            <img src={product.image} alt="not found"/>
                        </div>
                        <div className="product-details">
                            <div className="product-name">
                                {product.name}
                            </div>
                            <div className="product-price">
                                ${product.price}.00
                            </div>
                        </div>
                    

                    <div className="add-to-cart" onClick={() => dispatch({type: 'ADD_TO_CART', id: product.id, product})}>Add to Cart</div>
                    {product.status === 'hot' ? <div className="hot">Hot</div> : ''}
                    {product.status === 'new' ? <div className="new">New</div> : ''}
                    </div>
                )
                
            })}
        </div>
        </div>
    )
}

export default Products;