import React from 'react';
import './NotFound.css'
import not from '../../images/not.png'
import { useHistory } from 'react-router';
const NotFound = () => {
    const history = useHistory()
    const homeFoundHandler = ()=>{
        history.push('/home')
    }
    const backFoundHandler = ()=>{
        history.push('/services')
    }
    return (
        <div className="overflow-hidden notFound">
            <img src={not} alt="" />
            <button onClick={homeFoundHandler} className="me-5 button1">Home Page</button>
            <button onClick={backFoundHandler} className="button2">Back</button>
        </div>
    );
};

export default NotFound;