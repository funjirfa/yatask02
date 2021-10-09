import React from 'react';
import '../css/footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className='main_caption'>
        <div>
          <span className='main_label footer_label-link'>Support</span>
          <span className='main_label footer_label-link'>Learning</span>
          <span className='main_label footer_label-link'>Русская версия</span>
        </div>
        <span className='main_label'>&#169; 2021 {this.props.author}</span>
      </footer>
    )
  }
}

export default Footer;
