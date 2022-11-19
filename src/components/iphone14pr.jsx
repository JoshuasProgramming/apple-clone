import React, { Component } from 'react';
import '../styles/style.css';
import iphone14pro from '../images/iphone14pro.jpg';

class Iphone14Pro extends Component {
    render(){
        return(
            <section className="iphone14pro-section">
                <img src={iphone14pro} alt="iphone14pro-image"/>
                <div className="iphone-text-container">
                    <h1>iPhone 14 Pro</h1>
                    <p>Pro. Beyond</p>
                    <div className="links">
                        <a href="#">Learn more <i className='arrow right'></i></a>
                        <a href="#">Buy <i className='arrow right'></i></a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Iphone14Pro;