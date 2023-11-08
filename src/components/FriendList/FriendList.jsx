// import css from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  console.log(friends);
  //   return (
  //     <ul class="friend-list">
  //       <li class="item">
  //         <span class="status"></span>
  //         <img class="avatar" src="" alt="User avatar" width="48" />
  //         <p class="name"></p>
  //       </li>
  //     </ul>
  //   );
};

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendList;
