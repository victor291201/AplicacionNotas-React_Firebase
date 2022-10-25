import React,{useState,useContext} from 'react';
import NavBar from '../componentes/NavBar';
import { Link } from 'react-router-dom';
import Card from '../componentes/Card';
import DropDown from '../componentes/DropDown';
import { DataContext } from '../context/Context';
import '../styles/styles.css'

export default function TareasE (props) {
    const {GlobalState,} = useContext(DataContext);
    return (
        <div className='w100p h100p m-0 p-0'>
            <NavBar CerrarSesion={props.CerrarSesion}/>
            <div className='container-fluid px-2 m-0 w100p hcalc'>
                <div className='row p-0 m-0 w100p h100p'>
                    <div className='col-md-12 py-5 px-4' style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gridAutoRows:"225px",gridGap:"20px"}}>
                        <div className="d-flex justify-content-center align-items-center h100p">
                            <div className="bg-light d-flex justify-content-center align-items-center" style={{width:70,height:70,borderRadius:"50%"}}>
                            <Link to="/NuevaTarea" className='NLink'>+</Link>
                            </div>
                        </div>
                       
                        {
                                GlobalState.user.notas.map((item)=>{
                                    return(
                                        <Card id={item.id}
                                        title={item.titulo} 
                                        description={item.descripcion} 
                                        fecha={
                                        item.fecha.slice(8,10)+
                                        "/"+item.fecha.slice(5,7)+
                                        "/"+item.fecha.slice(0,4)} hora={item.fecha.slice(11,16)} 
                                        autor={item.autor}  prioridad={item.prioridad}/>
                                    )
                                })
                        }

                    </div>
                    <div className='d-flex justify-content-center align-items-center text-light w100p position-sticky' style={{bottom:0}}>
                        <Link to="/GestionarGrupos" className='NLink'><p>Gestionar grupos</p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}