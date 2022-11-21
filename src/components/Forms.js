import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css'
import "bootstrap-icons/font/bootstrap-icons.css";

/**this component was created with the function of providing a kind of input to manage sensitive data*/
export default function Forms (props) {
    const [Id, setId] = useState("");
    const Change = (e) => {
        console.log(e.target.value)
        setId(e.target.value.toString());
    }
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
                                    <input type="email" value={Id} placeholder='Insertar codigo del grupo' 
                                    onChange={(e)=>Change(e)} 
                                    class="form-control"/>
                                </div>
                                <button className='btn btn-danger mt-1' onClick={()=>props.send(Id)}>Añadir</button>
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
                                <input type="email" placeholder='Insertar el id del estudiante' class="form-control"
                                value={Id} onChange={(e)=>Change(e)} ></input>
                            </div>
                                <button className='btn btn-danger mt-1' onClick={()=>props.send(Id)}>Añadir</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
}