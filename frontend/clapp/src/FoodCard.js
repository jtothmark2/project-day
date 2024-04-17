import './Foods.css';
import {Component, React} from 'react';
import { ReactComponent as Clap} from './assets/clap.svg';
import { ReactComponent as Plus} from './assets/plus.svg';



class FoodCard extends Component {
  

  render(){
    return (
      <div className='clapboard'>
        <Clap className="clapboard-top"></Clap>
        <div className='big-card'>
          <p className='big-card-title'>Popcorn</p>
          {this.props.menu.map((item, index) => (
            <div class="sizes-container" onClick={()=>this.props.parent.addToOrder(item)}>
              <div className='sizes'>
                <img className='food-img' src={item.name.includes("popcorn") ? require("./assets/popcorn3.jpg") : require("./assets/drinks.jpg")}></img>
                <p>{item.description}</p>
                <p className='align-bot'>{item.price} Ft</p>
              </div>
              <Plus className="add-item"></Plus>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default FoodCard;
// box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);