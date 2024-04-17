import './Order.css';
import { Component, React } from 'react';
// import { Call } from './api';


class Order extends Component {

  state = {
    order: []
  }
  // componentDidMount(){
  //   this.GetFoods();
  // }
  // async GetFoods(){
  //   var r = await Call('GET', 'api/foods', {})
  //   console.log(r)
  //   this.setState({foods: r})
  // }
  render() {
    return (
      <div className='order-container'>
        <div className='your-order-container'>
          <p>Your final order:</p>
          <img src={require('./assets/clip_board.jpg')}/>

        </div>
        <div className='final-order-container'>
        </div>
      </div>
    );
  }
}
export default Order;
