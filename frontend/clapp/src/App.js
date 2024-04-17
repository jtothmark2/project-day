import './App.css';
import {Component, React} from 'react';
import Movies from './Movies';
import Foods from './Foods';
import Receipt from './Receipt';

class App extends Component {
  state = {
    step: 0
  }
  render(){
    return (
      <div className="App">
        {this.state.step == 0 &&
          <Movies app={this}/>}
        {this.state.step == 1 &&
          <Foods app={this}/>}
        {this.state.step == 2 &&
          <Receipt app={this}/>}
      </div>
    );
  }
}
export default App;
