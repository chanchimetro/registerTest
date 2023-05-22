import React, {useState} from 'react';
import './Register.css';

function Register() {
    const [formValues, setFormValues] = UseState({});

  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-5">
            <div className="card">
                <h2 className="card-title text-center">Register</h2>
                <div className="card-body py-md-4">
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" id="name" placeholder="Name"/>
                                <input type="text" className="form-control" id="username" placeholder="Username"/>
                                <input type="email" className="form-control" id="email" placeholder="Email"/>
                                <input type="text" className="form-control" id="wallet" placeholder="Wallet"/>
                                <input type="password" className="form-control" id="password" placeholder="Password"/>
                                <input type="password" className="form-control" id="confirm-password" placeholder="Confirm password"/>
                            </div>
                            <div className="d-flex flex-row align-items-center justify-content-between">
                                <a href="#">Login</a>
                                <button className="btn btn-primary" onClick={handleChanges}>Create Account</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );}
export default Register;