import React, {Component} from 'react';
import axiosRequest from "../../Utils/axios";
import return_site from "../../assets/images/return_site.png";
import Moment from 'react-moment';
import { store } from 'react-notifications-component';
import back_button from "../../assets/images/Icons/Back-button.svg";

export default class ConfirmSale extends Component {
    constructor() {
        super();
        this.state = {
            confirmed: true,
            validation:null,
            products: [{
                id: "",
                title: "",
                description: "",
                price: "",
                pivot: {}
            }],
            buyer: {
                name: "",
                county: "",
                image: ""
            },
        };
    }

    componentDidMount() {
        axiosRequest.get("orders/" + this.props.match.params.id)
            .then(res => {
                console.log(res)
                this.setState({
                    products: res.data.order.products,
                    buyer: res.data.buyer,
                    order_date:res.data.order.created_at,
                    confirmed: res.data.order.confirmed,
                    validation:res.data.order.validated
                });
            })
    }

    handleClick=(status)=> {
        axiosRequest.post("orders/" + this.props.match.params.id, {confirmed: status})
        .then(response => {setTimeout(() => {
            window.location.href='/products'
        }, 2000)});
    }

    notSold=() =>{
        axiosRequest.post("orders/" + this.props.match.params.id + "/validate", {validation:false})
        store.addNotification({
            title: "Products not sold",
            message: "Your products are back on the market. If you want to remove them completely use the seller tools from their page.",
            type: "warning",
            insert: "bottom",
            container: "bottom-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 4000
            }
        });
        this.setState({validation:false})
    }

    notSoldYet=()=>{
        store.addNotification({
            title: "Deal not finalised yet",
            message: "Take your time and please let us know about your order status!",
            type: "warning",
            insert: "bottom",
            container: "bottom-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 4000
            }
        });
    }
    productSold=()=>{
        store.addNotification({
            title: "Order completed!",
            message: "Great to hear that! Keep selling products on Piazeta!",
            type: "success",
            insert: "bottom",
            container: "bottom-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 4000
            }
        });
        axiosRequest.post("orders/" + this.props.match.params.id + "/validate", {validation:true})
        this.setState({validation:true})
    }


    render() {
        console.log(this.state)
        return (
            this.state.products[0].seller_id!==this.props.user.id && !this.props.user.is_admin  ?

            <>
                <div className="mesaj_not_your_order">This is not your order and you can't access it.</div>
                <div className="goback_not_your_order">To return to our site you can click here: </div>
                    <div onClick={()=> window.location.href='/home'}>
                        <img src={return_site} style={{width:40, height:40}} alt="return_site"/>
                    </div>
            </>
            :
            <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <div className="confirmation_title">This is the summary of the order you just received:</div>
                </div>
            </div>
            <div class="container-fluid">
            <div class="row">
                <div class="col">
            <div className="info_tranzactie_confirmation">
                <div className="product_info">
                    <div className="product_row_title">Product info:</div>
                    <div className="container_produse_confirm_sale" style={{display:'inline-grid', width:'100%'}}>
                    {this.state.products.map((item,index)=>{return(
                    <div className="date_produs" style={{display:'inline-flex'}}>
                    
                    <div>
                    <div className="product_row_product_title">{index+1}.Product name: {item.title}</div>
                    <div className="product_row">Quantity: {item.pivot.quantity}</div>
                    <div className="product_row">Total: {item.pivot.quantity * item.price} RON</div>
                    </div>
                    <img src={item.image}/>
                    </div>
                    )})}
                    </div>
                </div>
                <div className="buyer_info">
                    <div className="product_row_title">Buyer info:</div>
                    <div className="product_row">Buyer name: {this.state.buyer.name}</div>
                    <div className="product_row">Buyer county: {this.state.buyer.county}, Romania</div>
                    <div className="product_row">Order placed on:  <Moment format="DD.MM.YYYY">{this.state.order_date}</Moment></div>

                </div>
                <div className="logo_piazeta_confirmation">Piazeta</div>
            </div>

                            </div>
                        </div>
                    </div>

            <div class="row">
                <div class="col">
                    <div className="container_agree_transaction">
                        {this.state.confirmed ===null ?
                        <>
                            <div className="text_agree_transaction">Do you agree to complete the order by getting in touch with the buyer?</div>
                                <div className="container_butoane_agree_transaction">
                                    <div class="row justify-content-center">
                                        <div class="col xs-6 xl-6 text-right"><button onClick={() => this.handleClick(true)}>Yes</button></div>
                                        <div class="col xs-6 xl-6 text-left"><button onClick={() => this.handleClick(false)}>No</button></div>
                                    </div>
                                </div>
                        </>
                    : <div className="text_agree_transaction">This order has been agreed. Thank you! </div>}

                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div className="container_agree_transaction">
                        {this.state.validation===null && this.state.confirmed===1 ?
                        <>
                            <div className="text_agree_transaction">Did you finalize the deal?</div>
                                <div className="container_butoane_agree_transaction">
                                    <div class="row justify-content-center">
                                        
                                        <div class="c"><button onClick={this.productSold} >Yes</button></div>
                                        <div class="c"><button onClick={this.notSoldYet} >Not yet</button></div>
                                        <div class="c"><button onClick={this.notSold}>No</button></div>
                                        
                                    </div>
                                </div>
                        </>
                    :""}

                    </div>
                </div>
            </div>
            <div class="row mt-3 mb-2">
                    <div class="col">
                        <button style={{borderRadius:20, backgroundColor:'darkred', padding:5, width:100}} onClick={()=>this.props.history.goBack()}>
                        <img src={back_button} style={{height:25}} />Return
                        </button>
                    </div>
                </div>
            <div className="spatiu_gol"/>
        </div>
        )
    }
}