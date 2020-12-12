import Friends from './friends.js';



function FriendsList({ items }){
    return(
     <ul>{
        items.map(item=>(
            <li key = {item.id} className="item">
                <Friends
                 avatar= {item.avatar} 
                 name = {item.name}
                 isOnline = {item.isOnline} />
            </li>    
        ))}
    </ul>  );  
}

export default FriendsList;