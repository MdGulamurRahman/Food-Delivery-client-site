import React from 'react';
import './Register.css'
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faKey, faCamera} from '@fortawesome/free-solid-svg-icons'
import { Link} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const {error, getEmail, getPassword, registerHandler,getName, getPhoto, getNumber} = useAuth()
    return (
        <div className="sign-up">
           <div className="container sign-container">
               <div className="text-center">
                    <h1 className="text-light fw-bold">PLEASE <span className="text-clr">SIGN UP</span></h1>
                    <p className="text-light">Sign Up with Email & Password</p>
                    <p>{error}</p>
               </div>
               <div className="row">
                   <div className="col sign-card">
                   <Form onSubmit={registerHandler}>
                   <InputGroup className="mx-auto w-50" onSubmit={''}>
                        <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faUser}/></InputGroup.Text>
                        <FormControl
                        onBlur={getName}
                        required
                        type="text"
                        placeholder="Name"
                        aria-label="name"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                   <InputGroup className="mx-auto my-2 w-50">
                        <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faEnvelope}/></InputGroup.Text>
                        <FormControl
                        required
                         type="email"
                        onBlur={getEmail}
                        placeholder="Email"
                        aria-label="email"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                   <InputGroup className="mx-auto w-50">
                        <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faKey}/></InputGroup.Text>
                        <FormControl
                        required
                        onBlur={getPassword}
                         type="password"
                        placeholder="Password"
                        aria-label="password"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                   <InputGroup className="mx-auto my-2 w-50">
                        <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faKey}/></InputGroup.Text>
                        <FormControl
                        required
                        onBlur={getNumber}
                         type="number"
                        placeholder="Number"
                        aria-label="number"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                   <InputGroup className="mx-auto my-2 w-50">
                        <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faCamera}/></InputGroup.Text>
                        <FormControl
                        onBlur={getPhoto}
                        required
                        placeholder="photoURL"
                        aria-label="photoURL"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <Link to="/login" className="text-center text-decoration-none text-clr"><p>Already have an Account? Please Login!</p></Link>
                    <button type="submit" className="sign-btn w-25">Sign Up</button>
                   </Form>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Register;