import React, { Component } from 'react';
import '../styles/style.css';

class Ipad extends Component {
    render(){
        return(
            <section className="ipad-section">
                <img src="https://www.apple.com/v/home/au/images/heroes/ipad/hero_ipad__rh99l6c3yuyy_largetall_2x.jpg" alt="ipad-image" />
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