import './Order.css';
import { Component, React } from 'react';
import QRCode from 'react-qr-code';





class Order extends Component {

  state = {
    order: [],
    value: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
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
      <div>
        
        <div className='order-container'>
        <div className='your-order-container'>
          <h1>Your final order:</h1>
          <div className='clapboard'>
            <img   src={require('./assets/clap_board.png')} />
            <div className='infos'>
              <h1 className='name'>Kis Levente - 2022.12.01</h1>
            </div>
            <div className='orderDetails'>
              <div className='qr'>
              {this.state.value && (
                    <QRCode
                        title="Clapp"
                        value={this.state.value}
                        bgColor='#FFFFFF'
                        fgColor='#000000'
                        size="256"
                    />
                )}
              </div>
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
      </div>
      
    );
  }
}
export default Order;
