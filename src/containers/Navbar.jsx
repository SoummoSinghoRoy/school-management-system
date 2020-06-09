import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


import logo from '../asset/img/logo.png'

class Navbar extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'>
            <nav className="navbar navbar-expand-lg navbar-secondary bg-light">
              <NavLink to='#' className='navbar-brand'> <img src={logo} alt='logo' className='img-fluid mx-auto d-block' style={{ width:'150px' }}/> </NavLink>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <NavLink className="nav-link text-dark ml-auto" exact to="/">Dashboard</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-dark" to="/all_students" >Students</NavLink> 
                  </li>
                  {/*<li className="nav-item">
                    <NavLink className="nav-link text-dark" to="/students_list" >Students List</NavLink> 
                  </li>*/} 
                  <li className="nav-item">
                    <NavLink className="nav-link text-dark" to="/teachers">Teachers</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-dark" to="/users">All Users</NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
