import FoodCard from './FoodCard';
import FoodCardSmall from './FoodCardSmall';
import './Foods.css';
import {Component, React} from 'react';
import { Call } from './api';
import { useNavigate } from 'react-router-dom';

const FoodsWrapper = (props) => {
  const navigate = useNavigate();
  return <Foods navigate={navigate} app={props.app} selectedMovie={props.selectedMovie}/>;
}
class Foods extends Component {

  state = {
    selecetedFoods: [],
    popcorns: [],
    cups: [],
    ticketCount: 1,
    order: []
  }

  addSelectedFoods(food) {
    this.state.selecetedFoods.push(food);
  }

  async sendOrder() {
    let products = {}
    this.state.order.forEach(item => {
      console.log(item.name)
      if(products[item.name] != undefined){
        products[item.name] = products[item.name]+1;
      }else{
        products[item.name] = 1;
      }
    });
    var data = {screening_id: this.props.selectedMovie.id, tickets: this.state.ticketCount, products_json: {products: products}, token: localStorage.getItem('token')}
    var result = await Call("POST", "api/order", data)

    if(result.orderId != undefined){
      const { navigate } = this.props;
      navigate("/order");
    }
  }
  addToOrder(item){
    var order = this.state.order;
    order.push(item)
    this.setState({order: order})
    console.log(item)
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
    this.setState({popcorns: r.slice(0, 3)})
    this.setState({cups: r.slice(3)})
  }
  render(){
    return (
      <div className='food-container food-movie-card'>
          <div className='your-order-container'>
            <p className='your-order'>Your order:</p>
            <FoodCardSmall selectedFoods={this.state.selecetedFoods} ticketCount={this.state.ticketCount} 
            parent={this} selectedMovie={this.props.selectedMovie.title} order={this.state.order}></FoodCardSmall>
          </div>
         <FoodCard menu={this.state.popcorns} parent={this}></FoodCard>
         <FoodCard menu={this.state.cups} parent={this}></FoodCard>

         <h1 className='confirm-btn' onClick={()=>this.sendOrder()}>Confirm Order</h1>
      </div>
    );
  }
}
export default FoodsWrapper;
