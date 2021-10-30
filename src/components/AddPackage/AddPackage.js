import React from 'react';
import { useForm } from 'react-hook-form';

const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        fetch('http://localhost:5000/addSinglePackage', {
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
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", )} placeholder="name" /> <br />
            <input type="number"{...register("price")} placeholder="price"/> <br />
            <input type="text" {...register("image")} placeholder="image" /> <br />
            <input type="text" {...register("description")} placeholder="description" /> <br />
            <input type="submit" />
            </form>
        </div>
    );
};

export default AddPackage;