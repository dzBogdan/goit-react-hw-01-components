import PropTypes from 'prop-types';
import './friends.moduls.css';


export default function Friends (props){
 return (
   <div>
  <span className="status" style={{background: props.isOnline?'green':'red'}}></span>
  <img className="avatar" src={props.avatar} alt={props.name} width="48" />
  <p className="name"> {props.name} </p>
  </div>
 ) ;
}  


Friends.prototype={
  avatar: PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
}