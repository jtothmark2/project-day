import './App.css';
import {Component, React} from 'react';
import Movies from './Movies';
import Foods from './Foods';
import Receipt from './Receipt';
import Navbar from './Navbar';

class Tickets extends Component {
  state = {
    step: 0
  }
  setStep(e){
    this.setState({step: e.target.value})
  }
  nextStep(){
    console.log("!")
    this.setState({step: this.state.step+1})
  }
  render(){
    return (
      <div className="App">
        <Navbar/>

      </div>
    );
  }
}
export default Tickets;
