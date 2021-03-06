import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import Memo from './memo/Memo'
import AddForm from './memo/AddForm';
import FindForm from './memo/FindForm';
import DelForm from './memo/DelForm';

class App extends Component{
  constructor(props){
    super();
  }
  render(){
    return (
      <div>
        <h1>Memo</h1>
        <AddForm />
        <hr/>
        <table>
          <tbody>
            <tr>
              <td><FindForm /></td>
              <td><DelForm /></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <Memo />
      </div>
    )
  }
}
export default connect()(App);
