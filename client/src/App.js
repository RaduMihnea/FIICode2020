import React, {Component} from 'react';
import background from "./assets/images/retro-wallpaper-1.jpg";
import RouterContainer from "./Router/RouterContainer";
import CookieConsent from "react-cookie-consent";
import ReactNotification from 'react-notifications-component';



export default class App extends Component {
    render() {

        return (
            
            <div className="total">
                <div className="background_map_page">
                    <img src={background} alt="background"/>
                </div>
                <ReactNotification />
                <RouterContainer />
                <CookieConsent
                    location="bottom"
                    buttonText="I agree"
                    cookieName="Retrosite_cookies"
                    style={{background: "#2B373B"}}
                    buttonStyle={{color: "#4e503b", fontSize: "13px", fontWeight: "bold", borderRadius: "20px"}}
                    expires={150}
                    onAccept={() => {
                        console.log("Cookies accepted by user")
                    }}
                >
                    This website uses cookies to enhance the user experience. By using our website you consent to
                    all cookies in accordance with our <a href="https://drive.google.com/open?id=1EkgMms9kcjg-SHZZqy-QyTlEU0pzvfJW" target="_blank" rel="noopener noreferrer">Privacy Policy</a>{" "}
                </CookieConsent>
            </div>
        );
    }
}
