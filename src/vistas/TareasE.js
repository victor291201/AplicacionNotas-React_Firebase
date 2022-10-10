import React from 'react';
import Card from '../componentes/Card';
import NavBar from '../componentes/NavBar';
import { Link } from 'react-router-dom';
import '../styles/styles.css'
export default function TareasE (props) {
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
                        <Card title="monitoria" 
                        description="se llevara a cabo una monitoria de temas como, funcion cuadratica, limite y recta tangente " 
                        fecha="22/07/22" hora="8:00am" 
                        autor="francisco(monitor)"prioridad="Alta"/>
                       <Card title="monitoria" 
                        description="se llevara a cabo una monitoria de temas como, funcion cuadratica, limite y recta tangente ................................................................ asdededede asdededed" 
                        fecha="22/07/22" hora="8:00am" 
                        autor="francisco(monitor)"prioridad="Media"/>
                        <Card title="monitoria" 
                        description="se llevara a cabo una monitoria de temas como, funcion cuadratica, limite y recta tangente" 
                        fecha="22/07/22" hora="8:00am" 
                        autor="francisco(monitor)"prioridad="Baja"/>
                        <Card title="monitoria" 
                        description="se llevara a cabo una monitoria de temas como, funcion cuadratica, limite y recta tangente " 
                        fecha="22/07/22" hora="8:00am" 
                        autor="francisco(monitor)"prioridad="Media"/>
                        <Card title="monitoria" 
                        description="se llevara a cabo una monitoria de temas como, funcion cuadratica, limite y recta tangente" 
                        fecha="22/07/22" hora="8:00am" 
                        autor="francisco(monitor)"prioridad="Baja"/>

                    </div>
                    <div className='d-flex justify-content-center align-items-center text-light w100p position-sticky' style={{bottom:0}}>
                        <Link to="/GestionarGrupos" className='NLink'><p>Gestionar grupos</p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}