import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Details = () => {
    const {productId} = useParams()
    const {user} = useAuth()
    const [product, setProduct] = useState({});
    useEffect(()=>{
    const url = `http://localhost:5000/singleProduct/${productId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setProduct(data))
   },[])

   const { register, handleSubmit, reset } = useForm();
   const onSubmit = data => {
       data.product = product;
       data.email = user?.email;
       data.product_name = product?.name;
       data.product_image = product?.image;
       data.product_shortdescribe = product?.shortdescribe;
       data.status = "pending"
       console.log(data)
    fetch("http://localhost:5000/addService", {
        method: "POST",
        headers: {"content-type" : "application/json"},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        if(result.acknowledged){
            alert('Successfully Added');
           reset()
        }
    })

   } 
    return (
        <div className="details-area">
            <h1>this is the details: {product.name}</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-5">
                    <CardGroup>
                        <Card>
                            <Card.Img height="400px" variant="top" src={product.img} />
                            <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Title>{product.price}</Card.Title>
                            <Card.Text>
                               {product.details}
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                    </div>
                    <div className="col-sm-12 col-md-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <input  {...register("name", )} placeholder="name" /> <br />
                    <input type="email"{...register("email")} placeholder="email"/> <br />
                    <input type="number"{...register("number")} placeholder="number"/> <br />
                    <input type="address"{...register("address")} placeholder="address"/> <br />
                    <input type="submit" />
                    </form>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Details;