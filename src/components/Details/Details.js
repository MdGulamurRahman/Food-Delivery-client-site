import React from 'react';
import './Details.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faUserTie, faMapMarked} from '@fortawesome/free-solid-svg-icons'

const Details = () => {
    const {productId} = useParams()
    const {user} = useAuth()
    const [product, setProduct] = useState({});
    const [name, setName] = useState("")
    const [email, setemail] = useState("")
    const [number, setNumber] = useState("")
    const [address, setAddress] = useState("")

    useEffect(()=>{
    const url = `https://howling-scarecrow-84354.herokuapp.com/singleProduct/${productId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setProduct(data))
   },[])

   const { handleSubmit, reset } = useForm();
   const onSubmit = data => {
       data.name = name;
       data.email = email;
       data.number = number;
       data.address = address;
       data.product = product;
       data.email = user?.email;
       data.product_name = product?.name;
       data.product_image = product?.image;
       data.product_shortdescribe = product?.shortdescribe;
       data.status = "pending"
       console.log(data)
    fetch("https://howling-scarecrow-84354.herokuapp.com/addService", {
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

   const nameHandler = (e)=>{
       const name = e.target.value;
       setName(name)
   }
   const emailHandler = (e)=>{
       const email = e.target.value;
       setemail(email)
   }
   const numberHandler = (e)=>{
       const number = e.target.value;
       setNumber(number)
   }
   const addressHandler = (e)=>{
       const address = e.target.value;
       setAddress(address)
   }
    return (
        <div className="py-5 details-area">
            
            <div className="container">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                    <h2 className="pt-5 text-center text-light"><span className="all-clr">DETAILS</span> OF THIS FOOD <span className="all-clr"><i class="fas fa-hand-point-down"></i></span></h2>
                    <h3 className="pt-2 pb-4 text-center"><span className=" text-white-50">{product.name}</span></h3>
                    <CardGroup>
                        <Card>
                            <Card.Img height="400px" variant="top" src={product.img} />
                            <Card.Body>
                            <Card.Title className="text-center all-clr fw-bold">{product.name}</Card.Title>
                            <Card.Title className="text-center fw-bold">{product.price}</Card.Title>
                            <Card.Text className="text-center fw-bold text-secondary">
                               {product.details}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <h2 className="text-center text-light form-details">DROP US A <span className="all-clr">MESSAGE</span></h2>
                        <h6 className="pb-2 text-center text-white-50 form-details">We'd Love To Hear From You</h6>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3 row">
                            <label for="name" className="col-sm-2 col-form-label"></label>
                            <div className="input-icon col-sm-10 d-flex align-items-center">
                                <h3 className="all-clr me-2"><FontAwesomeIcon icon={faUserTie} /></h3>
                                <input onBlur={nameHandler} type="name" className="form-control bg-input" id="name" placeholder="name" required/>
                            </div>
                            </div>
                            <div className="mb-3 row">
                            <label for="inputEmail3" className="col-sm-2 col-form-label"></label>
                            <div className="input-icon col-sm-10 d-flex align-items-center">
                            <h3 className="all-clr me-2"><FontAwesomeIcon icon={faEnvelope} /></h3>
                                <input  onBlur={emailHandler} type="email" className="form-control bg-input" id="inputEmail3" placeholder="email" required/>
                            </div>
                            </div>
                            <div className="mb-3 row">
                            <label for="number" className="col-sm-2 col-form-label"></label>
                            <div className="col-sm-10 input-icon d-flex align-items-center">
                            <h3 className="all-clr me-2"><FontAwesomeIcon icon={faPhone} /></h3>
                                <input  onBlur={numberHandler} type="number" className="form-control bg-input" id="number" placeholder="phone" required/>
                            </div>
                            </div>
                            <div className="mb-3 row">
                            <label for="photoUrl" className="col-sm-2 col-form-label"></label>
                            <div className="col-sm-10 input-icon d-flex align-items-center">
                            <h3 className="all-clr me-2"><FontAwesomeIcon icon={faMapMarked} /></h3>
                                <input  onBlur={addressHandler} type="address" className="form-control bg-input" id="address" placeholder="address" required/>
                            </div>
                            </div>
                            <button type="submit" className="contact-btn">Place Order</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Details;