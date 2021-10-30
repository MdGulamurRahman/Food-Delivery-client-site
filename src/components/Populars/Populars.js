import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Populars.css'
import Zoom from 'react-reveal/Zoom';

const Populars = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/allProducts")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return ( 
        <div className="pt-5 overflow-hidden">
            <h1 className="py-5 text-center text-light fw-bold"style={{fontSize: "50px"}}>POPULAR <span className="all-clr">FAST FOODS</span></h1>
            <div className="container pt-2">
            <Row xs={1} md={3} className="g-4">
                {
                    products.map(pd => 
                 <Zoom>
             <CardGroup>
                <Card className="work-card">
                    <Card.Img className="p-img" src={pd.img} />
                    <Card.Body>
                    <Card.Text className="ps-4">
                        {pd.star}
                    </Card.Text>
                    <Card.Title className="text-success fw-bold ps-4"><h4>{pd.name}</h4></Card.Title>
                    <Card.Title className="ps-4">Price: {pd?.price}</Card.Title>
                    <Card.Text >
                    {pd.details.slice(0,120)}
                    </Card.Text>
                    </Card.Body>
                    <Card.Text>
                    <Button className="mb-5 btn btn-danger ms-2">Add To Cart</Button>
                    <Link to={`/details/${pd._id}`}><Button className="mb-5 btn btn-dark d-btn">Details</Button></Link>
                    </Card.Text>
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

export default Populars;