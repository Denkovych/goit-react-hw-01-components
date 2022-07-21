import PropTypes from "prop-types";
import styles from './FriendList.module.css'

 const FriendList = ({friends}) =>{
    const friendListClasses = [styles.friendList]
    const itemClasses = [styles.item];
    const statusStylesOnline = [styles.statusOnline];
    const statusStylesOffline = [styles.statusOffline];

    return(
        <ul className ={friendListClasses.join(' ')}>

            {friends?.map(friend =>(
                <li className= {itemClasses.join(' ')} key ={friend.id}>

                  {friend.isOnline === true ? (
                  <span className= {statusStylesOnline.join(' ')}> </span>
                  ) : (
                  <span className= {statusStylesOffline.join(' ')}> </span>)}

                  
                  <img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
                  <p className="name">{friend.name}</p>
              </li>
            ))
              }
        </ul>
    )
};

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  
  }

export  {FriendList};