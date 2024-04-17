import FoodCard from './FoodCard';
import FoodCardSmall from './FoodCardSmall';
import './Foods.css';
import {Component, React} from 'react';
import { Call } from './api';


class Foods extends Component {

  state = {
    selecetedFoods: [],
    popcorns: [],
    cups: [],
    ticketCount: 1
  }

  addSelectedFoods(food) {
    this.state.selecetedFoods.push(food);
  }

  sendOrder() {
    
  }

  addTicket() {
    this.setState({ticketCount: this.state.ticketCount + 1})
    console.log(this.state.ticketCount);
  }

  deleteTicket() {
    if (this.state.ticketCount > 1) {
      this.setState({ticketCount: this.state.ticketCount - 1})
    }
    console.log(this.state.ticketCount);
  }

  componentDidMount(){
    this.GetFoods();
  }
  async GetFoods(){
    var r = await Call('GET', 'api/products', {})
    console.log(r)
    this.setState({popcorns: r.slice(0, 3)})
    this.setState({cups: r.slice(3)})
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
            <FoodCardSmall selectedFoods={this.state.selecetedFoods} ticketCount={this.state.ticketCount} parent={this}></FoodCardSmall>
          </div>
         <FoodCard menu={this.state.popcorns}></FoodCard>
         <FoodCard menu={this.state.cups}></FoodCard>
      </div>
    );
  }
}
export default Foods;
