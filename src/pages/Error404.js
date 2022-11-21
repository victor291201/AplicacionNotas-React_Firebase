import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css'

export default function Error404 (props) {
    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",zIndex:"1000"}} className="w100p h100p bg-fd">
            <div className='row h100' style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                <h1 style={{color:"white",fontSize:"100px"}}>404</h1>
                <Link to="/" className='NLink CPointer' style={{color:"white"}}>Volver al inicio</Link>
            </div>
        </div>
    );
}