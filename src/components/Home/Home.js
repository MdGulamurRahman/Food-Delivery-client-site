import React from 'react';
import './Home.css'
import delivery from '../../images/slider-courier-mask.png'
import Populars from '../Populars/Populars';
import Bounce from 'react-reveal/Bounce';
import Pulse from 'react-reveal/Pulse';
import Convence from '../Convence/Convence';
import Cafes from '../Cafes/Cafes';
import Ceo from '../Ceo/Ceo.js';
import GetPizza from '../GetPizza/GetPizza';
const Home = () => {
    return (
        <>
            <div className="container-fluid overflow-hidden banner">
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-sm-12 col-md-5 col-lg-5 text-area">
                <Pulse>
                   <h1 className="express">Express</h1>
                    <h1 className="delivery-text">Home Delivery</h1>
                    <p className="px-2 py-4 pb-4 text-light">Search Food Extrusion Machine, Top Results From Trusted Resources. Search Food Extrusion Machine, Get Expert Advice and Curated Content on Searchley. Explore the Best Info Now.</p>
                </Pulse>
                    <button className="read-btn">Read more</button>
                </div>
                <div className="col-sm-12 col-md-7 col-lg-7 banner-img">
                <Bounce right>
                <img className="b-img" src={delivery} alt="" />
                </Bounce>
                </div>
            </div>
        </div>
        <Populars></Populars>
        <Convence></Convence>
        <Cafes></Cafes>
        <Ceo></Ceo>
        <GetPizza></GetPizza>
        </>
    );
};

export default Home;