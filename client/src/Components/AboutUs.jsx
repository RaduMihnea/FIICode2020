import React, {Component} from 'react';
import {Card, Elevation} from '@blueprintjs/core';
import Lapu from '../assets/images/about/Lapu.jpg';
import Mihnea from '../assets/images/about/Mihneaa.JPG';
import back_button from '../assets/images/Icons/Back-button.svg';

export default class AboutUs extends Component {
    constructor() {
        super();
        this.state = {}
    }

    goBack=()=>{
        this.props.history.goBack();
    }

    render() {
        return (
            <>
            <div class="container-fluid">
                <div class="row">
                    <div class="col 6">
                        <h class="display-1 font-main">About US</h>
                        <div className="h1 font-main">Piazeta - the online marketplace meant for the exchange of "retro"
                            goods
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div className="col-lg-2"/>
                    <div className="col-lg-8">
                        <Card interactive={false} elevation={Elevation.FOUR}
                              className="background-primary text-lg-left mb-3">
                            <div className="h3" style={{fontFamily:'Retroholic', fontSize:45}}>How does it work?</div>
                            <div className="p">The website's main page consists in a list of products that follows the retro theme. Here you can search for those pieces missing from your collection ( from posters, books to something even bigger, like a car!). Once you find them, you can place an order. The seller will receive an email about your order. He can  choose then whether to accept  or deny it. You’ll be notified by email about his choice: if he accepts it, you’ll receive his contact information. But be careful! He will receive yours as well, so no scamming can take place. 
However, in order to use all our functionalities, you must first create an account. By creating one, you admit to giving out your TRUE personal information (don’t worry, we cannot see them :) ). They can later be used during the exchange of products. 
Piazeta reserves its right to eliminate any of the users who don’t follow the Terms & Conditions imposed.                      

                            </div>
                        </Card>
                        <Card interactive={false} elevation={Elevation.FOUR}
                              className="background-primary text-lg-left mb-3">
                            <div className="h3" style={{fontFamily:'Retroholic', fontSize:45}}>The Reason</div>
                            <div className="p">The website's main page consists in a list of products that follows the retro theme. Here you can search for those pieces missing from your collection ( from posters, books to something even bigger, like a car!). Once you find them, you can place an order. The seller will receive an email about your order. He can  choose then whether to accept  or deny it. You’ll be notified by email about his choice: if he accepts it, you’ll receive his contact information. But be careful! He will receive yours as well, so no scamming can take place. 
However, in order to use all our functionalities, you must first create an account. By creating one, you admit to giving out your TRUE personal information (don’t worry, we cannot see them :) ). They can later be used during the exchange of products. 
Piazeta reserves its right to eliminate any of the users who don’t follow the Terms & Conditions imposed.                      

