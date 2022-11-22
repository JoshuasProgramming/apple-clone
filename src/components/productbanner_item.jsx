import React, { Component } from 'react';
import '../styles/style.css';

//props is essentially a function argument 
//We're getting parameters/arguments from the 'productbanner.jsx's 'products' object
//We'll use the props keyword alongside either the image, alt or the title properties
//This is make adding images and text to the product much more efficient and easy

const ProductBanner_Item = (props) => {
    return (
        <div className="product">
            <img src={props.image} alt={props.alt} />
            <p>{props.title}</p>
        </div>
    )
}

export default ProductBanner_Item;