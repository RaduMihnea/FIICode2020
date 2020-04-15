import React from 'react';
import {Link} from 'react-router-dom';
import home_icon from "../assets/images/Icons/Bottom_bar_svgs/Home.svg";
import products_icon from "../assets/images/Icons/Bottom_bar_svgs/Products.svg";
import add_product_icon from "../assets/images/Icons/Bottom_bar_svgs/Add_product.svg";
import cart_icon from "../assets/images/Icons/Bottom_bar_svgs/Cart.svg";
import { useLocation } from 'react-router-dom'
import mailing_icon from "../assets/images/Icons/Bottom_bar_svgs/Mailing.svg";

function SidebarMobile(){
        let location = useLocation();

    return(
    <div className="bottom_buttons">
        
        <div className="bottom_buton">
        <Link to="/home">
            <img src={home_icon} alt="home_icon" class={location.pathname==="/home" ? "home_icon_clicked" : "home_icon"}  />
                <div className="button_bottom_text" >Home</div>
        </Link>
        </div>
        
        <div className="bottom_buton">
        <Link to="/products">
            <img src={products_icon} alt="products_icon" class={location.pathname==="/products" ? "home_icon_clicked" : "home_icon"} />
           <div className="button_bottom_text" >Products</div>
        </Link>
        </div>
        
        
        <div className="bottom_buton">
        <Link to="/products/create">
            <img src={add_product_icon} alt="add_product_icon" class={location.pathname==="/products/create" ? "home_icon_clicked" : "home_icon"}/>
            <div className="button_bottom_text">Add product</div>
        </Link>
        </div>
        
        
        <div className="bottom_buton">
        <Link to="/cart">
            <img src={cart_icon} alt="cart_icon" class={location.pathname==="/cart" ? "home_icon_clicked" : "home_icon"} />
            <div className="button_bottom_text">Cart</div>
        </Link>
        </div>
        
        
        <div className="bottom_buton">
        <Link to="/mailing">
            <img src={mailing_icon} alt="mailing_icon" class={location.pathname==="/mailing" || location.pathname==="/map" ? "home_icon_clicked" : "home_icon"} />
            <div className="button_bottom_text">Mailing</div>
        </Link>
        </div>
        

    </div>
    )

}

export default SidebarMobile