import React from "react";
import { DataProvider } from "./contexts/Context";
import $, { data } from 'jquery';
import Popper from 'popper.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import RouterApp from "./utilities/RouterApp";

/**encapsulating component, all other components, and I could say that this is the root of the entire project*/
export default function App(props){
    return(
        <DataProvider>
            <RouterApp/>
        </DataProvider>
    )
}