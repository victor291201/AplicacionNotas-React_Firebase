import React from 'react';
import NavBar from '../componentes/NavBar';
import { Link } from 'react-router-dom';

export default function GestionarGruposM (props) {
    return (
        <div style={{height:"100%",width:"100%",padding:0,margin:0}}>
            <NavBar  tipo={1}/>
            <div className='container-fluid px-2 m-0' style={{width:"100%",height:"calc(100% - 50px)"}}>
                <div className='row p-0 m-0 d-flex align-items-center' style={{height:"100%",width:"100%", padding:0}}>
                    <div className='col-md-12  bg-white d-flex justify-content-around' style={{height:550,borderRadius:7}}>
                        <div className=" d-flex flex-column align-items-center justify-content-start" style={{width:"49%",height:550}}>
                            <h3 className='my-3'>Grupos</h3>
                            <div class="d-flex align-items-center justify-content-between px-3"style={{width:"100%"}}>
                                <p className='d-inline m-0'>Nombre del grupo</p>
                                <div className="d-inline-flex justify-content-center align-items-center m-0 p-0" style={{width:200}}>
                                    <input type="email" placeholder='Buscar' className="form-control mr-n1" style={{height:35}}></input>
                                    <i className="bi bi-search text-muted ml-n4 mr-2"></i>
                                </div>
                            </div>
                            <ul class="list-group list-group-flush my-3" style={{width:"100%",overflowY:"auto"}}>
                                <li class="list-group-item">A second item<i class="bi bi-person-plus-fill text-success float-right"></i></li>
                                <li class="list-group-item">A second item<i class="bi bi-person-plus-fill text-success float-right"></i></li>
                                <li class="list-group-item">A second item<i class="bi bi-person-plus-fill text-success float-right"></i></li>
                                <li class="list-group-item">A second item<i class="bi bi-person-plus-fill text-success float-right"></i></li>
                                <li class="list-group-item">A second item<i class="bi bi-person-plus-fill text-success float-right"></i></li>
                                <li class="list-group-item">A second item<i class="bi bi-person-plus-fill text-success float-right"></i></li>
                                <li class="list-group-item">A second item<i class="bi bi-person-plus-fill text-success float-right"></i></li>
                                <li class="list-group-item">A second item<i class="bi bi-person-plus-fill text-success float-right"></i></li>
                                <li class="list-group-item">A second item<i class="bi bi-person-plus-fill text-success float-right"></i></li>
                                <li class="list-group-item">A second item<i class="bi bi-person-plus-fill text-success float-right"></i></li>
                                <li class="list-group-item">A second item<i class="bi bi-person-plus-fill text-success float-right"></i></li>
                                <li class="list-group-item">A second item<i class="bi bi-person-plus-fill text-success float-right"></i></li>
                            </ul>
                        </div>
                        <div className=" d-flex flex-column align-items-center justify-content-start" style={{width:"49%",height:550}}>
                            <h3 className='my-3'>Estudiantes</h3>
                            <div class="d-flex align-items-center justify-content-between px-3"style={{width:"100%"}}>
                                <p className='d-inline m-0'>Nombre del estudiante</p>
                                <div className="d-inline-flex justify-content-center align-items-center m-0 p-0" style={{width:200}}>
                                    <input type="email" placeholder='Buscar' className="form-control mr-n1" style={{height:35}}></input>
                                    <i className="bi bi-search text-muted ml-n4 mr-2"></i>
                                </div>
                            </div>
                            <ul class="list-group list-group-flush my-3" style={{width:"100%",overflowY:"auto"}}>
                                <li class="list-group-item">A second item <i class="bi bi-person-x-fill text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-person-x-fill text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-person-x-fill text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-person-x-fill text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-person-x-fill text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-person-x-fill text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-person-x-fill text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-person-x-fill text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-person-x-fill text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-person-x-fill text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-person-x-fill text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-person-x-fill text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-person-x-fill text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-person-x-fill text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-person-x-fill text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-person-x-fill text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-person-x-fill text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-person-x-fill text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-person-x-fill text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-person-x-fill text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-person-x-fill text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-person-x-fill text-danger float-right"></i></li>
                                <li class="list-group-item">A second item <i class="bi bi-person-x-fill text-danger float-right"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}