import React, { Component } from 'react';
import '../styles/style.css';
import iphone14 from '../images/iphone14.jpg';

class Iphone14 extends Component {
    render(){
        return(
            <section className="iphone14-section">
                <img src={iphone14} alt="iphone14-image"/>
                <div className="iphone-text-container">
                    <h1>iPhone 14</h1>
                    <p>Big and bigger</p>
                    <div className="links">
                        <a href="#">Learn more <i className='arrow right'></i></a>
                        <a href="#">Buy <i className='arrow right'></i></a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Iphone14;