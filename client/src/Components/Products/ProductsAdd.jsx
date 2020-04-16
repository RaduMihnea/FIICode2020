import React, {Component} from 'react';
import axiosRequest from '../../Utils/axios';
import {Redirect} from 'react-router-dom';
import judete from '../../assets/data/county.json';
import tags from '../../assets/data/tags.json';
import tag_books from '../../assets/images/Icons/Tags/Books.png';
import tag_homemade from '../../assets/images/Icons/Tags/Homemade.png';
import tag_clothing from '../../assets/images/Icons/Tags/Clothing.png';
import tag_furniture from '../../assets/images/Icons/Tags/Furniture.png';
import tag_cars from '../../assets/images/Icons/Tags/Cars.png';
import tag_tools from '../../assets/images/Icons/Tags/Tools.png';
import tag_jewelry from '../../assets/images/Icons/Tags/Jewelry.png';
import tag_other from '../../assets/images/Icons/Tags/Other.png';
import tag_army from '../../assets/images/Icons/Tags/Army.png';
import tag_technology from '../../assets/images/Icons/Tags/Technology.png';

import {Switch} from "@blueprintjs/core";
import { store } from 'react-notifications-component';

export default class ProductsAdd extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            description: "",
            price: "",
            county: {
                name: "",
                id: "99"
            },
            negotiable: false,
            bifa2: false,
            image: "Not set",
            tag: {
                name: "",
                id: ""
            },
            redirect: false,
            has_photo:false,
            max_quantity:""   
        };
      }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/products'/>
        }
    }

    handleChange=(event)=> {
        this.setState({[event.target.name]: event.target.value})
    }

    onChange1 = () => {
        this.setState(initialState => ({
            negotiable: !initialState.negotiable
        }));
    }

    onChange2 = () => {
        this.setState(initialState => ({
            bifa2: !initialState.bifa2,

        }));
        if(this.state.image==="Not set") {
            if(this.state.tag==="1") this.setState({image: tag_books})
            if(this.state.tag==="2") this.setState({image: tag_homemade})
            if(this.state.tag==="3") this.setState({image: tag_clothing})
            if(this.state.tag==="4") this.setState({image: tag_furniture})
            if(this.state.tag==="5") this.setState({image: tag_cars})
            if(this.state.tag==="6") this.setState({image: tag_tools})
            if(this.state.tag==="7") this.setState({image: tag_jewelry})
            if(this.state.tag==="8") this.setState({image: tag_army})
            if(this.state.tag==="9") this.setState({image: tag_technology})
            if(this.state.tag==="10") this.setState({image: tag_other})
        }
    }

    onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                this.setState({image: e.target.result});
            };
            reader.readAsDataURL(event.target.files[0]);
            this.setState({has_photo:true});
        }
    }

    handleSubmit=(event)=> {
        event.preventDefault();
             const product = {
            title: this.state.name,
            description: this.state.description,
            price: this.state.price,
            negotiable: this.state.negotiable,
            county_id: this.state.county,
            seller_id: this.props.user.id,
            image: this.state.image,
            tags: this.state.tag,
            max_quantity:this.state.max_quantity
        }

        if (this.state.bifa2 === true && this.state.county !== "99" && !isNaN(this.state.price) && !isNaN(this.state.price)) {
            
            axiosRequest.post("products", product)
                .then(response => {
                    this.setState({
                        redirect: true
                    })
                    store.addNotification({
                        title: "Store update",
                        message: "Your product has been added successfully on our market!",
                        type: "success",
                        insert: "bottom",
                        container: "bottom-right",
                        animationIn: ["animated", "fadeIn"],
                        animationOut: ["animated", "fadeOut"],
                        dismiss: {
                            duration: 3000
                         }
                      });
                }).catch(error => {
            })
        } else {
            this.setState({redirect: false})
        }
    }
    

    render() {
        return (
            <>
            {this.renderRedirect()}
            <div className="font-main display-1">
                Add product
            </div>
            <div className="container_add_product">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Product name:"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required/>

                    <textarea
                        type="text"
                        name="description"
                        placeholder="Describe your product:"
                        value={this.state.description}
                        onChange={this.handleChange}
                        required
                        className="textarea_add_product"/>

                    <input
                        type="text"
                        name="max_quantity"
                        placeholder="Quantity:"
                        value={this.state.max_quantity}
                        maxLength={2}
                        onChange={event => this.setState({max_quantity: event.target.value.replace(/\D/, '')})}
                        required/>


                    <label>Select category:
                        <select value={this.state.tag.name} onChange={this.handleChange} name="tag" style={{borderRadius:5}}>
                            {tags.map((item, key) => {
                                return (
                                    <option value={item.id} onChange={this.handleChange}>{item.name}</option>
                                )
                            })}
                        </select>
                    </label>
                
                    <input
                        type="text"
                        name="price"
                        placeholder="Price(RON):"
                        value={this.state.price}
                        onChange={event => this.setState({price: event.target.value.replace(/\D/, '')})}
                        required
                        />
                    
                    <label>Select county:
                        <select value={this.state.county.name} onChange={this.handleChange} name="county" style={{borderRadius:5}}>
                            {judete.map((item, key) => {
                                return (
                                    <option value={item.id} onChange={this.handleChange}>{item.name}</option>
                                )
                            })}
                        </select>
                    </label>

                    <div className="input_image" style={{display:"inline-flex"}}>
                        <label style={{fontWeight:600, marginRight:10}}>Product photo:</label>
                        <input type="file" onChange={this.onImageChange}  className="filetype" id="product_image" style={{width:200}}/>
                    </div>

                    <div className="add_product_bifa ">
                      <Switch onChange={this.onChange1} checked={this.state.negotiable}>
                            I would like to receive negotiation offers
                      </Switch>
                            
                    </div>


                    <div className="add_product_bifa ">
                        <Switch onChange={this.onChange2} checked={this.state.bifa2}>
                            I assure that the declared data are real
                        </Switch>  
                    </div>


                    <button type="submit">Add your product</button>

                </form>
                <div className="spatiu_gol_add_product"></div>
            </div>
            </>
        );
    }
}