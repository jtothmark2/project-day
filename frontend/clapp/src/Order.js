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
          <h1>Your final order:</h1>
          <img className='clipboard' src={require('./assets/clip_board.jpg')}/>
          <div className='infos'>
            <h1>Név</h1>
            <h1>2022.12.01</h1>
            <ul>
              
            </ul>
          </div>
        </div>
        <div className='final-order-container'>
        </div>
      </div>
    );
  }
}
export default Order;
