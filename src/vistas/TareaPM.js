import React from 'react';
import NavBar from '../componentes/NavBar';
import { Link } from 'react-router-dom';
import '../styles/styles.css'

export default function TareaPM (props) {
    return (
        <div className='h100p w100p p-0 m-0'>
            <NavBar  tipo={1}/>
            <div className='container-fluid px-2 m-0 w100p hcalc'>
                <div className='row p-0 m-0 h100p w100p'>
                    <div className='col-md-12 d-flex justify-content-center align-items-center'>
                        <div className="card" style={{width:400,height:530}}>
                            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                <div className='my-2 d-flex flex-column justify-content-around align-items-center' style={{width:300,height:430}}>
                                <h5 className="card-title mb-1 mt-n4">Crear pendiente</h5>
                                    <input type="email" placeholder='Titulo' class="form-control"></input>
                                    <textarea className="form-control" placeholder="Descripcion" id="floatingTextarea2" style={{height:100}}></textarea>
                                    <select className="form-control" placeholder='Prioridad' id="prioridad">
                                        <option disabled selected>Prioridad</option>
                                        <option>Alta</option>
                                        <option>Media</option>
                                        <option>Baja</option>
                                    </select>
                                    <input type="date" id="start" name="trip-start" className='Border' style={{borderRadius:"5px",width:140,height:37,padding:12,color:"#505050"}}
                                    value="2018-07-22"
                                    min="2018-01-01" max="2030-12-31"/>
                                    <input type="time" name="eta" className='Border' style={{borderRadius:"5px",width:140,height:37,padding:12,color:"#505050"}}></input>
                                    <div className='mt-1 mb-n3 w100p OverY' style={{height:90,display:"grid",gridTemplateColumns:"repeat(2,1fr)",
                                                                    gridAutoRows:"30px"}}>
                                        <div className="form-check d-flex align-items-center">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                            <label className="form-check-label" for="defaultCheck1">
                                                G1 calculo
                                            </label>
                                        </div><div className="form-check d-flex align-items-center">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                            <label className="form-check-label" for="defaultCheck1">
                                                G2 calculo
                                            </label>
                                        </div><div className="form-check d-flex align-items-center">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                            <label className="form-check-label" for="defaultCheck1">
                                                G3 calculo
                                            </label>
                                        </div><div className="form-check d-flex align-items-center">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                            <label className="form-check-label" for="defaultCheck1">
                                                G1 ecuaciones
                                            </label>
                                        </div><div className="form-check d-flex align-items-center">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                            <label className="form-check-label" for="defaultCheck1">
                                                G2 ecuaciones
                                            </label>
                                        </div><div className="form-check d-flex align-items-center">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                            <label className="form-check-label" for="defaultCheck1">
                                                G3 ecuaciones
                                            </label>
                                        </div><div className="form-check d-flex align-items-center">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                            <label className="form-check-label" for="defaultCheck1">
                                                G4 ecuaciones
                                            </label>
                                        </div><div className="form-check d-flex align-items-center">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                            <label className="form-check-label" for="defaultCheck1">
                                                G1 fisica
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <button className='btn btn-danger mt-3 mb-n1'>
                                    <Link to="/" className='NLink'>Crear</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}