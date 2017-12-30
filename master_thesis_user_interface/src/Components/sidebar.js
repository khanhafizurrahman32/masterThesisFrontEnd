import React, { Component } from 'react';
import styles from '../Components/css/sidebar.css';
import { Link } from 'react-router-dom';


class Sidebar extends Component{
  render (){
    return (
      <div className="sideNav">
          <ul>
            <li><Link to="/DataTypeSelection">DataTypeSelection</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
      </div>

    );
  }
}

export default Sidebar
