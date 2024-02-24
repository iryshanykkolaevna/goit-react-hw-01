import css from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profile}>
      <div className={css.personalData}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.personalName}>{name}</p>
        <p className={css.infoText}>@{tag}</p>
        <p className={css.infoText}>{location}</p>
      </div>

      <ul className={css.statsInfo}>
        <li className={css.statsInfoItem}>
          <span className={css.statsName}>Followers</span>
          <span className={css.statsValue}>{followers}</span>
        </li>

        <li className={css.statsInfoItem}>
          <span className={css.statsName}>Views</span>
          <span className={css.statsValue}>{views}</span>
        </li>

        <li className={css.statsInfoItem}>
          <span className={css.statsName}>Likes</span>
          <span className={css.statsValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;