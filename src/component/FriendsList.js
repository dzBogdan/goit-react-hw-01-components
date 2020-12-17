import Friends from './friends.js';



function FriendsList({ items }){
    return(
     <ul>{
        items.map(item=>(
            <Friends
                 avatar= {item.avatar} 
                 name = {item.name}
                 isOnline = {item.isOnline} />
          
        ))}
    </ul>  );  
}

export default FriendsList;