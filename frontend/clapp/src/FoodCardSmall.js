import './Foods.css';
import {Component, React} from 'react';
import { ReactComponent as Plus} from './assets/plus.svg';
import { ReactComponent as Minus} from './assets/minus.svg';

class FoodCardSmall extends Component {

  render(){
    return (
      <div className='small-card'>
       <div class="underline">
          <Plus onClick={()=>this.props.parent.addTicket()} className="plus"></Plus>
          <p className='movie-title-small-card'>{this.props.ticketCount} x {this.props.selectedMovie}</p>
          <Minus onClick={()=>this.props.parent.deleteTicket()} className="minus"></Minus>
       </div>
       <ul>
      <div style={{maxHeight: 300, overflowY: 'auto'}}>
       {this.props.order.map((item, index) => (
            <li>
              <div class="item">
                <p>{item.description}</p>
                <p>{item.price} Ft</p>
              </div>
            </li>
          ))}
         </div>
       </ul>
      </div>
    );
  }
}
export default FoodCardSmall;
