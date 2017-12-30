import React, { Component } from 'react';

class DataTypeSelection extends Component {
  handleSubmit(e){
    console.log('fsdf');
  }
  render() {
    return (
      <form>
        <div className="radio">
          <label>
            <input type="radio" name="optradio" value="option1" />
            Option 1
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name="optradio" value="option2" />
            Option 2
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name="optradio" value="option3" />
            Option 3
          </label>
        </div>
      </form>
    );
  }
}

export default DataTypeSelection;
