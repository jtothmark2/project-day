import FoodCard from './FoodCard';
import FoodCardSmall from './FoodCardSmall';
import './Foods.css';
import {Component, React} from 'react';

class Foods extends Component {
  render(){
    return (
      <div>
       {/* <FoodCard></FoodCard> */}
       <FoodCardSmall></FoodCardSmall>
      </div>
    );
  }
}
export default Foods;
