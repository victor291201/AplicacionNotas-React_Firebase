import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css'

export default function IniciarSesion (props) {
    return (
        <div className='container-fluid' style={{height:"100vh"}}>
            <div className='row' style={{height:"100vh"}}>
                <div className='col-md-12 d-flex justify-content-center align-items-center'>
                    <div className="card" style={{width:400,height:350}}>
                        <div className="card-body d-flex flex-column justify-content-center align-items-center">
                            <h5 className="card-title mb-1">Iniciar Sesion</h5>
                            <div className='my-3 d-flex flex-column justify-content-around align-items-center' style={{width:300,height:120}}>
                                <input type="email" placeholder='Insertar codigo o correo' class="form-control"></input>
                                <input type="password" placeholder='Insertar contraseña' class="form-control"></input>
                            </div>
                            <button className='btn btn-danger mt-1'><Link to="/">Iniciar Sesion</Link></button>
                            <div className='mt-4 d-flex flex-column justify-content-center align-items-center' style={{height:50}}>
                                <p className=" m-0 text-muted"><Link to="/ReestablecerContrasena">¿Olvidaste tu contraseña?</Link></p>
                                <p className='m-0'><Link to="/Registrarse" className='NLink'>Registrarte</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}