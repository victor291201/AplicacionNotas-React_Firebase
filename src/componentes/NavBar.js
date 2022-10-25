import React,{useContext}from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from 'react-router-dom';
import { DataContext } from '../context/Context';
import '../styles/styles.css'

export default function NavBar (props) {
    const {GlobalState,CerrarSesion} = useContext(DataContext);
    if(props.tipo === 1){
    return (
            <nav className="navbar bg-light p1" style={{height:50,boxSizing:"border-box"}}>
                <div className="container-fluid m-0 p-0">
                    <div className="navbar-brand m-0 p-0  d-flex justify-content-space-betwen align-items-center" style={{widht:400}}>
                        <Link to="/" className='NLink'><i class="bi bi-chevron-left"></i></Link>
                        <h6 className='m-0 mr-1 ml-3' style={{fontSize:15}}>{GlobalState.user.nombre}</h6>
                        <p className='text-muted m-0' style={{fontSize:15}}>({GlobalState.user.rol})</p>
                    </div>
                </div>
            </nav>
        );
    }
    return (
        <nav className="navbar bg-light p1" style={{height:50,boxSizing:"border-box"}}>
            <div className="container-fluid m-0 p-0">
                <div className="navbar-brand m-0 p-0  d-flex justify-content-space-betwen align-items-center" style={{widht:400}}>
                    <i className="bi bi-box-arrow-left" onClick={CerrarSesion}></i>
                    <h6 className='m-0 mr-1 ml-3' style={{fontSize:15}}>{GlobalState.user.nombre}</h6>
                    <p className='text-muted m-0' style={{fontSize:15}}>({GlobalState.user.rol})</p>
                </div>
                <div className="d-flex justify-content-center align-items-center m-0 p-0">
                <input type="email" placeholder='Buscar' className="form-control mr-n1" style={{height:35}}></input>
                    <i className="bi bi-search text-muted ml-n4 mr-4"></i>
                </div>
            </div>
        </nav>
    );
    
}
