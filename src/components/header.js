import React from 'react';
import '../css/header.css';
import {Link} from "react-router-dom";
import SettingsImage from "../images/cog 1.svg";

class Header extends React.Component {
  render() {
    return (
      <header className='main_caption'>
        <h1 className='header-title'>{this.props.title}</h1>
        { this.props.showSettingsBtn ?
        <Link to='/settings' className='header_settings-btn'>
          <img src={SettingsImage} alt='settings' />
          <span>Settings</span>
        </Link> : null }
      </header>
    )
  }
}

export default Header
