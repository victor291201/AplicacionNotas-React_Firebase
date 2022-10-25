import React from "react";
import { DataProvider } from "./context/Context";
import $, { data } from 'jquery';
import Popper from 'popper.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import RouterApp from "./RouterApp";

export default function App(props){
    return(
        <DataProvider>
            <RouterApp/>
        </DataProvider>
    )
}