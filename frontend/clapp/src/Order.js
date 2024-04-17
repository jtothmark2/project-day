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
          <div className='clapboard'>
            <img   src={require('./assets/clap_board.png')} />
            <div className='infos'>
              <h1 className='name'>Balogh Levente</h1>
              <h1 className='date'>2022.12.01</h1>
            </div>
            <div className='orderDetails'>
              <div className='qr'>qr kód</div>
              <ul className='orders'>
                <li>sadasdasd</li>
                <li>sadasdasd</li>
                <li>sadasdasd</li>
                <li>sadasdasd</li>
              </ul>
            </div>
          </div>
        </div>


      </div>
    );
  }
}
export default Order;
