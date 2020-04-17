import React, {Component} from 'react';
import {InfoWindow, Map, Marker, GoogleApiWrapper} from "google-maps-react";
import judete from '../../assets/data/county.json'
import oficii_post from '../../assets/data/postal_offices.json';
import county_centres from '../../assets/data/county_centres.json';
import back_button_map from '../../assets/images/Icons/Back-button.svg';

export class MapContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,  //Hides or the shows the infoWindow
            activeMarker: {},          //Shows the active marker upon click
            selectedPlace: {},          //Shows the infoWindow to the selected place upon a marker
            judet_ales: 0,
            lat_centru: 47.165204,
            long_centru: 27.582852
        }
    }

    handleChange = (event) => {
        this.setState({
                judet_ales: event.target.value
            },
            () => {  //callback
                console.log(this.state.judet_ales);
                this.setState({
                    lat_centru: county_centres[this.state.judet_ales].latitude,
                    long_centru: county_centres[this.state.judet_ales].longitude
                })
            })
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    displayMarkers = () => {
        return oficii_post.map((item, index) => {
            return <Marker key={index} id={index} position={{
                lat: item.latitude,
                lng: item.longitude
            }}
                           onClick={() => {
                               console.log("You clicked me!")
                               this.setState({activeMarker: true})
                           }}/>
        })
    }

    render() {
        return (
            <>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12 col-lg-12">
                        <h className="titlu_pagina_harta">Where can you quickly send the letter?</h>
                    </div>
                </div>

                <div class="row mt-3">
                    {/* <div class="col">Select your county:</div> */}
                    <div class="col font-third h2 no-margin" style={{fontSize: 45}}>Select your county:
                        <select class="input-main" value={this.state.judet_ales.nume} onChange={this.handleChange}
                                name="judet_ales" style={{marginLeft: 15, fontSize: 15, height: 35, width: '20%'}}>
                            {judete.map((item, key) => {
                                return (
                                    <option value={item.id}>{item.name}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row justify-content-center mr-2 pb-5">
                    <div class="col container_mapa_google col-lg-8">

                        <Map
                            google={this.props.google}
                            zoom={13}
                            center={{
                                lat: this.state.lat_centru,
                                lng: this.state.long_centru
                            }}
                            initialCenter={{
                                lat:47.165204,
                                lng:27.582852
                            }}
                        >
                            {this.displayMarkers()}

                            <Marker
                                onClick={this.onMarkerClick}
                                name={'Postal office'}
                            />

                            <InfoWindow
                                marker={this.state.activeMarker}
                                visible={this.state.showingInfoWindow}
                                onClose={this.onClose}
                            >
                                <div>
                                    <h4>{this.state.selectedPlace.name}</h4>
                                </div>
                            </InfoWindow>
                        </Map>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col">
                        <button style={{borderRadius:20, backgroundColor:'darkred', padding:5, width:100}} onClick={()=>this.props.history.goBack()}>
                        <img src={back_button_map} style={{height:25}} />Return
                        </button>
                    </div>
                </div>
            </div>
            <div className="sp_gol"></div>
            </>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer);
