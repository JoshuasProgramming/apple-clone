import React, { Component } from 'react';
import '../styles/style.css';

class ProductGrid extends Component {
    render(){
        return(
            <section className="product-grid">
                <div className="products"></div>
                <div className="products"></div>
                <div className="products"></div>
                <div className="products"></div>
            </section>
        )
    }
}

export default ProductGrid;
