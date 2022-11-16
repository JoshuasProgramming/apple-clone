import React, { Component } from 'react';
import '../styles/style.css';

class Header extends Component {
    render(){
        return(
            <nav>
                <ul>
                    <li><img src="https://www.apple.com/ac/globalnav/7/en_GB/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg"></img></li>
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
                    <li>< img src="https://www.apple.com/ac/globalnav/7/en_GB/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_search_image__cbllq1gkias2_large.svg" className="search-icon" ></img></li>
                    <li><img src="https://www.apple.com/ac/globalnav/7/en_GB/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_bag_image__yzte50i47ciu_large.svg" alt="apple-bag" /></li>
                </ul>
            </nav>
        )
    }
}

export default Header;
