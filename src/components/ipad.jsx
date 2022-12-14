import React, { Component } from 'react';
import '../styles/style.css';
import ipad from '../images/ipad.jpg';

class Ipad extends Component {
    render(){
        return(
            <section className="ipad-section">
                <img src={ipad} alt="ipad-image" />
                <div className="ipad-text-container">
                    <h1>iPad</h1>
                    <p>Loveable. Drawable. Magical.</p>
                    <div className="links">
                        <a href="#">Learn more <i className='arrow right'></i></a>
                        <a href="#">Buy <i className='arrow right'></i></a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Ipad;