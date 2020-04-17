import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axiosRequest from "../../Utils/axios";
import judete from '../../assets/data/county.json';
import CreateAccount from '../../assets/images/buttons/CreateAccount.svg';
import default_picture from '../../assets/images/Icons/ProfileDefault.png';
import { store } from 'react-notifications-component';
import back_button from '../../assets/images/Icons/Back-button.svg';
import see_password from '../../assets/images/Icons/See_password.png';
import bifa_poza from '../../assets/images/Checkmark.png';


export default class Registration extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
            password_confirmation: "",
            county: "",
            username: "",
            phone_number: "",
            image: default_picture,
            address: "",
            age: "",
            bifa1: false,
            bifa2: false,
            redirect: false,
            registrationErrors: "",
            has_image: false,
            seePassword:false,
            seePasswordConfirm:false

        };
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/login'/>
        }
    }

    handleChange=(event)=> {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onChange1 = () => {
        this.setState(initialState => ({
            bifa1: !initialState.bifa1
        }));
    }

    onChange2 = () => {
        this.setState(initialState => ({
            bifa2: !initialState.bifa2,

        }));
    }
    
    goBack=()=>{
        this.props.history.goBack();
    }

    onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                this.setState({image: e.target.result});
            };
            reader.readAsDataURL(event.target.files[0]);
            this.setState({has_image: true});
        }

    }


    handleSubmit=(event)=> {
        const user = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.username,
            age: this.state.age,
            address: this.state.address,
            county_id: this.state.county,
            image: this.state.image,
            phone: this.state.phone_number
        }

        if (this.state.password_confirmation === this.state.password && !isNaN(this.state.age) && !isNaN(this.state.phone_number)) {
            axiosRequest.post("/register", user).then(response => {
                console.log("registration res", response);
                store.addNotification({
                    title: "Welcome to Piazeta!",
                    message: "Your account has been created successfully!",
                    type: "success",
                    insert: "bottom",
                    container: "bottom-right",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 4000
                     }
                  });
                setTimeout(() => {
                    this.setState({redirect: true,})
                }, 2000);
            }).catch(error => {
                console.log("registration error", error);
            })
        }
        else store.addNotification({
            title: "Registration error",
            message: "Password and password confirmation do not match",
            type: "warning",
            insert: "bottom",
            container: "bottom-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                 duration: 3000
                    }
            });
        event.preventDefault();

    }

    render() {
        return (
            <>
            {this.renderRedirect()}
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-sm-3"/>
                    <div className="col-sm-6">
                        <div className="row justify-content-center h-25">
                            <img src={CreateAccount} alt="create_account" className="title-image"/>
                        </div>
                        <div className="row justify-content-center pb-5">
                            <div className="col-sm-2"/>
                            <div className="col-sm-8">
                                <div className="container-fluid no-margin">
                                    <form onSubmit={this.handleSubmit} className="no-margin">
                                        <input
                                            className="input-main"
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                            required/>
                                        
                                        <div>
                                        <input
                                            className="input-main"
                                            type={this.state.seePassword ? "text" : "password"}
                                            name="password"
                                            placeholder="Password"
                                            value={this.state.password}
                                            maxLength={16}
                                            minLength={8}
                                            onChange={this.handleChange}
                                            required/>
                                        <img src={see_password}  alt="see_psw_register"
                                        style={{height:30, position:'absolute', right:40}} 
                                        onClick={()=>this.setState({seePassword:!this.state.seePassword})}/>
                                        </div>
                                        
                                        <div>
                                        <input
                                            className="input-main"
                                            type={this.state.seePasswordConfirm ? "text" : "password"}
                                            name="password_confirmation"
                                            placeholder="Confirm password"
                                            value={this.state.password_confirmation}
                                            maxLength={16}
                                            minLength={8}
                                            onChange={this.handleChange}
                                            required
                                        />
                                        <img src={see_password} alt="see_psw_confirm_register"
                                        style={{height:30, position:'absolute', right:40}} 
                                        onClick={()=>this.setState({seePasswordConfirm:!this.state.seePasswordConfirm})}/>
                                        </div>

                                        <input
                                            className="input-main"
                                            type="text"
                                            name="username"
                                            placeholder="Full name"
                                            value={this.state.username}
                                            maxLength={24}
                                            onChange={this.handleChange}
                                            required/>
                                        <input
                                            className="input-main"
                                            type="text"
                                            name="phone_number"
                                            placeholder="Phone number"
                                            value={this.state.phone_number}
                                            maxLength={10}
                                            minLength={10}
                                            onChange={event => this.setState({phone_number: event.target.value.replace(/\D/, '')})}
                                            required/>

                                        <div className="container-fluid font-secondary small" style={{marginBottom:5}}>
                                            <label style={{fontFamily:'serif', fontSize:20}}>Profile picture:</label>
                                            <input
                                                style={{width:95}}
                                                type="file"
                                                onChange={this.onImageChange}
                                                className="m-1 align-self-center"
                                                id="user_image"/>
                                            {this.state.image!== default_picture ? <img src={bifa_poza} style={{height:30}}/> : ""}
                                        </div>

                                        <input
                                            className="input-main"
                                            type="text"
                                            name="age"
                                            placeholder="Age"
                                            value={this.state.age}
                                            maxLength={2}
                                            onChange={event => this.setState({age: event.target.value.replace(/\D/, '')})}
                                            required/>

                                        <label className="font-secondary">Select county:
                                            <select value={this.state.county} onChange={this.handleChange}
                                                    name="county" className="ml-2 input-main w-auto">
                                                {judete.map((item, key) => {
                                                    return (
                                                        <option value={item.id}
                                                                onChange={this.handleChange}>{item.name}</option>
                                                    )
                                                })}
                                            </select>
                                        </label>


                                        <input
                                            className="input-main"
                                            type="text"
                                            name="address"
                                            placeholder="Full address"
                                            value={this.state.address}
                                            onChange={this.handleChange}
                                            required/>


                                        <div className="politici marginBottomInputs">
                                            <label className="containerTermeni">
                                                <input
                                                    required
                                                    onChange={this.onChange1}
                                                    type="checkbox"
                                                    checked={this.state.bifa1}
                                                    className="mr-1"
                                                />
                                                I agree with the <a href="https://drive.google.com/file/d/1sZrv-zaRGQmnwLaemMSwJ5OzXH6zDlRL/view?usp=sharing" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>
                                                <span className="checkmarkTermenisiConditii"/>
                                            </label>
                                        </div>

                                        <div className="politici marginBottomInputs">
                                            <label className="containerPolitici">
                                                <input
                                                    required
                                                    onChange={this.onChange2}
                                                    checked={this.state.bifa2}
                                                    type="checkbox"
                                                    className="mr-1"
                                                />
                                                I agree with the <a href="https://drive.google.com/open?id=1EkgMms9kcjg-SHZZqy-QyTlEU0pzvfJW" target="_blank" rel="noopener noreferrer">Privacy Policies</a>
                                                <span className="checkmarkPolitici"/>
                                            </label>
                                        </div>
                                    <div className="row justify-content-center">                                   
                                        <button className="input-button-main" type="submit"
                                                onClick={this.setRedirect}>Submit
                                        </button>
                                    </div>
                                    <div className="row justify-content-center">
                                        <img src={back_button} alt="backbtn_register" onClick={this.goBack} style={{height:32, backgroundColor:"darkred", borderRadius:15, marginTop:7}}/>
                                    </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-sm-2"/>
                        </div>
                    </div>
                    <div className="col-sm-3 "/>
                </div>
            </div>
            </>
        );
    }
}