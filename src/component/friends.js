import PropTypes from 'prop-types';
import './friends.moduls.css';


export default function Friends (props){
 return (
   <>
     <li key = {props.id} className="item">
       <span className="status" ></span>
       <img className="avatar" src={ props.avatar} alt="" width="48" />
       <p className="name">{ props.name}</p>    
     </li>  
    </>
 ) ;
}  


Friends.prototype={
  avatar: PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
}