import React, { Component } from 'react';
import './App.css';
import Sidebar from './Components/sidebar';
import DataTypeSelection from './Components/js/DataTypeSelection';
import About from './Components/About';

class App extends Component {
  constructor(){
    super();
    this.state ={
      selectedSidebarValue: 0
    }
  }

  selectedValueFromSidebar(currentVal){
    this.setState({
      selectedSidebarValue: currentVal
    },function(){
    })
  }
  render() {
    const selectedVal = this.state.selectedSidebarValue;
    let selectedComponent = '';
    if(selectedVal ==1){
      selectedComponent = <DataTypeSelection />
    }else if(selectedVal ==2){
      selectedComponent = <About />
    }
    return (
      <div className="row">
        <div className="col-sm-3 col-md-6 col-lg-4" style={{'backgroundColor': 'lavender'}}>
        <Sidebar sidebarValue={this.selectedValueFromSidebar.bind(this)}/>
        </div>
        <div className="col-sm-9 col-md-6 col-lg-8" style={{'backgroundColor': 'lavenderblush'}}>
           {selectedComponent}
        </div>
      </div>
    );
  }
}

export default App;
