import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';

const Order = (props) => {
    const {name, number, email, address, _id} = props.order;
    const {img} = props.order.product;
    const handleOrderDelete = id =>{
        const proceed = window.confirm("Are you want to delete?")
        if(proceed){
            const url = `http://localhost:5000/deleteOrder/${id}`
            fetch(url, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(result => {
                if(result.deletedCount){
                    alert('Successfully Order deleted')
                  
                }
            })
        }
       
    }
    return (
        <CardGroup>
            <Card>
                <Card.Img height="300px" variant="top" src={img} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  {number}
                </Card.Text>
                <Card.Text>
                  {email}
                </Card.Text>
                <Card.Text>
                 {address}
                </Card.Text>
                </Card.Body>
                <Button onClick={()=> handleOrderDelete(_id)} className="btn btn-dark">Order Delete</Button>
            </Card>
        </CardGroup>
    );
};

export default Order;