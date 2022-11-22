import React, { Component } from 'react';
import '../styles/style.css';
import Mp from '../images/macbookPro.svg';

class ProductBanner extends Component {
    render(){

        const products = ["item0", "item1", "item2", "item3", "item4"];

        return(
            <section className='product-banner'>
                
                <ul>
                    {products.map((value, key) => {
                        return <li key={key}>{value}</li>
                    })}
                </ul>
                

            </section>
        )
    }
}

export default ProductBanner;
