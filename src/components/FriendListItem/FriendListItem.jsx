import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline = 'true' }) => {
  return (
    <div className={css.friendItem}>
      <img className={css.friendImg} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={isOnline ? css.statusOnline : css.statusOffline}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;