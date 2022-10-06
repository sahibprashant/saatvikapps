import React from 'react'
import {
    Link,
} from 'react-router-dom';
import config from '../config';
import '../styles/ProductCard.css';

const ProductCard = (props) => {
    return (
        <div className={`productContainer${props.isTabletOrMobile ? '-mobile' : ''}`}>
            <img src={props.value.header_img} />
            <h1>{props.value.name}</h1>
            {props.type == config.product_type &&
                <div className={`productPrice${props.isTabletOrMobile ? '-mobile' : ''}`}>
                    Costing Range: {props.value.price}
                </div>
            }
            <p>{props.value.description}</p>
            {
                props.type == config.offer_type &&
                <div className={`productButtons${props.isTabletOrMobile ? '-mobile' : ''}`}>
                    <div>
                        <button onClick={props.handleBuyClick}>Just@Rs.{props.value.price}/-</button>
                        {props.value.id != 1 &&
                            <button><Link to={'/product-preview'} state={{ id: props.value.id }}>Demo Preview</Link> </button>
                        }
                    </div>
                </div>

            }
        </div>
    )
}

export default ProductCard;