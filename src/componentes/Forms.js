import React from 'react';
import { Link } from 'react-router-dom';

export default function Forms (props) {
    if(props.tipo === "estudiante"){
        return (
            <div className='container-fluid' style={{height:"100vh"}}>
                <div className='row' style={{height:"100vh"}}>
                    <div className='col-md-12 d-flex justify-content-center align-items-center'>
                        <div className="card" style={{width:400,height:200}}>
                            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                <h5 className="card-title mb-1">Añadir estudiante</h5>
                                <div className='my-3 d-flex flex-column justify-content-around align-items-center' style={{width:300,height:120}}>
                                    <input type="email" placeholder='Insertar codigo del estudiante' class="form-control"></input>
                                </div>
                                <button className='btn btn-danger mt-1'><Link to="/">Añadir</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className='container-fluid' style={{height:"100vh"}}>
            <div className='row' style={{height:"100vh"}}>
                <div className='col-md-12 d-flex justify-content-center align-items-center'>
                    <div className="card" style={{width:400,height:200}}>
                        <div className="card-body d-flex flex-column justify-content-center align-items-center">
                            <h5 className="card-title mb-1">Añadir grupo</h5>
                            <div className='my-3 d-flex flex-column justify-content-around align-items-center' style={{width:300,height:120}}>
                                <input type="email" placeholder='Insertar codigo del grupo' class="form-control"></input>
                            </div>
                            <button className='btn btn-danger mt-1'><Link to="/">Añadir</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
}