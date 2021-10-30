import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css'
const Login = () => {
    const {googleSignIn, setError, setIsLoading} = useAuth();
    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/home'
    const googleHandler = ()=>{
        googleSignIn()
        .then(result => {
            history.push(redirect_url)
        })
        .finally(()=> setIsLoading(false))
        .catch(err => {
            setError(err.message)
        })
    }
    return (
        <div>
            <Button onClick={googleHandler}>Google Sign Up</Button>
        </div>
    );
};

export default Login;