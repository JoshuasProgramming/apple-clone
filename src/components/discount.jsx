import React, { Component } from 'react';
import '../styles/style.css';

class Discount extends Component {
    render(){
        return(
            <section className="holiday-gift-section discount">
                <p>Get 3% Daily Cash back with Apple Card. And pay for your new iPhone over 24 months, interest-free when you choose Apple Card Monthly Installments.*  <a>Learn More <i className="arrow right"></i> </a></p>
            </section>
        )
    }
}

export default Discount;