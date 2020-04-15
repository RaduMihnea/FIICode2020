import React, {Component} from 'react'
import axiosRequest from "../../Utils/axios";
import { store } from 'react-notifications-component';

export default class Receipt extends Component {
    constructor(props) {
        super();
        this.state = {
            mesaj: "",
            sale: {
                seller_id: "",
                buyer_id: "",
                quantity: "",
                price: ""
            }
        }
    }

    handleSubmit(event){
        axiosRequest.post("/orders")
            .then(res => {
                console.log(res);
                setTimeout(() => {
                    window.location.href='/products'
                }, 1000);
            })
            .catch(error => {
                console.log("order processing error", error);
            })

      event.preventDefault();

      store.addNotification({
        title: "Order received successfully!",
        message: "For more details about your transaction and further instructions please check your e-mail!",
        type: "success",
        insert: "bottom",
        container: "bottom-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 5000

        }
      });
    }

    render() {
        const disableButton = this.props.total>0;
        return (
            <>
            <div className="container">
                <div className="collection">
                    <li className="collection-item"><b>Total: {this.props.total} RON</b></li>
                </div>
                <div className="checkout">
                    <button className="waves-effect waves-light btn input-button-main" disabled={!disableButton} onClick={this.handleSubmit}>Submit your order
                    </button>
                </div>
            </div>
            </>
        )
    }
}
