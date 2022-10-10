import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css'

export default function Registrarse (props) {
    const [Obj, setObj] = useState({});
    const Change = (e) => {
        setObj({...Obj, [e.target.name]: e.target.value.toString()});
        console.log(Obj)
    }
    function verificacion(){
        if(Obj.contraseña === Obj.contraseña2){
            if(Obj.correo.includes("@")){
                if(Obj.codigo.length == 10){
                    props.Registrarse(Obj);
                }
                else{
                    alert("el codigo no cumple con el formato")
                }
            }
            else{
                alert("el correo no cumple con el formato")
            }
        }
        else{
            alert("las contraseñas no coinciden")
        }
    }
    return (
        <div className='container-fluid h100'>
            <div className='row h100'>
                <div className='col-md-12 d-flex justify-content-center align-items-center'>
                    <div className="card" style={{width:400,height:460}}>
                        <div className="card-body d-flex flex-column justify-content-center align-items-center">
                            <h5 className="card-title mb-1">Registrarse</h5>
                            <div className='my-3 d-flex flex-column justify-content-around align-items-center' style={{width:300,height:300}}>
                                <input type="email" placeholder='Insertar nombre completo' name="nombre"
                                value={Obj.nombre} onChange={(e)=>Change(e)} class="form-control"></input>
                                <input type="email" placeholder='Insertar codigo universitario' name="codigo"
                                value={Obj.codigo} onChange={(e)=>Change(e)} class="form-control"></input>
                                <input type="email" placeholder='Insertar correo electronico' name="correo"
                                value={Obj.correo} onChange={(e)=>Change(e)} class="form-control"></input>
                                <input type="password" placeholder='Insertar contraseña' name="contraseña"
                                value={Obj.contraseña} onChange={(e)=>Change(e)} class="form-control"></input>
                                <input type="password" placeholder='Repetir contraseña' name="contraseña2"
                                value={Obj.contraseña2} onChange={(e)=>Change(e)} class="form-control"></input>   
                            </div>
                            <button className='btn btn-danger mt-1' onClick={verificacion}>Registrarse</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}