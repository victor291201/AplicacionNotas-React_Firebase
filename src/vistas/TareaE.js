import React,{useState,useContext,useEffect} from 'react';
import NavBar from '../componentes/NavBar';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { DataContext } from '../context/Context';
import '../styles/styles.css'

export default function TareaE (props) {
    const { id } = useParams();
    const {CrearNota,GlobalState,ActualizarNota} = useContext(DataContext);
    const [Obj, setObj] = useState({});
    const Change = (e) => {
        console.log(Obj);
        setObj({...Obj, [e.target.name]: e.target.value.toString()});
    }
    useEffect(() => {
        if(id!==undefined){
            var not = GlobalState.user.notas.filter(elm=>{
                if(elm.id.toString()===id.toString()){
                    return elm
                }
                return null
            })
            console.log(Obj)
            setObj({
                titulo:not[0].titulo,
                descripcion:not[0].descripcion,
                fecha:not[0].fecha.slice(0,10),
                hora:not[0].fecha.slice(11,16),
                prioridad:not[0].prioridad
            })
        }
      },[]);
    if(id === undefined){
        return (
            <div className="h100p w100p p-0 m-0">
                <NavBar tipo={1}/>
                <div className='container-fluid p-0 m-0 w100p hcalc'>
                    <div className='row p-0 m-0 w100p h100p'>
                        <div className='col-md-12 d-flex justify-content-center align-items-center'>
                            <div className="card" style={{width:400,height:470}}>
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <div className='my-4 d-flex flex-column justify-content-around align-items-center' style={{width:300,height:400}}>
                                    <h5 className="card-title mb-3 mt-n3">Crear pendiente</h5>
                                        <input type="email" placeholder='Titulo' class="form-control"
                                        name="titulo" value={Obj.titulo} onChange={(e)=>Change(e)} ></input>
                                        <textarea className="form-control" placeholder="Descripcion" id="floatingTextarea2"
                                        name="descripcion" value={Obj.descripcion} onChange={(e)=>Change(e)} style={{height:100}}></textarea>
                                        <select className="form-control" placeholder='Prioridad' id="prioridad"
                                        name="prioridad" value={Obj.prioridad} onChange={(e)=>Change(e)} >
                                            <option disabled selected>Prioridad</option>
                                            <option value="Alta">Alta</option>
                                            <option value="Media">Media</option>
                                            <option value="Baja">Baja</option>
                                        </select>
                                        <input type="date" className='Border' id="start" 
                                        style={{borderRadius:"5px",width:140,height:37,padding:12,color:"#505050"}}
                                        name="fecha" value={Obj.fecha} onChange={(e)=>Change(e)} 
                                        min="2018-01-01" max="2030-12-31"/>
                                        <input type="time" className='Border' style={{borderRadius:"5px",width:140,height:37,padding:12,color:"#505050"}}
                                        name="hora" value={Obj.hora} onChange={(e)=>Change(e)} ></input>
                                    </div>
                                    <button className='btn btn-danger mt-n1 mb-2' onClick={()=>CrearNota(Obj)}>
                                        Crear
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className="h100p w100p p-0 m-0">
                <NavBar tipo={1}/>
                <div className='container-fluid p-0 m-0 w100p hcalc'>
                    <div className='row p-0 m-0 w100p h100p'>
                        <div className='col-md-12 d-flex justify-content-center align-items-center'>
                            <div className="card" style={{width:400,height:470}}>
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <div className='my-4 d-flex flex-column justify-content-around align-items-center' style={{width:300,height:400}}>
                                    <h5 className="card-title mb-3 mt-n3">Actualizar pendiente</h5>
                                        <input type="email" placeholder='Titulo' class="form-control"
                                        name="titulo" value={Obj.titulo} onChange={(e)=>Change(e)} ></input>
                                        <textarea className="form-control" placeholder="Descripcion" id="floatingTextarea2"
                                        name="descripcion" value={Obj.descripcion} onChange={(e)=>Change(e)} style={{height:100}}></textarea>
                                        <select className="form-control" placeholder='Prioridad' id="prioridad"
                                        name="prioridad" value={Obj.prioridad} onChange={(e)=>Change(e)} >
                                            <option disabled selected>Prioridad</option>
                                            <option value="Alta">Alta</option>
                                            <option value="Media">Media</option>
                                            <option value="Baja">Baja</option>
                                        </select>
                                        <input type="date" className='Border' id="start" 
                                        style={{borderRadius:"5px",width:140,height:37,padding:12,color:"#505050"}}
                                        name="fecha" value={Obj.fecha} onChange={(e)=>Change(e)} 
                                        min="2018-01-01" max="2030-12-31"/>
                                        <input type="time" className='Border' style={{borderRadius:"5px",width:140,height:37,padding:12,color:"#505050"}}
                                        name="hora" value={Obj.hora} onChange={(e)=>Change(e)} ></input>
                                    </div>
                                    <button className='btn btn-danger mt-n1 mb-2' onClick={()=>ActualizarNota(Obj,id)}>
                                        Actualizar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}