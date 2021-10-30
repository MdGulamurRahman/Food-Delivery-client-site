import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [manageOrders, setMangeOrders] = useState([]);
    const [status, setStatus] = useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/manageAllOrders')
        .then(res => res.json())
        .then(result => {
            setMangeOrders(result)
            setStatus(true)
            console.log(result);
        })
    },[status])
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
                  setStatus(false)
                }
            })
        }
       
    }

    const handleUpdate = (id, index) =>{
        fetch(`http://localhost:5000/updateOrder/${id}`, {
            method: "PUT"
        })
        .then(res => res.json())
        .then(result => console.log(result))
    }
    
    return (
        <div>
            <h1>MANAGE YOUR ORDERS{}</h1>
            <div class=" mb-3 container" style={{ maxWidth: "800px" }}>
                <div >
                    {
                        manageOrders.map((orders, index) => (
                            <div class="row g-0 m-3 border border-primary p-3 rounded">
                                <div class="col-md-4">
                                    <img src={orders?.product.image} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{orders?.name}</h5>
                                        <p class="card-text">{orders?.service_shortdescribe}</p>
                                        {orders.status === "pending" ? <h5 class="card-text"><small class="text-danger">{orders?.status}</small></h5>:<h5 class="card-text"><small class="text-success">{orders?.status}</small></h5>}
                                        <h6 className="text-success">E-mail: {orders?.email}</h6>
                                        <div>
                                            <button onClick={() => handleOrderDelete(orders?._id)} className="btn btn-danger">Delete</button>
                                            <button onClick={() => handleUpdate(orders?._id)} className="btn btn-warning ms-2">Update Status</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            
        </div>
    );
};

export default ManageAllOrders;