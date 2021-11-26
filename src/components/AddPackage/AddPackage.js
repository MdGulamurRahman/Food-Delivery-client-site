import React from 'react';
import { useForm } from 'react-hook-form';
import './AddPackage.css'
import byCycle from '../../images/by.png'
import Fade from 'react-reveal/Fade';
const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        fetch('https://howling-scarecrow-84354.herokuapp.com/addSinglePackage', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            if(result.insertedId){
                alert('Successfully added');
                reset()
            }
        })
        console.log(data)};
    return (
        <div className="container overflow-hidden">
            <h1 className="py-5 text-center text-light">ADD A NEW <span className="all-clr">FOOD PACKAGE</span></h1>
            <div className="row d-flex align-items-center justify-content-center">
                <div className="pt-3 col-sm-12 col-md-6 col-lg-6">
                <Fade left>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input className="input-field" {...register("name", )} placeholder="name" required/> <br />
                <input className="my-2 input-field" {...register("email", )} placeholder="email" required/> <br />
                <input className=" input-field" {...register("address", )} placeholder="address" required/> <br />
                <input className="my-2 input-field" type="number"{...register("number")} placeholder="phone" required/> <br />
                <input className="input-field" type="text" {...register("img")} placeholder="photoURL" required/> <br />
                <input className="my-2 input-field" type="text" {...register("details")} placeholder="description" required/> <br />
                <input className="input-btn" type="submit" />
                </form>
                </Fade>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                <Fade right>
                    <img className="img-fluid cycle-img" src={byCycle} alt="" />
                </Fade>
                </div>
            </div>
        </div>
    );
};

export default AddPackage;