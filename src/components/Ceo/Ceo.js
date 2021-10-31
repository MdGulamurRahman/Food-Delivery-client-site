import React, { useEffect, useState } from 'react';
import './Ceo.css'
import { Card, CardGroup, Row} from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
const CEO = () => {
    const [ceo, setCeo] = useState([]);
    useEffect(()=>{
        fetch("ceo.json")
        .then(res => res.json())
        .then(data => setCeo(data))
    },[])
    return (
        <div className="py-5 overflow-hidden founder">
            <h1 className="py-5 text-center text-light fw-bold"style={{fontSize: "50px"}}>THE <span className="all-clr">FOUNDER</span></h1>
            <div className="container overflow-hidden">
            <Row xs={1} md={3} className="g-4">
                {
                    ceo.map(pd => 
                        <Zoom>
                    <CardGroup>
                        <Card>
                        <Card.Img className=" rounded-circle c-img" variant="top" src={pd.img} />
                        <Card.Body>
                        <Card.Title className="text-center fw-bold">{pd.name}</Card.Title>
                        <Card.Title className="text-center fw-bold text-secondary">{pd.ceo}</Card.Title>
                        <div className="c-icon">
                        <i className="fab fa-facebook all-icon"></i>
                        <i className="mx-2 fab fa-twitter all-icon"></i>
                        <i className="fab fa-youtube all-icon"></i>
                        </div>
                        </Card.Body>
                    </Card>
                    </CardGroup>
                    </Zoom>
                    )
                }
            </Row>
            </div>
            </div>
       
    );
};

export default CEO;

