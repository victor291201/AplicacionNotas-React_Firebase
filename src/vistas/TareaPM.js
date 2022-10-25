import React,{useState} from 'react';
import NavBar from '../componentes/NavBar';
import { Link } from 'react-router-dom';
import '../styles/styles.css'

export default function TareaPM (props) {
    const [Obj, setObj] = useState({grupos:[
        ["G1 calculo",false],
        ["G2 calculo",false],
        ["G3 calculo",false],
        ["G4 calculo",false],
        ["G5 calculo",false],
        ["G6 calculo",false],
        ["G7 calculo",false],
        ["G8 calculo",false],
        ["G9 calculo",false],
        ["G10 calculo",false],
        ["G11 calculo",false]]
    });
    const Change = (e) => {
        setObj({...Obj, [e.target.name]: e.target.value.toString()});
    }
    const grupos = (e)=>{
        var grup = Obj.grupos;
        grup.forEach(element => {
            if(element[0] === e.target.name){
                element[1]= !element[1];
            }
        });
        console.log(Obj.grupos)
        setObj({...Obj, grupos:grup});
    }
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
                                    <input type="email" placeholder='Titulo' class="form-control"
                                    name="titulo" value={Obj.titulo} onChange={(e)=>Change(e)} ></input>
                                    <textarea className="form-control" placeholder="Descripcion" id="floatingTextarea2"
                                    name="descipcion" value={Obj.descripcion} onChange={(e)=>Change(e)}  style={{height:100}}></textarea>
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
                                    <div className='mt-1 mb-n3 w100p OverY' style={{height:90,display:"grid",gridTemplateColumns:"repeat(2,1fr)",
                                        gridAutoRows:"30px"}}>
                                        {Obj.grupos.map((item)=>{
                                            return(
                                                <div className="form-check d-flex align-items-center">
                                                    <input className="form-check-input" type="checkbox" checked={item[1]}
                                                    name={item[0]} id="defaultCheck1" onChange={(e)=>grupos(e)}/>
                                                    <label className="form-check-label" for="defaultCheck1">
                                                        {item[0]}
                                                    </label>
                                                </div>
                                            )
                                        }
                                        )}
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