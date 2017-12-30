import React, { Component } from 'react';

class DataSetSelection extends Component {
  constructor(props){
    super(props);
    this.state = {value: "Finance"};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    console.log(this.state.value)
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <label>Category</label> <br />
          <div>
            <select value={this.state.value} onChange={this.handleChange}>
               <option value="Finance">Finance</option>
               <option value="Environment">Environment</option>
               <option value="Technology">Technology</option>
           </select>
         </div>
         <br />
         <input type="submit" value="submit" />
      </form>
    );
  }
}

export default DataSetSelection;
