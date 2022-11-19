import React, { Component } from 'react';
import '../styles/style.css';

class Footer extends Component {
    render(){
        return(
            <footer>
                <section className="sub-section-footer1">
                    <p>1. Offer valid on qualifying purchases of eligible Apple products from 25 November 2022 to 28 November 2022 at a Qualifying Location. Offer subject to availability. While stocks last. Qualifying purchases can receive a discount equal to the value of the eligible Apple Gift Card off the price of the eligible product. All items will be charged at checkout, including the eligible Apple Gift Card. Eligible Products purchased via financing from the Apple Online Store, the Apple Store app and by calling 0800 048 0408 do not qualify for this promotion. This offer also cannot be combined with the Apple Employee Purchase Plan, education or business loyalty pricing. Some methods of payment are not accepted under this offer. See checkout for details. Availability of in-store promotion offerings may be limited by Apple Store location closures as a result of COVID‑19. Additional restrictions apply. View full terms and conditions of offer <a>here.</a></p>
                </section>

                <div className="underline"></div>

                <section className="sub-section-footer2">
                    <div className="footer-list-containers">
                        <ul>
                            <li>Shop and Learn</li>
                            <li>Store</li>
                            <li>Mac</li>
                            <li>iPad</li>
                            <li>iPhone</li>
                            <li>Watch</li>
                            <li>AirPods</li>
                            <li>TV & Home</li>
                            <li>AirTag</li>
                            <li>Accessories</li>
                            <li>Gift Cards</li>
                        </ul>
                    </div>

                    <div className="footer-list-containers">
                        <ul>
                            <li>Services</li>
                            <li>Apple Music</li>
                            <li>Apple TV+</li>
                            <li>Apple Fitness+</li>
                            <li>Apple News+</li>
                            <li>Apple Arcade</li>
                            <li>iCloud</li>
                            <li>Apple One</li>
                            <li>Apple Pay</li>
                            <li>Apple Books</li>
                            <li>Apple Podcasts</li>
                            <li>Apple Store</li>
                        </ul>

                        <ul className='appleId'>
                            <li>Manage Your Apple ID</li>
                            <li>Apple Store Account</li>
                            <li>iCloud.com</li>
                        </ul>

                    </div>
                    <div className="footer-list-containers">
                        <ul>
                            <li>Apple Store</li>
                            <li>Find a Store</li>
                            <li>Genius Bar</li>
                            <li>Today at Apple</li>
                            <li>Apple Summer Camp</li>
                            <li>Apple Store App</li>
                            <li>Refurbished and Clearance</li>
                            <li>Financing</li>
                            <li>Apple Trade in</li>
                            <li>Order Status</li>
                            <li>Shopping Help</li>
                        </ul>
                    </div>
                    <div className="footer-list-containers">
                        <ul>
                            <li>For Business</li>
                            <li>Apple and Business</li>
                            <li>Shop for Business</li>
                        </ul>
                        <ul>
                            <li>For Education</li>
                            <li>Apple and Education</li>
                            <li>Shop for University</li>
                        </ul>
                        <ul className='healthcare'>
                            <li>For Healthcare</li>
                            <li>Apple in Healthcare</li>
                            <li>Health on Apple Watch</li>
                            <li>Health Records on iPhone</li>
                        </ul>
                    </div>
                    <div className="footer-list-containers">
                        <ul>
                            <li>Apple Values</li>
                            <li>Accessibility</li>
                            <li>Education</li>
                            <li>Environment</li>
                            <li>Privacy</li>
                            <li>Supplier Responsibility</li>
                        </ul>
                        <ul>
                            <li>About Apple</li>
                            <li>Newsroom</li>
                            <li>Apple Leadership</li>
                            <li>Career Opportunities</li>
                            <li>Warranty</li>
                            <li>Investors</li>
                            <li>Ethics & Compliance</li>
                            <li>Events</li>
                            <li>European Job Creation</li>
                            <li>Contact Apple</li>
                        </ul>
                    </div>
                </section>

                <div className="p-container">
                    <p>More ways to shop: <a>find an Apple Store</a> or <a>other retailer</a> near you. Or call 0800 048 0408.</p>
                </div>
 
                <div className="underline"></div>

                <section className="sub-section-footer3">
                    <p>Copyright &#169; 2022 Apple Inc. All rights reserved.</p>
                    <p>Privacy Policy | Use of Cookies | Terms of Use | Sales and Refunds | Legal | Site Map</p>
                    <p>United Kingdom</p>
                </section>
            </footer>
        )
    }
}

export default Footer;
