import React, { Component } from 'react';
import styles from '../Components/css/sidebar.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import $ from 'jquery';

class Sidebar extends Component{
  constructor(){
    super();
    this.state = {
      submittedVal: 0
    }
  }
  handleSelect(e){
    var el = e.currentTarget.dataset.id;
    this.setState({
      submittedVal: el
    },function(){
      this.props.sidebarValue(this.state.submittedVal);
    });
  }
  render (){
    return (
        <Router>
          <div className="sideNav">
              <ul>
                <li onClick={this.handleSelect.bind(this)} ref="DataTypeSelection" data-id="1"><Link to="/DataTypeSelection">DataTypeSelection</Link></li>
                <li onClick={this.handleSelect.bind(this)} ref="about" data-id="2"><Link to="/about">About</Link></li>
                <li><Link to="/pagewithsubpages">Page With Subpages</Link></li>
              </ul>
          </div>
        </Router>

    );
  }
}

export default Sidebar
