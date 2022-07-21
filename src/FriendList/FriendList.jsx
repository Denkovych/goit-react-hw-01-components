

export default function FriendList({friends}){
    
    return(
        <ul className="friend-list">

            {friends?.map(friend =>(
                <li className="item" key ={friend.id}>
                  <span className="status" width = '5px' height = '5px'></span>
                  <img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
                  <p className="name">{friend.name}</p>
              </li>
            ))
              }
        </ul>
    )
}