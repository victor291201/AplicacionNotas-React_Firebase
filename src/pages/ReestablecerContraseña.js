import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css'

export default function ReestablecerContraseña (props) {
    return (
        <div className='container-fluid h100'>
            <div className='row h100'>
                <div className='col-md-12 d-flex justify-content-center align-items-center'>
                    <div className="card" style={{width:400,height:300}}>
                        <div className="card-body d-flex flex-column justify-content-center align-items-center">
                            <h5 className="card-title mb-1">Reestablecer Contraseña</h5>
                            <div className='my-4 d-flex flex-column justify-content-around align-items-center' style={{width:300,height:120}}>
                                <input type="email" placeholder='Insertar codigo de verificacion' class="form-control"></input>
                                <input type="password" placeholder='Insertar nueva contraseña' class="form-control"></input>
                            </div>
                            <button className='btn btn-danger mt-1'><Link to="/" className='NLink'>Reestablecer</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}