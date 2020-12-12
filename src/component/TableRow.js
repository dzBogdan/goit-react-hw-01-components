import PropTypes from 'prop-types';

export default function TableRow(props){
    return(
      <div>
      <td>{props.type}</td>
      <td>{props.amount}</td>
      <td>{props.currency}</td>
      </div>
      
    )
}

TableRow.prototype={
 type: PropTypes.string.isRequired,
 amount:PropTypes.number.isRequired,
currency:PropTypes.string.isRequired  
}