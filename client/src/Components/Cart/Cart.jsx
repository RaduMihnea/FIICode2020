import React, {Component} from 'react';
import axiosRequest from '../../Utils/axios'
import _ from 'lodash'
import {Card, Elevation} from '@blueprintjs/core'
import Loader from 'react-loader-spinner'; 
import { store } from 'react-notifications-component';
import arrowUp from "../../assets/images/Icons/Diverse/Arrow_up.png";
import arrowDown from "../../assets/images/Icons/Diverse/Arrow_down.png";
import remove from "../../assets/images/Icons/Diverse/Remove_product.png";
import Receipt from "./Receipt";

const colors = ["#5c7329", "#548d78", "#c69421", "#cc6f22", "#8c2f0b"];

export default class Cart extends Component {

    constructor() {
        super()
        this.state = {
            products: "",
            total: "",
            loading:""
        }
    }

    updateCart=()=> {
        this.setState({loading:true}, ()=>{
        axiosRequest.get("cart")
            .then(res => {
                const products = res.data.products;
                const total = res.data.total
                this.setState({products: products, total: total, loading:false});
            })
        });
    }

    componentDidMount() {
        this.updateCart();
    }

    //to remove the item completely
    handleRemove = (item) => {
        const new_products = _.reject(this.state.products, function (el) {
            return el.id === item.id
        });
        const new_total = this.state.total - (item.price * item.pivot.quantity)
        this.setState({products: new_products, total: new_total});
        axiosRequest.post("cart/remove-product", {
            product_id: item.id,
            new_total: item.pivot.quantity * item.price
        });
        store.addNotification({
            title: "Product removed from your cart",
            message:" ",
            type: "danger",
            insert: "bottom",
            container: "bottom-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 5000
            }
          });
    }
    //to change the quantity
    handleQuantity = (item, quantity) => {
        const new_products = _.map(this.state.products, function (o) {
            return o.id === item.id ? {...o, pivot: {quantity: o.pivot.quantity + quantity}} : o;
        });
        const new_total = this.state.total + quantity * item.price;
        this.setState({products: new_products, total: new_total});
        axiosRequest.post("cart/change-product", {
            product_id: item.id,
            quantity: item.pivot.quantity + quantity,
            new_total: item.price * quantity
        })
    }


    render() {
        let addedItems = this.state.products.length ?
            (
                this.state.products.map(item => {
                    return (
                        <div className="col-12 mb-2">
                            <div className="h-auto no-margin" key={item.id}>
                                <Card interactive={false} elevation={Elevation.FOUR}
                                      className="background-primary h-100">
                                    <div className="row h-100">
                                        <div className="col-lg-3 ">
                                            <img className="product_image" src={item.image} alt=""/>
                                        </div>
                                        <div className="col-lg-8 text-lg-left">
                                            <a href={"/products/" + item.id} className="h4 font-main"
                                               style={{color: colors[item.id % 5]}}>{item.title}</a>
                                            <p className="h5">{item.description}</p>
                                            <p className="h6">Quantity: {item.pivot.quantity}</p>
                                            {item.sold_out=== 1 ?
                                                <div className="text-danger h6">Item not avalabile anymore on Piazeta! Please remove it from your cart.</div>
                                                : <p className="h5">Price: {item.price} RON</p>}
                                        </div>
                                        <div className="col-lg-1">
                                            <div className="row no-margin">
                                                <div className="col col-lg-12 no-margin">
                                                    {item.pivot.quantity < item.max_quantity
                                                        ? <div onClick={() => {
                                                            this.handleQuantity(item, 1)
                                                        }}>
                                                            <img className="w-100 h-100 button_image" src={arrowUp}
                                                                 alt="arrowup"/>
                                                        </div>
                                                        : ""}
                                                </div>
                                                <div className="col col-lg-12 no-margin">
                                                    {item.pivot.quantity > 1
                                                        ? <div onClick={() => {
                                                            this.handleQuantity(item, -1)
                                                        }}>
                                                            <img className="h-100 w-100 button_image"
                                                                 src={arrowDown} alt="arrowdown"/>
                                                        </div>
                                                        : ""}
                                                </div>
                                                <div className="col col-lg-12 no-margin">
                                                    <div onClick={() => {
                                                        this.handleRemove(item)
                                                    }}>
                                                        <img className="w-100 h-100 button_image" src={remove}
                                                             alt="remove_from_cart"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    )
                })
            ) :

            (
                <p className="h5 font-main">Your cart is empty!</p>
            )
        return (
            <div className="container-fluid">
                <div className="row h-100">
                    <div className="col-lg-1"/>
                    <div className="col-lg-10 align-content-start">
                        <div className="display-1 font-main">Your cart:</div>
                        <ul className="row h-80 no-margin justify-content-center">
                            {this.state.loading ? 
                    <Loader
                     type="ThreeDots"
                     color="darkred"
                     height={100}
                     width={100}
                     timeout={14000}
                    /> :
                            
                            <>{addedItems}</>}
                        </ul>
                        <Receipt total={this.state.total}/>
                    </div>
                    <div class="col-lg-1"/>
                </div>
                <div className="spatiu_gol-cart" style={{height:120}}/>
            </div>
        )
    }
}