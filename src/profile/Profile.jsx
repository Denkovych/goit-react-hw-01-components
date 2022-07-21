import styles from './Profile.module.css'
const Profile = ({username,tag,location,avatar,stats}) =>{

  const profileStyles = [styles.profile];
  const avatarStyles = [styles.avatar];
  const statsStyles = [styles.stats];
  const statsItemStyles = [styles.statsItem];
  
return (<div className= {profileStyles.join(' ')}>
  <div className="description">
    <img
      src= {avatar}
      alt={username}
      className={avatarStyles.join(' ')}
    />
    <p className="name">{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className={statsStyles.join(' ')}>
    <li className = {statsItemStyles.join(' ')}>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li className = {statsItemStyles.join(' ')}>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li className = {statsItemStyles.join(' ')}>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>)
}
export {Profile};