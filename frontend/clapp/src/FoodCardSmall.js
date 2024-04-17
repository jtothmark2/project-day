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
          <p className='movie-title-small-card'>{this.props.ticketCount} x Love movie</p>
          <Minus onClick={()=>this.props.parent.deleteTicket()} className="minus"></Minus>
       </div>
       <ul>

       {this.props.selectedFoods.map((item, index) => (
            <li>
              <div class="item">
                <p>asd</p>
                <Minus className="small-minus"></Minus>
              </div>
            </li>
          ))}
         
       </ul>
      </div>
    );
  }
}
export default FoodCardSmall;