                            </div>
                        </Card>
                        <Card interactive={false} elevation={Elevation.FOUR}
                              className="background-primary text-lg-left mb-3">
                            <div className="h3" style={{fontFamily:'Retroholic', fontSize:45}}>Who are we?</div>
                            <div className="p">The website's main page consists in a list of products that follows the retro theme. Here you can search for those pieces missing from your collection ( from posters, books to something even bigger, like a car!). Once you find them, you can place an order. The seller will receive an email about your order. He can  choose then whether to accept  or deny it. You’ll be notified by email about his choice: if he accepts it, you’ll receive his contact information. But be careful! He will receive yours as well, so no scamming can take place. 
However, in order to use all our functionalities, you must first create an account. By creating one, you admit to giving out your TRUE personal information (don’t worry, we cannot see them :) ). They can later be used during the exchange of products. 
Piazeta reserves its right to eliminate any of the users who don’t follow the Terms & Conditions imposed.                      

                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <Card interactive={false} className="background-primary text-lg-left mt-2">
                                        <div className="row">
                                            <div className="col-lg-5">
                                                <img className="img-fluid img-thumbnail" src={Mihnea} alt="Lapu"/>
                                            </div>
                                            <div className="col-lg-7 text-lg-left">
                                                <div className="h2" style={{fontFamily:'Retroholic', fontSize:45}}>Radu Mihnea</div>
                                                <div className="p">I’m an ambitious, calm, friendly and hungry to learn high-school senior. I’ve always been a technology lover. Since I  was little I loved to create stuff on my own and discover new things by playing on the computer. As the years passed by, the passion only kept growing and so did my will to learn.
                                                </div>
                                                <br/>
                                                <div className="p">My first real encounter with programming was in the 9th grade when I signed up for a game-development contest with a couple of my friends. Afterwards, I tried CTFs, long Hackathons and also some algorithmics. 
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="p">Despite that, I felt that nothing took shape and it was hard for me to find the motivation to actually learn something and complete a task. 2 years ago, this situation changed when I dedicated my entire summer to learning React-Native and Node.js to build some mobile apps. Last summer I started learning Laravel and PHP to better my back-end abilities. I also designed two websites for two NPOs. 
                                            </div>
                                            <br/>
                                            <div className="p">Other than programming, I love sports, philosophy, puzzles and spending time with my family. I’m also the President of Interact Club Iasi, where I learned about the importance of team-work, dedication and responsibility, while trying to improve the local community. I truly believe that nothing is impossible if you work hard enough.
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                                <div className="col-lg-6">
                                    <Card interactive={false} className="background-primary text-lg-left mt-2">
                                        <div className="row">
                                            <div className="col-lg-5">
                                                <img className="img-fluid img-thumbnail" src={Lapu} alt="Lapu"/>
                                            </div>
                                            <div className="col-lg-7 text-lg-left">
                                                <div className="h2" style={{fontFamily:'Retroholic', fontSize:45}}>Lapusneanu Andrei</div>
                                                <div className="p">In the last years, my path through the field of technology became increasingly clear. As I feel this is my calling, I never stopped investing work, time and dedication in it. My wish to continue studying at the Faculty of Computer Science in Iasi has been guided by most of my hobbies: programming, robots building and engineering.
                                                </div>
                                                <br/>
                                            </div>
                                            <div className="p">The last 2 years have been essential in my development as  a programmer. Firstly, because I have been part of an Internship from which I gained a lot of experience in coding, mainly in ReactJS and React Native, but also in other auxiliary platforms. This experience showed me what life looks like for a company in the IT field and offered me the opportunity to complete many online tutorials which really helped me to understand more than the basics.
                                            </div>
                                            <br/>
                                            <div className="p">I consider myself a very dedicated, hard-working and sociable person - qualities that helped me build relationships with valuable people from all the fields. Moreover, sports represent a significant part of my life. This  truly contributes to a general state of joy and energy.
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        </Card>
                        <Card interactive={false} elevation={Elevation.FOUR}
                              className="background-primary text-lg-left mb-3">
                            <div className="h3" style={{fontFamily:'Retroholic', fontSize:45}}>The Future</div>
                            <div className="p">Going so far and just giving up isn’t our way of doing things. That being said, we will continue to add different functionalities to the website for the good of our users.  
                                Our plan looks as follows: 
                                <li className="list_future">a review system for users ( so you can better tell
                                whom you’re trading with )</li>
                                <li className="list_future">a more advanced filtering possibility</li> 
                                <li className="list_future">a wider range of
                                notifications ( built in notifications on the website so you won’t have to check your
                                mail every-time )</li>
                                <li className="list_future">a built-in messaging system to eliminate any doubts about the product you’re buying or the person you’re selling to </li>
                                <li className="list_future">and many more… </li>
                                As we said before, this is just an Alpha versions,
                                there might still be things we’ll have to add, so please, send us an
                                email without hesitation, we can’t wait to hear for your feedback.
                            </div>
                            <br/>
                            <div className="p">With much love,</div>
                            <div className="h5" style={{fontFamily:'Retroholic', fontSize:45}}>The Piazeta Team</div>
                        </Card>
                    </div>
                    <div className="col-lg-2"/>
                </div>
            </div>
            {/* <div class="row justify-content-center">
                <img src={back_button} onClick={this.goBack} alt="backbtn_about_us" style={{height:32, backgroundColor:"darkred", borderRadius:15, marginTop: 7}}/>
            </div> */}
            <div class="row mt-3 mb-2">
                    <div class="col">
                        <button style={{borderRadius:20, backgroundColor:'darkred', padding:5, width:100}} onClick={()=>this.props.history.goBack()}>
                        <img src={back_button} style={{height:25}} />Return
                        </button>
                    </div>
                </div>
            <div className="spatiu_gol"/>
            </>
        )
    }
}
