import React, { Component } from 'react';
import '../styles/style.css';
import apple from '../images/apple.svg';
import search from '../images/search.svg';
import bag from '../images/bag.svg';

class Header extends Component {
    render(){
        
        const navList = ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home",
                        "Only on Apple", "Accessories", "Support"]

        return(
            <nav id='navigation'>  
                <ul>
                    <li><img src={apple} alt="apple-logo"></img></li>

                    {navList.map((value, key) => {
                        return <li key={key}>{value}</li>
                    })}

                    <li>< img src={search} alt="apple-search-icon" className="search-icon" ></img></li>
                    <li><img src={bag} alt="apple-bag" /></li>
                </ul>
            </nav>
        )
    }
}

export default Header;
