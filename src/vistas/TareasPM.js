import React from 'react';
import NavBar from '../componentes/NavBar';
import { Link } from 'react-router-dom';
import Card from '../componentes/Card';

export default function TareasE (props) {
    return (
        <div style={{height:"100%",width:"100%",padding:0,margin:0}}>
            <NavBar/>
            <div className='container-fluid px-2 m-0' style={{width:"100%",height:"calc(100% - 50px)"}}>
                <div className='row p-0 m-0' style={{height:"100%",width:"100%"}}>
                    <div className='col-md-12 py-5 px-4' style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gridAutoRows:"225px",gridGap:"20px"}}>
                        <div className="d-flex justify-content-center align-items-center"style={{height:"100%"}}>
                            <div className="bg-light d-flex justify-content-center align-items-center" style={{width:70,height:70,borderRadius:"50%"}}>
                                <Link to="/NuevaTarea">+</Link>
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
                    <div className='d-flex justify-content-center align-items-center text-light' style={{width:"100vw", position:"sticky",bottom:0}}>
                        <Link to="/GestionarGrupos"><p>Gestionar grupos</p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}