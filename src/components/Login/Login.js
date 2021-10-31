import React from 'react';
import './Login.css';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faLock, faCheck} from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation, useHistory} from 'react-router-dom';
import google from '../../images/google.png'
import github from '../../images/github.png'
import facebook from '../../images/facebook.png'
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {googleSignIn,facebookSignIn,githubSignIn, signInEmailAndPass, getEmail,getPassword, setIsLoading,setError} = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/home'
    //google handler
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
    //facebook handler
    const facebookHandler = ()=>{
        facebookSignIn()
        .then(result => {
            history.push(redirect_url)
        })
        .finally(()=> setIsLoading(false))
        .catch(err => {
            setError(err.message)
        })
    }
    //github handler
    const githubHandler = () => {
        githubSignIn()
        .then(result => {
            history.push(redirect_url)
        })
        .finally(()=> setIsLoading(false))
        .catch(err => {
            setError(err.message)
        })
    }
    
    return (
        <div className="login-area">
            <div className="container login-container">
                <div className="row">
                    <div className="col login-card">
                        <div className="text-center">
                            <h1 className="text-light fw-bold">PLEASE <span className="all-clr">LOGIN</span> ACCOUNT</h1>
                            <p className="text-light">Login with Email & Password</p>
                        </div>
                        <div>
                            <Form onSubmit={signInEmailAndPass}>
                                <InputGroup className="mx-auto mb-3 w-50">
                                    <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faEnvelope} /></InputGroup.Text>
                                    <FormControl
                                    onBlur={getEmail}
                                    className="py-2"
                                    required
                                    type="email"
                                    placeholder="Email"
                                    aria-label="email"
                                    aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <InputGroup className="mx-auto mb-3 w-50">
                                    <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faLock} /></InputGroup.Text>
                                    <FormControl
                                    onBlur={getPassword}
                                    className="py-2"
                                    required
                                    type="password"
                                    placeholder="Password"
                                    aria-label="password"
                                    aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                                <button className="mb-3 w-25 login-btn" type="submit">
                                    Login
                                </button>
                            </Form>
                            <div>
                                <Link className="text-center text-decoration-none all-clr" to="/register"><p>Forgot your password? Please Sign up!</p></Link>
                                <h6 className="text-center text-light">Or <FontAwesomeIcon className="text-clr" icon={faCheck} /></h6>
                                <p className="text-center text-light">Login with</p>
                            </div>
                            <div className="google-area">
                            <button onClick={googleHandler} className="g-btn">
                                <img width="45px" height="45px" src={google} alt="" />
                            </button>
                            <button onClick={githubHandler} className="mx-4 g-btn">
                                <img width="45px" height="45px" src={github} alt="" />
                            </button>
                            <button onClick={facebookHandler} className="g-btn">
                                <img width="45px" height="45px" src={facebook} alt="" />
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;