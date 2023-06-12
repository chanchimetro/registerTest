import React, { useState } from 'react';
import axios from 'axios';

import './Register.css';

let url = "https://10.152.2.102:4433/api/auth/registro";

async function postData(url = "", data = {}) {
  const resp = axios.post(url, data);
  //console.log("POSTDATA ", resp);
  return resp;
}

function Register() {
    function handleChanges(e) {
      e.preventDefault();
      let data = {
        email: e.target.email.value,
        nombreusuario: e.target.username.value,
        contrasenna: e.target.password.value,
        tipousuario: "Prestatario"
      };
      console.log(JSON.stringify(data))
      console.log(postData(url, data));
    }

  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-5">
            <div className="card">
                <h2 className="card-title text-center">Register</h2>
                <div className="card-body py-md-4">
                        <form onSubmit={(e) => handleChanges(e)}>
                            <div className="form-group">
                                <input type="text" className="form-control" id="username" placeholder="Username"/>
                                <input type="email" className="form-control" id="email" placeholder="Email"/>
                                <input type="password" className="form-control" id="password" placeholder="Password"/>
                            </div>
                            <div className="d-flex flex-row align-items-center justify-content-between">
                                <a href="#">Login</a>
                                <button className="btn btn-primary" type='submit'>Create Account</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );}
export default Register;