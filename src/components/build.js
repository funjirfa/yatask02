import React from 'react';
import '../css/build.css';
import Success from '../images/success.svg';
import Warn from '../images/warn.svg';
import Error from '../images/error.svg';
import Calendar from '../images/calendar.svg';
import Timer from '../images/timer.svg';
import Commit from '../images/commit.svg';
import User from '../images/user.svg';

class Build extends React.Component {
  render() {
    const statusImage = {
      'success': Success,
      'warn': Warn,
      'error': Error,
    }

    const buildStatusStyle = {
      gridArea: 'pic',
      width: '100%',
      height: '100%',
      background: `url('${statusImage[this.props.buildItem.status]}') 0 0 no-repeat`,
      backgroundSize: 'contain',
    }

    const buildCalendarStyle = {
      background: `url('${Calendar}') 0 50% no-repeat`,
    }

    const buildTimerStyle = {
      background: `url('${Timer}') 0 50% no-repeat`,
    }

    function getColors(status) {
      return status === 'success' ? '#00B341' : (status === 'error' ? '#ff3333' : '#ff9a00')
    }

    const buildStatusColorStyle = {
      color: getColors(this.props.buildItem.status)
    }

    const buildCommitStyle = {
      background: `url('${Commit}') 0 50% no-repeat`,
      backgroundSize: 'contain',
      opacity: '45%',
      width: '16px',
      height: '4px',
      marginRight: '5px',
      display: 'inline-block',
    }

    const buildUserStyle = {
      background: `url('${User}') 0 50% no-repeat`,
      backgroundSize: 'contain',
      opacity: '45%',
      width: '12px',
      height: '4px',
      display: 'inline-block',
    }

    return (
      <div className='build_container'>
        <div style={buildStatusStyle} />

        <div className='build_caption'>
          <div>
            <span style={buildStatusColorStyle} className='build_caption-number'>#{this.props.buildItem.number}</span>
            <span className='build_caption-commit'>{this.props.buildItem.commit}</span>
          </div>

          <div>
            <span>
              <span style={buildCommitStyle} />
              <span>{this.props.buildItem.branch}</span>
              <span className='build_caption-hash'>{this.props.buildItem.hash}</span>
            </span>
            <span>
              <span style={buildUserStyle} />
              <span>{this.props.buildItem.username}</span>
            </span>
          </div>
        </div>

        <div className='build_datetime'>
          <div style={buildCalendarStyle}>{this.props.buildItem.datestamp}</div>
          <div style={buildTimerStyle}>{this.props.buildItem.timestamp}</div>
        </div>
      </div>
    )
  }
}

export default Build
