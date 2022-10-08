import React from 'react';
import '../styles/styles.css'

export default function DropDown (props) {
    return (
        <ul class="dropdown-menuP">
            <li><a class="dropdown-itemP pt-2" href="#">Editar</a></li>
            <li><a class="dropdown-itemP" href="#">Eliminar</a></li>
            <li><a class="dropdown-itemP pb-2" href="#">Compartir</a></li>
        </ul>
    );
    
}