import React from 'react'
import {
    Link,
} from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = (props) => {
    return (
        <div className={`productContainer${props.isTabletOrMobile ? '-mobile' : ''}`}>
            <img src={props.value.header_img} />
            <h1>{props.value.name}</h1>
            <p>{props.value.description}</p>
            <div className={`productPuttons${props.isTabletOrMobile ? '-mobile' : ''}`}>
                <div>
                    <button onClick={props.handleBuyClick}>Price Rs.{props.value.price}/-</button>
                    {props.value.id != 1 &&
                        <button><Link to={'/product-preview'} state={{ id: props.value.id }}>Demo Preview</Link> </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductCard;