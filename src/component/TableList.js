import TableRow from './TableRow';

export default function TransactionHistory({items}){
    return(
 <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>{
        items.map(item=>(
           <tr key = {item.id} className="item">
              <TableRow 
              type = {item.type}
              amount= {item.amount}
              currency={item.currency}/>
           </tr>    
        ))};
  </tbody>
  </table>
    )
}