import React, { Component } from 'react';
import $ from 'jquery';

class DataSetSelection extends Component {
  constructor(props){
    super(props);
    this.state = {
      receiveValues: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
  }

  handleSubmit(event){
    console.log(this.state.value)
    event.preventDefault();
  }

  componentDidMount(){
    this.fetchDataFromDirectory();
  }

  fetchDataFromDirectory(){
    $.ajax({
      url: 'http://localhost:8080/upload/readAllFiles',
      dataType: 'json',
      cache: 'false',
      success: function(data){
        let items = [];
        for (let i =0; i<data.length; i++){
          console.log(data[i].id);
          items.push(<option key={data[i].id} value={data[i].fileName}>{data[i].fileName}</option>);
        }
        this.setState({receiveValues: items}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log('', status, err);
      }
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <label>Category</label> <br />
          <div>
            <select value={this.state.value} onChange={this.handleChange}>
              {this.state.receiveValues}
           </select>
         </div>
         <br />
         <input type="submit" value="submit" />
      </form>
    );
  }
}

export default DataSetSelection;
