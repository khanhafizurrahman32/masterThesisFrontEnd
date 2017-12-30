import React, { Component } from 'react';
import styles from '../Components/css/sidebar.css';
import { Link } from 'react-router-dom';


class Sidebar extends Component{
  render (){
    return (
      <div className="sideNav">
          <ul>
            <li><Link to="/DataTypeSelection">Data Type Selection</Link></li>
            <li><Link to="/DataSetSelection">DataSet Selection </Link></li>
            <li><Link to="/AddNewDataSet">Add New Dataset </Link></li>
            <li><Link to="/Visualization">Visualization </Link></li>
            <li><Link to="/EvaluationCriteriaSelection">Evaluation </Link></li>
          </ul>
      </div>

    );
  }
}

export default Sidebar
