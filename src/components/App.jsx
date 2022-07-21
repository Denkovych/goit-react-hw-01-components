import Profile from '../profile/Profile';
import Statistics from '../statistic/Statistics';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../transactions/TransactionHistory';

import user from '../path/to/user.json';
import data from '../path/to/data.json';
import friends from '../path/to/friends.json';
import transactions from '../path/to/transactions.json';

export const App = () => {
  return (
    <div>
     <Profile
        username= {user.username}
        tag= {user.tag}
        location = {user.location}
        avatar = {user.avatar}
        stats = {user.stats} 
     />
     <Statistics title="Upload stats" stats={data} />
     <FriendList friends={friends} />
     <TransactionHistory items={transactions} />
    </div>
  );
};
