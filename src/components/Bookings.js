import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Bookings extends Component {

  constructor() {
    super();

    this.state = {
      hackers: '',
      days: ''
    }

  };
  
  handleChangeHacker = e => {
    const { value } = e.target;
    this.setState({ hackers: value });
  }
  
  handleChangeDate = e => {
    const { value } = e.target;    
    this.setState({ days: value });
  }

  onSubmit = () => {
    const { handleSubmit } = this.props;
    const { days, hackers } = this.state;
    const arr = days.split(' to ');
    const date1 = new Date(arr[0]);
    const date2 = new Date(arr[1]);
    const diff = date2 - date1;
    const dayLength = Math.floor(diff) / (1000 * 60 * 60 * 24);

    const hackerArray = hackers.split('\n');
    const result = [];

    console.log(hackerArray, dayLength, date1, date2);

    hackerArray.forEach(hacker => {      
      let dateIndex = 0;      
      
      while (dateIndex < dayLength + 1) {
        const currentDate = new Date(date1);
        currentDate.setDate(currentDate.getDate() + dateIndex);
        console.log(currentDate);
        result.push({
          hacker,
          date: `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`,
        });
        dateIndex++;
      }
    });

    handleSubmit(result);
  }

  render() {
      return (
        <div className="row">
          <TextField
            className="col-md-6"
            multiline
            rows="4"
            placeholder="Enter the hacker list (one hacker per line)"
            onChange={this.handleChangeHacker}
          />
          <TextField
            className="col-md-6"
            multiline
            rows="4"
            placeholder="Enter the date range for each hacker's stay (one range per line)"
            onChange={this.handleChangeDate}
          />
          <Button variant="outlined" color="primary" className="block-center" onClick={this.onSubmit}>Get Meals Schedule</Button>
      </div>);
  }
}

export default Bookings;