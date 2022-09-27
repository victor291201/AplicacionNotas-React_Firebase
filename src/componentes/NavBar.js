import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function NavBar (props) {
    return (
        <nav className="navbar bg-light p1" style={{height:50,boxSizing:"border-box"}}>
            <div className="container-fluid m-0 p-0">
                <a className="navbar-brand m-0 p-0">
                    <i className="bi bi-box-arrow-left"></i>
                </a>
                <div className="d-flex justify-content-center align-items-center m-0 p-0">
                    <h6 className='m-0'>Juan moreno</h6>
                    <p className='text-muted m-0'>(monitor)</p>
                </div>
            </div>
        </nav>
    );
}
