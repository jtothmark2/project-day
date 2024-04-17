import FoodCard from './FoodCard';
import FoodCardSmall from './FoodCardSmall';
import './Foods.css';
import {Component, React} from 'react';
import { Call } from './api';


class Foods extends Component {

  state = {
    foods: []
  }
  componentDidMount(){
    this.GetFoods();
  }
  async GetFoods(){
    var r = await Call('GET', 'api/foods', {})
    console.log(r)
    this.setState({foods: r})
  }
  render(){
    return (
      <div className='food-container food-movie-card'>
          <div className='your-order-container'>
            <p className='your-order'>Your order:</p>
            <div className='movieCard'>

            <img src={require("./assets/cinema.jpg")} className='movieImg'></img>


            <h3 className='movieTitle'>Movie title</h3>
            <div className='movieData'>
              <p> genre - genre</p>
              <p>120 min.</p>
            </div>

          </div>
            <FoodCardSmall></FoodCardSmall>
          </div>
         <FoodCard></FoodCard>
         <FoodCard></FoodCard>
      </div>
    );
  }
}
export default Foods;
