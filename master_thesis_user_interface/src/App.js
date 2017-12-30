import React, { Component } from 'react';
import './App.css';
import Sidebar from './Components/sidebar';
import DataTypeSelection from './Components/js/DataTypeSelection';
import DataSetSelection from './Components/js/DataSetSelection';
import AddNewDataset from './Components/js/AddNewDataset';
import Visualization from './Components/js/Visualization';
import EvaluationCriteriaSelection from './Components/js/EvaluationCriteriaSelection';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  render() {

    return (
      <div className="App">
          <Router>
            <div className="row">
              <div className="col-sm-3 col-md-6 col-lg-4" style={{'backgroundColor': 'lavender'}}>
                <Sidebar />
              </div>
              <div className="col-sm-9 col-md-6 col-lg-8" style={{'backgroundColor': 'lavenderblush'}}>
                <Route exact path="/DataTypeSelection" component={DataTypeSelection} />
                <Route exact path="/DataSetSelection" component={DataSetSelection} />
                <Route exact path="/AddNewDataset" component={AddNewDataset} />
                <Route exact path="/Visualization" component={Visualization} />
                <Route exact path="/EvaluationCriteriaSelection" component={EvaluationCriteriaSelection} />
              </div>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
