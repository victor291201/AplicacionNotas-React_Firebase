import React from 'react';
import NavBar from '../componentes/NavBar';
import { Link } from 'react-router-dom';

export default function GestionarGruposE (props) {
    return (
        <div style={{height:"100%",width:"100%",padding:0,margin:0}}>
            <NavBar  tipo={1}/>
            <div className='container-fluid px-2 m-0' style={{width:"100%",height:"calc(100% - 50px)"}}>
                <div className='row p-0 m-0 d-flex align-items-center' style={{height:"100%",width:"100%", padding:0}}>
                    <div className='col-md-12  bg-white d-flex flex-column align-items-center ' style={{height:550,borderRadius:7}}>
                        <div className=" d-flex flex-column align-items-center justify-content-start" style={{width:"100%",height:550}}>
                            <h3 className='my-3'>Grupos</h3>
                            <div class="d-flex align-items-center justify-content-between px-3"style={{width:"100%"}}>
                                <p className='d-inline m-0'>Nombre del grupo</p>
                                <div className="d-inline-flex justify-content-center align-items-center m-0 p-0" style={{width:200}}>
                                    <input type="email" placeholder='Buscar' className="form-control mr-n1" style={{height:35}}></input>
                                    <i className="bi bi-search text-muted ml-n4 mr-2"></i>
                                </div>
                            </div>
                            <ul class="list-group list-group-flush my-3" style={{width:"100%",overflowY:"auto"}}>
                                <li class="list-group-item">A second item <i class="bi bi-box-arrow-left text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-box-arrow-left text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-box-arrow-left text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-box-arrow-left text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-box-arrow-left text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-box-arrow-left text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-box-arrow-left text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-box-arrow-left text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-box-arrow-left text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-box-arrow-left text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-box-arrow-left text-danger float-right"></i></li>
                            </ul>
                            <div className="mb-2 d-flex justify-content-center align-items-center"style={{width:"100%",height:40}}>
                                <p className="mb-3"style={{position:"absolute",bottom:0}}>Añadir Grupo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}