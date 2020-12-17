import PropTypes from 'prop-types';

export default function TableRow(props){
    return(
    
      <tr key = {props.id} className="item">
        <td>{props.type}</td>
        <td>{props.amount}</td>
        <td>{props.currency}</td>
      </tr>  
    
      
    )
}

TableRow.prototype={
 type: PropTypes.string.isRequired,
 amount:PropTypes.number.isRequired,
currency:PropTypes.string.isRequired  
}