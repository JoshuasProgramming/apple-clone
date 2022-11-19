import React, { Component } from 'react';
import '../styles/style.css';
import apple from '../images/apple.svg';
import search from '../images/search.svg';
import bag from '../images/bag.svg';

class Header extends Component {
    render(){
        return(
            <nav id='navigation'>  
                <ul>
                    <li><img src={apple} alt="apple-logo"></img></li>
                    <li>Store</li>
                    <li>Mac</li>
                    <li>iPad</li>
                    <li>iPhone</li>
                    <li>Watch</li>
                    <li>AirPods</li>
                    <li>TV & Home</li>
                    <li>Only on Apple</li>
                    <li>Accessories</li>
                    <li>Support</li>
                    <li>< img src={search} alt="apple-search-icon" className="search-icon" ></img></li>
                    <li><img src={bag} alt="apple-bag" /></li>
                </ul>
            </nav>
        )
    }
}

export default Header;
