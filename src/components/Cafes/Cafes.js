import React from 'react';
import rest1 from '../../images/rest_01.jpg'
import rest2 from '../../images/rest2.jpg'
import rest3 from '../../images/rest3.jpg'
import rest4 from '../../images/rest4.jpg'
import rest5 from '../../images/rest5.jpg'
const Cafes = () => {
    return (
        <div className="cafe-area">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <img className="img-fluid" src={rest1} alt="" />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                        <img className="img-fluid" src={rest2} alt="" />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                        <img className="img-fluid" src={rest3} alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                        <img className="img-fluid" src={rest4} alt="" />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                        <img className="img-fluid" src={rest5} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cafes;