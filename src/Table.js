import TableList from './component/TableList';
import Rows from './transaction-history.json';


export default function TransactionHistory() {

    return (
     
     <div>
        <TableList items={Rows} />
    </div>
    );


};