
import SocNet from './component/SocNet';
import users from './user.json';

import Statistic from './component/Statistic';
import stat from './statistical-date.json';

import  FriendsList from './component/FriendsList.js';
import  friends from './friends.json';
import { Fragment } from 'react';

import TransactionHistory from './Table.js';



export default function App() {

    return (
     
     <div>
         <SocNet 
  avatar = {users.avatar}
  name = {users.name}
  location={users.location}
  followers = {users.stats.followers}
  views = {users.stats.views}
  likes = {users.stats.likes} 
  />

            <Statistic
                title={''}
                stat={stat}
  />

        <FriendsList items={friends} />
        <TransactionHistory />
    </div>
    );


};