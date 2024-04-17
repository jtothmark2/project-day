import './Foods.css';
import {Component, React} from 'react';
import { ReactComponent as Clap} from './assets/clap.svg';



class FoodCard extends Component {
  render(){
    return (
      <div className='clapboard'>
        <Clap className="clapboard-top"></Clap>
        <div className='big-card'>
          <p className='big-card-title'>Popcorn</p>
          <div className='sizes'>
            <img src={require("./assets/popcorn2.jpg")}></img>
            <p>Small - 2l</p>
            <p className='align-bot'>1000 Ft</p>
          </div>
          <div className='sizes'>
            <img src={require("./assets/popcorn2.jpg")}></img>
            <p>Small - 2l</p>
            <p className='align-bot'>1000 Ft</p>
          </div>
          <div className='sizes'>
            <img src={require("./assets/popcorn2.jpg")}></img>
            <p>Small - 2l</p>
            <p className='align-bot'>1000 Ft</p>
          </div>
        </div>
      </div>
    );
  }
}
export default FoodCard;
// box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);