import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import axiosRequest from "../../Utils/axios";
import {Card, Elevation} from '@blueprintjs/core'
import remove_article from '../../assets/images/Icons/Remove_product.png';
import edit_article from  '../../assets/images/Icons/Edit_product.png';
import add_cart from '../../assets/images/Icons/Cart_add.png';
import Moment from 'react-moment';
import {store} from 'react-notifications-component';
import back_button from '../../assets/images/Icons/Back-button.svg';

const colors = ["#5c7329", "#548d78", "#c69421", "#cc6f22", "#8c2f0b"];

export default class ProductsSingle extends Component {

    constructor() {
        super();
        this.state = {
            product: {
                id: 0,
                title: "Test Product",
                description: "This is just a basic product while we load the page. Check your internet connection if it takes too long",
                price: 0,
                negotiable: 0,
                seller_id: 0,
                county_id: "",
                image: "",
                created_at: "",
                max_quantity: ""
            },
            redirect: false,
            mesaj: "",
            want_to_edit: false,
            titleUpdated: "",
            priceUpdated: "",
            descriptionUpdated: "",
            hover_sold: false,
            hover_remove: false,
            hover_edit: false
        }
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/products'/>
        }
    }

    toggleHover_sold = () => {
        this.setState({hover_sold: !this.state.hover_sold})
    }

    toggleHover_remove = () => {
        this.setState({hover_remove: !this.state.hover_remove})
    }

    toggleHover_edit = () => {
        this.setState({hover_edit: !this.state.hover_edit})
    }

    componentDidMount() {
        const id_get = this.props.match.params.product;
        axiosRequest.get("products/" + id_get)
            .then(res => {
                const product = res.data;
                this.setState({product: product, descriptionUpdated: product.description, priceUpdated: product.price});
            })
    }

    add_cart = (item) => {
        axiosRequest.post("/cart/add-product", {product_id: item.id, quantity: 1})
        store.addNotification({
            title: "Product added successfully!",
            message: "To complete your order go to your cart.",
            type: "success",
            insert: "bottom",
            container: "bottom-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 3000
            }
        });
    };

    remove_article_function = (e) => {
        const id = this.props.match.params.product;
        e.preventDefault();
        axiosRequest.delete("products/" + id)
            .then(res => {

                this.setState({mesaj: "Your product has been deleted from Piazeta!"})
                this.setState({redirect: true})
            })
            .catch((err) => {

            })
        e.preventDefault();
        store.addNotification({
            title: "Product removed from market!",
            message: "It won't be displayed anymore on Piazeta.",
            type: "danger",
            insert: "bottom",
            container: "bottom-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 5000
            }
        });
        setTimeout(() => {
            window.location.href = '/products'
        }, 2500);
    }

    edit_article = () => {
        this.setState({want_to_edit: !this.state.want_to_edit})
    }

    handleChange = e => {
        const name = e.target.name;
        this.setState({[name]: e.target.value});
    };

    inputIsEmpty() {
        if (this.state.product.price === this.state.priceUpdated)
            return true
    }

    handleUpdateProduct = (e) => {
        const product_up = {
            id: this.state.product.id,
            title: this.state.product.title,
            description: this.state.descriptionUpdated,
            price: this.state.priceUpdated,
            negotiable: this.state.product.negotiable,
            seller_id: this.state.product.seller_id,
            county_id: this.state.product.county_id,
            image: this.state.product.image,
            max_quantity: this.state.product.max_quantity
        };
        this.setState((prevStae, props) => ({
            product: product_up,
            mesaj: "Changes updated !"
        }));

        const id = this.props.match.params.product;

        axiosRequest.put('products/' + id, product_up)
            .then(res => {
                console.log(res.data);
            })
            .catch((err) => {
                    console.log(err);
                }
            )
        e.preventDefault();
        store.addNotification({
            title: "Product updated successfully!",
            message: " ",
            type: "success",
            insert: "bottom",
            container: "bottom-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 5000
            }
        });
    };


    render() {

        return (
            <div className="container-fluid h-100">
                <div className="row h-100 align-content-center mt-3">
                    <div className="col-1"/>
                    <div className="col-10 no-margin">
                        <div className="h-auto">
                            <Card interactive={false} elevation={Elevation.FOUR}
                                  className="background-primary h-100">
                                <div className="row h-100">
                                    <div className="col-lg-5 align-content-center">
                                        <img className="img-fluid" src={this.state.product.image} alt=""/>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="row justify-content-center justify-content-lg-start ">
                                            <div className="h1 font-main"
                                                 style={{color: colors[this.state.product.id % 5]}}>{this.state.product.title}</div>
                                        </div>
                                        <div className="row justify-content-center justify-content-lg-start mb-2">
                                            {this.state.want_to_edit ?
                                                <div className="row">
                                                    <input
                                                        className="input-secondary"
                                                        type="number"
                                                        placeholder="Edit price"
                                                        onChange={this.handleChange}
                                                        name="priceUpdated"
                                                        value={this.state.priceUpdated}
                                                        style={{height: 30, marginRight: 5}}
                                                    />
                                                    <p className="h4">RON</p>
                                                    {this.state.product.price !== this.state.priceUpdated ?
                                                        <button
                                                            style={{
                                                                marginLeft: 5,
                                                                borderRadius: 10,
                                                                height: 25,
                                                                backgroundColor: 'green',
                                                                alignSelf: 'center'
                                                            }}
                                                            onClick={this.handleUpdateProduct}
                                                        >
                                                            Update
                                                        </button>
                                                        : ""}
                                                </div>
                                                : <p className="h4">{this.state.product.price} RON</p>}
                                        </div>
                                        <div className="row justify-content-center justify-content-lg-start mb-2">
                                            {this.state.want_to_edit ?
                                                <div className="row">
                                                    <input
                                                        className="input-secondary"
                                                        type="text"
                                                        placeholder="Edit description"
                                                        onChange={this.handleChange}
                                                        name="descriptionUpdated"
                                                        value={this.state.descriptionUpdated}
                                                    />
                                                    {this.state.product.description !== this.state.descriptionUpdated ?
                                                        <button
                                                            style={{
                                                                marginLeft: 5,
                                                                borderRadius: 10,
                                                                backgroundColor: 'green'
                                                            }}
                                                            onClick={this.handleUpdateProduct}>
                                                            Update
                                                        </button>
                                                        : ""}
                                                </div> : <p className="h5">{this.state.product.description}</p>}
                                        </div>
                                        <div className="row justify-content-center justify-content-lg-start mb-2">
                                            <div style={{fontSize: 16, marginRight: 5}}>Uploaded on:</div>
                                            <Moment format="DD.MM.YYYY"
                                                    style={{fontWeight: 600, alignSelf: 'flex-end'}}>
                                                {this.state.product.created_at}
                                            </Moment>
                                        </div>
                                        {this.state.product.negotiable === 1 ?
                                            <div
                                                className="row justify-content-center justify-content-lg-start mb-2 text-danger"
                                                style={{fontSize: 16}}>
                                                ! Product is negotiable
                                            </div> : "" }
                                        {/*{this.state.product.exchangeable === true ?*/}
                                        {/*<div className="sgproduct_conditionals">! Product(s) in exchange may be*/}
                                        {/*accepted by the*/}
                                        {/*seller</div> : "" }*/}
                                    </div>
                                    <div className="col-lg-1 ">
                                        {this.state.product.seller_id === this.props.user.id || this.props.user.is_admin
                                            ?
                                            <div className="row no-margin">
                                                <div className="col col-lg-12 no-margin">
                                                    <div onClick={this.remove_article_function}
                                                         onMouseEnter={this.toggleHover_remove}
                                                         onMouseLeave={this.toggleHover_remove}
                                                    >
                                                        {this.state.hover_remove ?
                                                            <div className="hover_remove">Remove from
                                                                market</div> : ""}
                                                        <img className="w-100 h-100 button_image"
                                                             src={remove_article}
                                                             alt="remove_article"/>
                                                    </div>
                                                </div>
                                                <div className="col col-lg-12 no-margin">
                                                    <div onClick={this.edit_article}
                                                         onMouseEnter={this.toggleHover_edit}
                                                         onMouseLeave={this.toggleHover_edit}>
                                                        {this.state.hover_edit ?
                                                            <div className="hover_edit">Edit your product</div> : ""}
                                                        <img className="w-100 h-100 button_image"
                                                             src={edit_article}
                                                             alt="edit_article"/>
                                                    </div>
                                                </div>
                                            </div>
                                            : "" }

                                            <div className="col col-lg-12 no-margin">
                                                <img className="w-100 h-100 button_image"
                                                         src={back_button}
                                                         alt="aback_button"
                                                         onClick={()=>window.location.href='/products'}/>
                                             </div>
                                        {this.state.product.seller_id !== this.props.user.id || this.props.user.is_admin
                                            ?
                                            <div className="col col-lg-12 no-margin">
                                                <div onClick={() => {
                                                    this.add_cart(this.state.product)
                                                }}>
                                                    <img className="w-100 h-100 button_image"
                                                         src={add_cart}
                                                         alt="add_cart"/>
                                                </div>
                                            </div>
                                            : ""}

                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className="col-1"/>
                </div>
                <div className="sp_gol_sgproduct"></div>
            </div>
        )
    }
}