import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css'

export default function IniciarSesion (props) {
    const [Obj, setObj] = useState({});
    const Change = (e) => {
        setObj({...Obj, [e.target.name]: e.target.value.toString()});
    }
    return (
        <div className='container-fluid h100'>
            <div className='row h100'>
                <div className='col-md-12 d-flex justify-content-center align-items-center'>
                    <div className="card" style={{width:400,height:350}}>
                        <div className="card-body d-flex flex-column justify-content-center align-items-center">
                            <h5 className="card-title mb-1">Iniciar Sesion</h5>
                            <div className='my-3 d-flex flex-column justify-content-around align-items-center' style={{width:300,height:120}}>
                                <input type="email" name="name" placeholder='Insertar codigo o correo' 
                                class="form-control" value={Obj.name} onChange={(e)=>Change(e)}></input>
                                <input type="password" name="password" placeholder='Insertar contraseña' 
                                class="form-control" value={Obj.password} onChange={(e)=>Change(e)}></input>
                            </div>
                            <button className='btn btn-danger mt-1' onClick={()=>props.IniciarSesion(Obj)}>Iniciar Sesion</button>
                            <div className='mt-4 d-flex flex-column justify-content-center align-items-center' style={{height:50}}>
                                <p className=" m-0 text-muted"><Link className='NLink' to="/ReestablecerContrasena">¿Olvidaste tu contraseña?</Link></p>
                                <p className='m-0'><Link to="/Registrarse" className='NLink'>Registrarte</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}