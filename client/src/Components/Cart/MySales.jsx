import React, {Component} from 'react';
import NotSold from "../../assets/images/Icons/NotSold.png";
import Sold from "../../assets/images/Icons/Sold.png";
import {Link} from "react-router-dom";
import axiosRequest from "../../Utils/axios";
import Moment from "react-moment";
import go_to_add_products from "../../assets/images/Icons/Cart_add.png";
import wait_answer from "../../assets/images/Icons/Wait_answer.png";

export default class MySales extends Component {
    constructor() {
        super();
        this.state = {
            sales:[]
        }
    }

    componentDidMount(){
        axiosRequest.get("user/sells")
        .then(res => {
            console.log(res)
            this.setState({
                sales: res.data
            });
        })
    }

    render() {
        console.log(this.state.sales)
        return (
            <div>
                <div class="container-fluid mt-5">
                    <h class="titlu_my_sales" style={{fontSize:30, fontFamily:'Franchise'}}>Please let us know about the final status of the received orders:</h> 
                    <div class="row justify-content-center"> 
                        <div class="col-lg-8">
                            <div className="container_sales" style={{width:'100%',marginTop:10, height:300,overflow:'auto', backgroundColor:'beige', borderRadius:20,}}>
                            {this.state.sales.length>0 ?
                            <>
                                {this.state.sales.map((item,index) => {
                                return (
                                <div className="sale" style={{display:'inline-flex',marginTop:10, width:'100%',alignItems:'center'}}>
                                    <div class="col">Order id: {item.id}</div>
                                    <div class="col">Received on: <Moment format="DD.MM.YYYY, hh:mm">{item.created_at}</Moment> </div>
                                    <div class="col">Total: {item.total} RON</div>
                                    <div class="col">
                                        <Link to={`/orders/${item.id}`}>See more</Link> 
                                    </div>
                                    
                                    <div class="col" style={{alignSelf:'center'}}>
                                       <div class="row">
                                       <div class="col">
                                       {item.validated===0 ?
                                        <img src={NotSold} alt="not_sold" style={{height:25}}/>
                                        :
                                        <img src={Sold} alt="sold" style={{height:25}}/>
                                        }
                                        </div>
                                        <div class="col">
                                         {item.confirmed==null ?
                                        <img src={wait_answer} style={{height:25}}/>
                                        : ""
                                        }  
                                        </div> 
                                        </div>
                                    </div>                                          
                                    </div>
                                )})}
                            </>
                            : 
                            <>
                            <div style={{fontSize:18, fontFamily:'Franchise',marginTop:10, padding:10}}>You don't have any sale so far. Go add your products on the market!</div>
                            <img src={go_to_add_products} alt="go_add_products_mysales" style={{height:35}} onClick={()=>window.location.href='/products/create'}/>
                            </>
                            }

                            </div>
                            
                       
                    </div> 
                </div>
            </div>
        </div>
        )
    }
}
