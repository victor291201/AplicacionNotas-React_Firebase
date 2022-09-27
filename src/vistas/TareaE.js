import React from 'react';
import NavBar from '../componentes/NavBar';

export default function TareaE (props) {
    return (
        
        <div style={{height:"100%",width:"100%",padding:0,margin:0}}>
            <NavBar/>
            <div className='container-fluid p-0 m-0' style={{width:"100%",height:"calc(100% - 50px)"}}>
                <div className='row p-0 m-0' style={{height:"100%",width:"100%"}}>
                    <div className='col-md-12 d-flex justify-content-center align-items-center'>
                        <div className="card" style={{width:400,height:470}}>
                            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                <div className='my-4 d-flex flex-column justify-content-around align-items-center' style={{width:300,height:400}}>
                                <h5 className="card-title mb-3 mt-n3">Crear pendiente</h5>
                                    <input type="email" placeholder='Titulo' class="form-control"></input>
                                    <textarea className="form-control" placeholder="Descripcion" id="floatingTextarea2" style={{height:100}}></textarea>
                                    <select className="form-control" placeholder='Prioridad' id="prioridad">
                                        <option disabled selected>Prioridad</option>
                                        <option>Alta</option>
                                        <option>Media</option>
                                        <option>Baja</option>
                                    </select>
                                    <input type="date" id="start" name="trip-start" style={{border:"1px solid #BDBDBD",borderRadius:"5px",width:140,height:37,padding:12,color:"#505050"}}
                                    value="2018-07-22"
                                    min="2018-01-01" max="2030-12-31"/>
                                    <input type="time" name="eta"  style={{border:"1px solid #BDBDBD",borderRadius:"5px",width:140,height:37,padding:12,color:"#505050"}}></input>
                                </div>
                                <button className='btn btn-danger mt-n1 mb-2'>Crear</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}