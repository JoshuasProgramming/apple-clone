import React, { Component } from 'react';
import '../styles/style.css';

class Iphone14 extends Component {
    render(){
        return(
            <section className="iphone14-section">
                <img src="https://www.apple.com/uk/home/images/heroes/iphone-14/hero_iphone14__fjmsqstr1ceq_largetall_2x.jpg" alt="iphone14-image"/>
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