import React, { Component } from 'react';
import '../styles/style.css';
import apple from '../images/apple.svg';
import bag from '../images/bag.svg';

class MobileHeader extends Component {
    render(){
        return(
            <div className="mobile-nav">
                <ul>
                    <li className='apple-ham'>
                        <div className="ham-line"></div>
                        <div className="ham-line"></div>
                    </li>
                    <li><img src={apple} alt='apple-logo'></img> </li>
                    <li><img src={bag} alt="apple-bag" /></li>
                </ul>
            </div>
        )
    }
}

export default MobileHeader;