import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css'
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Forms (props) {
    if(props.tipo === "estudiante"){
        return (
            <div className="container-fluid Form" style={{height:"100vh"}}>
                <div className='row' style={{height:"100vh"}}>
                    <div className='col-md-12 d-flex justify-content-center align-items-center'>
                        <div className="card" style={{width:400,height:200}}>
                            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                <div style={{width:"100%"}}>
                                    <i class="bi bi-x float-right mt-n2 CPointer" style={{fontSize:19}} onClick={props.toggle}></i>
                                    <h5 className="card-title mb-1"  style={{width:"100%",textAlign:"center"}}>Añadir grupo</h5>
                                </div>
                                <div className='my-3 d-flex flex-column justify-content-around align-items-center' style={{width:300,height:120}}>
                                    <input type="email" placeholder='Insertar codigo del estudiante' class="form-control"></input>
                                </div>
                                <button className='btn btn-danger mt-1'><Link to="/" className='NLink'>Añadir</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className='container-fluid  Form' style={{height:"100vh"}}>
            <div className='row' style={{height:"100vh"}}>
                <div className='col-md-12 d-flex justify-content-center align-items-center'>
                    <div className="card" style={{width:400,height:200}}>
                        <div className="card-body d-flex flex-column justify-content-center align-items-center">
                            <div style={{width:"100%"}}>
                                <i class="bi bi-x float-right mt-n2 CPointer" style={{fontSize:19}} onClick={props.toggle}></i>
                                <h5 className="card-title mb-1"  style={{width:"100%",textAlign:"center"}}>Añadir estudiante</h5>
                            </div>
                            <div className='my-3 d-flex flex-column justify-content-around align-items-center' style={{width:300,height:120}}>
                                <input type="email" placeholder='Insertar codigo del grupo' class="form-control"></input>
                            </div>
                            <button className='btn btn-danger mt-1'><Link to="/" className='NLink'>Añadir</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
}