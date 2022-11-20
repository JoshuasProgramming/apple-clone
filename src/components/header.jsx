import React, { Component } from 'react';
import '../styles/style.css';
import apple from '../images/apple.svg';
import search from '../images/search.svg';
import bag from '../images/bag.svg';

class Header extends Component {
    render(){
        
        //navList (array) contains the different navigation list items (Strings).
        //We'll use a map to loop through each item and present it on the page.
        //This avoids us individually typing in each <li></li>
        const navList = [apple, "Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home",
                        "Only on Apple", "Accessories", "Support", search, bag];
        return(
            <nav id='navigation'>  
                <ul>

                    {/* using a map to loop through each item in 'navList', and put it into a li element */}
                    
                    {navList.map((value, key) => {
                        
                        //whenever the value contains and image & is a 'Search' icon... We'll return it within a li>img
                        if((value === search) && (value.includes("svg"))){
                            return <li><img src={search} alt="apple-search-icon" className='search-icon'></img></li>
                        } 
                        
                        //whenever the value is just a svg... We'll return it within a li>img 
                        else if(value.includes("svg")){
                            return <li><img key={key} src={value} alt={value + "-icon"}></img></li>
                        }
                        
                        //When all other conditions fail we'll just return the normal Strings in an li element 
                        return <li key={key}>{value}</li>
                    })}
                </ul>
            </nav>
        )
    }
}

export default Header;
