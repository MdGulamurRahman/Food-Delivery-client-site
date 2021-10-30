import React from 'react';
import rest1 from '../../images/rest_01.jpg'
import rest2 from '../../images/rest2.jpg'
import rest3 from '../../images/rest3.jpg'
import rest4 from '../../images/rest4.jpg'
import rest5 from '../../images/rest5.jpg'
import { Card } from 'react-bootstrap';
const Cafes = () => {
    return (
        <div className="overflow-hidden cafe-area">
            <h1 className="py-5 text-center text-light fw-bold"style={{fontSize: "50px"}}>CAFE & <span className="all-clr">RESTAURANTS</span></h1>
            <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-sm-12 col-md-6 col-lg-6 bg-image hover-zoom">
                <Card>
                    <Card.Img variant="top" src={rest1} />
                </Card>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="row">
                        <div className="mb-5 col-sm-12 col-md-6 col-lg-6 bg-image hover-zoom">
                        <Card>
                         <Card.Img variant="top" src={rest2} />
                        </Card>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 bg-image hover-zoom">
                        <Card>
                         <Card.Img variant="top" src={rest3} />
                       </Card>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 bg-image hover-zoom">
                        <Card>
                         <Card.Img variant="top" src={rest4} />
                        </Card>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 bg-image hover-zoom">
                        <Card>
                          <Card.Img variant="top" src={rest5} />
                        </Card>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Cafes;