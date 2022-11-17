import React, { Component } from 'react';
import '../styles/style.css';

class MobileHeader extends Component {
    render(){
        return(
            <div className="mobile-nav">
                <ul>
                    <li className='apple-ham'>
                        <div className="ham-line"></div>
                        <div className="ham-line"></div>
                    </li>
                    <li><img src="https://www.apple.com/ac/globalnav/7/en_GB/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg" alt='apple-logo'></img> </li>
                    <li><img src="https://www.apple.com/ac/globalnav/7/en_GB/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_bag_image__yzte50i47ciu_large.svg" alt="apple-bag" /></li>
                </ul>
            </div>
        )
    }
}

export default MobileHeader;