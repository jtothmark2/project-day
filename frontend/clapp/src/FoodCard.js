import './Foods.css';
import {Component, React} from 'react';

class FoodCard extends Component {
  render(){
    return (
      <div className='clapboard'>
        <div className='clapboard-top'>

        </div>
        <div className='big-card'>
          <img src='asd'></img>
          <p>Popcorn</p>
          <div className='sizes'>
            <img></img>
            <p>Small - 2l</p>
            <p>1000 Ft</p>
          </div>
        </div>
      </div>
    );
  }
}
export default FoodCard;
// box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);