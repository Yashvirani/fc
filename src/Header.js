import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';

function Header (){
  const [{ user },dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"></img>
        <div className="header__input">
        <SearchIcon />
        <input placeholder='Search Facebook' type="text"></input>
        </div>
      </div>
      <div className="header__middle">
        <div className="header__option">
          <HomeIcon fontsize="large"/>
        </div>
        <div className="header__option header__option--active">
          <FlagIcon fontsize="large"/>
        </div>
        <div className="header__option">
          <SubscriptionsIcon fontsize="large"/>
        </div>
        <div className="header__option">
          <StorefrontIcon fontsize="large"/>
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontsize="large"/>
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>

          <IconButton><AddIcon /></IconButton>
          <IconButton><ForumIcon /></IconButton>
          <IconButton><NotificationsActiveIcon /></IconButton>
          <IconButton><ExpandMoreIcon /></IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
