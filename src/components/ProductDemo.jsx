import React, {useEffect} from 'react';
import { useParams, useLocation } from "react-router-dom";
import config from '../config';

const ProductDemo = () => {

    let blogData = useLocation().state;

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (<div >
        <p style={{color : 'teal', marginLeft : '10px', marginRight : '10px', fontSize : '13px', fontFamily : 'regular'}}>This is a demo website page. Actual website will response to mobile & desktop size and will have different design and content as per requirement.</p>
        
        <img style={{width: '100%'}} src={config.offers_list[blogData.id - 1].demo_images[0]} />
    </div>)
}

export default ProductDemo;