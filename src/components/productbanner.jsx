import React, { Component } from 'react';
import '../styles/style.css';
import ProductBanner_Item from './productbanner_item';
import Ma from '../images/macbookAir.svg'
import Mp from '../images/macbookPro.svg';
import Ip14P from '../images/iphone14Pro_Icon.svg';
import Ip14 from '../images/iphone14.svg';
import WatchUltra from '../images/appleWatchUltra.svg';
import IMacPro from '../images/imacPro.svg';
import iPhoneSE from '../images/iphoneSE.svg';
import accessories from '../images/accessories.svg';

class ProductBanner extends Component {
    render(){

        //products object will contain a title and image property for several Apple Products
        const products = [
            {
                title: 'MacBook Air',
                image: {
                    src: Ma,
                    alt: 'MacbookAir_Img',
                }
            },

            {
                title: 'MacBook Pro',
                image: {
                    src: Mp,
                    alt: 'MacbookPro_Img',
                }
            },

            {
                title: 'iphone14 Pro',
                image: {
                    src: Ip14P,
                    alt: 'Iphone14Pro_Img',
                }
            },

            {
                title: 'iPhone14',
                image: {
                    src: Ip14,
                    alt: 'IPhone14_Img',
                }
            },


            {
                title: 'iPhone SE',
                image: {
                    src: iPhoneSE,
                    alt: 'IPhoneSE_Img',
                }
            },


            {
                title: 'Apple Watch Ultra',
                image: {
                    src: WatchUltra,
                    alt: 'Apple Watch Ultra Img',
                }
            },

            {
                title: 'iMac 24',
                image: {
                    src: IMacPro,
                    alt: 'iMac 24 Img',
                }
            },

            {
                title: 'Accessories',
                image: {
                    src: accessories,
                    alt: 'accessories Img',
                }
            },
        ];

        return(
            <section className='product-banner'>
                <ul>
                    {/* loop through each product for length of 'products' (object) times */}
                    {products.map((value, key) => {
                        return <li>
                            {/* return a component with the title, image and image alt text (send down as a prop) in a list/li element */}
                            <ProductBanner_Item key={key} title={value.title} image={value.image.src} alt={value.image.alt}/>
                        </li>
                    })}
                </ul>
            </section>
        )
    }
}

export default ProductBanner;