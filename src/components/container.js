import React from 'react';
import '../css/container.css';
import Header from "./header";
import {Link} from "react-router-dom";
import Footer from "./footer";

class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <Header title='School CI server' showSettingsBtn={true} />

        <div className='main_content'>
          <div className='main_content-logo' />
          <div className='main_content-caption'>Configure repository connection and synchronization settings</div>
          <Link to='/settings' className='main_content-btn'>Open settings</Link>
        </div>

        <Footer author='Anton Fedoryan' />
      </div>
    )
  }
}

export default Container
