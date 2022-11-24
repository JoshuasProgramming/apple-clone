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
import compare from '../images/compare.svg';
import airtag from '../images/airtag.svg';
import Atv4k from '../images/AppleTV4K.svg';

class ProductBanner extends Component {
    render(){

        //products object will contain a title and image property for several Apple Products
        const products = [{title: 'Macbook Air', image: {src: Ma, alt: 'MacbookAir_Img'}, isNew: true }, 
                       {title: 'MacBook Pro', image: {src: Mp, alt: 'MacbookPro_Img'}, isNew: true},
                       {title: 'iphone14 Pro', image: {src: Ip14P, alt: 'Iphone14Pro_Img'}, isNew: false},
                       {title: 'iPhone14', image: {src: Ip14, alt: 'IPhone14_Img'} , isNew: false},
                       {title: 'iPhone SE', image: {src: iPhoneSE, alt: 'IPhoneSE_Img'} , isNew: false},
                       {title: 'Apple Watch Ultra', image: {src: WatchUltra, alt: 'AppleWatchUltra_Img'} , isNew: false}, 
                       {title: 'iMac 24', image: {src: IMacPro, alt: 'iMac 24_Img'} , isNew: false}, 
                       {title: 'Apple TV 4K', image: {src: Atv4k, alt: 'iMac 24_Img'} , isNew: false},
                       {title: 'Compare', image: {src: compare, alt: 'compare_Img'} , isNew: false},
                       {title: 'AirTag', image: {src: airtag, alt: 'airtag_Img'} , isNew: false},
                       {title: 'Accessories', image: {src: accessories, alt: 'accessories_Img'} , isNew: false}
                       ,]

        return(
            <section className='product-banner'>
                <ul>
                    {/* loop through each product for length of 'products' (object) times */}
                    {products.map((value, key) => {

                        return value.isNew === false ?
                        <li className='not-new'>
                            {/* return a component with the title, image, image alt text & 'isNew' boolean value (send down as a prop) in a list/li element */}
                            <ProductBanner_Item key={key} title={value.title} image={value.image.src} alt={value.image.alt} isNew={value.isNew}/>
                        </li>
                        :
                        <li>
                            <ProductBanner_Item key={key} title={value.title} image={value.image.src} alt={value.image.alt} isNew={value.isNew}/>
                        </li>
                    })}
                </ul>
            </section>
        )
    }
}

export default ProductBanner;