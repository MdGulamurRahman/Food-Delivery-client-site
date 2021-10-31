import React from 'react';
import './GetPizza.css'
import pizza from '../../images/pizza.png'
const GetPizza = () => {
    return (
        <div className="py-5 container-fluid pizza-area">
            <h1 className="text-center pizza-text fw-bold" style={{fontSize: "60px"}}>GET <span className="all-clr">PIZZA</span></h1>
            <div className="row row-cols-1 row-cols-md-2 ">
                <div className="col all-text">
                    <h1 className="all-clr">Always</h1>
                    <h1 className="pizza-text">the Hottest</h1>
                    <h1 className="pizza-text">Pizza</h1>
                    <p className="pt-2 pb-5">The further back we look in time, the more interesting details we can find about that surrounds pizza. Today this dish is one of the most popular foods on the entire Earth, but that fame and recognition came from the decades of work.</p>
                    <button className="pizza-btn">Get Pizza</button>
                </div>
                <div className="col">
                    <img className="pizza-img" src={pizza} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default GetPizza;