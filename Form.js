import React from 'react';
import {Component} from 'react';
// import { 
//         BrowserRouter as Router, 
//         Route,
//         Link,
// } from "react-router-dom";
import './Form.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            medicalID: ''
        };
    }
    onChangeHandler = (event) =>{
        event.preventDefault();
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
        console.log(this.state.name);
        console.log(this.state.medicalID);
    }
    render() {
      return (
        <div id='formDiv'>
        <form>
          <h3>Please enter your details:</h3>
          <div>
            <input
                className='inputElement'
                type="text"
                name='name'
                placeholder='Name'
                onChange={this.onChangeHandler}
            />
          </div>
          <div>
           <input
                className='inputElement'
                type="text"
                name='medicalID'
                placeholder='Medical ID Number'
                onChange={this.onChangeHandler}
          />
          </div>
        </form>
        <Button variant="danger" id='cnButton'
            onClick={(e) => {
                e.preventDefault();
                window.location.href='http://hugowtse.com/afrihackExamples/patient.html';
                }}>
            Check Now
        </Button>
        </div>
      );
    }
  }
export default Form;