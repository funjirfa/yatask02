import React from 'react';
import '../css/container.css';
import '../css/form.css';
import Header from "./header";
import {Link} from "react-router-dom";
import Footer from "./footer";

class Form extends  React.Component {
  render() {
    return (
      <div className="container">
        <Header title='School CI server' showSettingsBtn={false} />

        <form>
          <h2>Settings</h2>
          <h3>Configure repository connection and synchronization settings.</h3>

          <label>GitHub repository <sup>*</sup></label>
          <input type='search' placeholder='user-name/repo-name' required />

          <label>Build command <sup>*</sup></label>
          <input type='search' placeholder='build command' required />

          <label>Main branch</label>
          <input type='search' placeholder='branch name' />

          <label>Synchronize every <input type='number' /> minutes</label>

          <div>
            <Link to='/history' className='form_btn form_btn-save'>Save</Link>
            <Link to='/' className='form_btn form_btn-cancel'>Cancel</Link>
          </div>
        </form>

        <Footer author='Anton Fedoryan' />
      </div>
    )
  }
}

export default Form
