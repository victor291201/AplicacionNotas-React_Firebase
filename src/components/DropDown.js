import React,{useContext} from 'react';
import '../styles/styles.css'
import { DataContext } from '../contexts/Context';
import { Link } from 'react-router-dom';

/**this component was created to provide a beatufull interface of the options of cards*/
export default function DropDown (props) {
    const {EliminarNota} = useContext(DataContext);
    return (
        <ul class="dropdown-menuP">
            <li><Link  className="dropdown-itemP CPointer pt-1" to={"/Tarea/"+props.id.toString()}>Editar</Link></li>
            <li><a class="dropdown-itemP CPointer" onClick={()=>EliminarNota(props.id)}>Eliminar</a></li>
            <li><a class="dropdown-itemP CPointer pb-1" href="#">Compartir</a></li>
        </ul>
    );
    
}