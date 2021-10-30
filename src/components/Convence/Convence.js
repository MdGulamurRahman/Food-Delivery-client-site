import React from 'react';
import './Convence.css'
import happy from '../../images/happy.png'
import { Carousel } from 'react-bootstrap';
const Convence = () => {
    return (
        <div className="overflow-hidden con-area">
            <h1 className="text-light text-center py-5"><span className="all-clr">CONVENIENS</span> STORES</h1>
            <div className="container pt-3">
            <div className="row">
                <div className="col-sm-12 col-md-5 col-lg-5">
                    <img className="con-img" src={happy} alt="" />
                </div>
                <div className="col-sm-12 col-md-7 col-lg-7 pt-5 ps-5 all-con-text">
                  <h5 className="text-light">TESTIMONIAL</h5>
                    <h1 className="con-text all-clr">Nearby Grocery And</h1>
                    <h1 className="con-text text-light">Convenience Stores,</h1>
                     <h1 className="con-text text-white-50">And More</h1>
                     <h6 className="text-white-50 mt-5">Fast food is a type of mass-produced food designed for commercial resale and with a strong priority placed on "speed of service" versus other relevant factors involved in culinary science.. Fast food restaurants are traditionally distinguished by their ability to serve food via a drive-through.Fast food is the term for a kind of food that people eat from a restaurant, cafe or take-out where food is prepared and served quickly.It is mass-produced food. It is often pre-prepared and delivered to the shop ready for frying or boiling.</h6>
                     <button className="con-btn mt-3">Learn More</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Convence;