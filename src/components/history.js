import React from 'react';
import '../css/container.css';
import '../css/history.css';
import Footer from "./footer";
import {Link} from "react-router-dom";
import SettingsImage from "../images/cog 1.svg";
import RunBuild from '../images/12_play.svg';
import Build from './build';

class History extends React.Component {
  render() {
    function build() {
      const timerId = setTimeout(function () {
        const condition = Math.floor(Math.random() * 2);
        if (condition === 0) {
          alert('ERROR');
        } else {
          alert('BUILD SUCCESS');
        }
        clearTimeout(timerId);
      }, 2000);
    }

    const buildList = [
      {
        status: 'success',
        number: 1368,
        commit: 'add documentation for postgres scaler',
        branch: 'master',
        hash: 'e41e4cc',
        username: 'Philip Kirkorov',
        datestamp: '21 янв, 03:06',
        timestamp: '1 ч 20 мин',
      },
      {
        status: 'warn',
        number: 1367,
        commit: 'Super cool UI kit for making websites that look like games ',
        branch: 'super-cool-ui-kit',
        hash: 'b4636ab',
        username: 'Vadim Makeev',
        datestamp: '21 янв, 03:06',
        timestamp: '1 ч 20 мин',
      },
      {
        status: 'error',
        number: 1366,
        commit: 'Merge branch \'master\' of github.com:jaywcjlove/awesome',
        branch: 'master',
        hash: '9c9f0b9',
        username: 'Philip Kirkorov',
        datestamp: '21 янв, 03:06',
        timestamp: '1 ч 20 мин',
      },
      {
        status: 'success',
        number: 1365,
        commit: 'upgrade typescript to 3.8',
        branch: 'master',
        hash: 'b4636ab',
        username: 'Philip Kirkorov',
        datestamp: '21 янв, 03:06',
        timestamp: '1 ч 20 мин',
      },
      {
        status: 'success',
        number: 1364,
        commit: 'replace all `div` to `article',
        branch: 'master',
        hash: 'b4636ab',
        username: 'Vadim Makeev',
        datestamp: '21 янв, 03:06',
        timestamp: '1 ч 20 мин',
      },
    ];

    function getBuilds() {
      return buildList.map(function(item) {
        return <Build buildItem={item} />
      });
    }

    return (
      <div className="container">
        <header className='history_header'>
          <h1 className='history_header-title'>philip1967/my-awesome-repo</h1>

          <div>
            <div className='history_builds-btn' onClick={build}>
              <img src={RunBuild} alt='run build' />
              <span>Run build</span>
            </div>

            <Link to='/settings' className='history_settings-btn'>
              <img src={SettingsImage} alt='settings' />
            </Link>
          </div>
        </header>

        <div className='history_builds'>
          {getBuilds()}

          <div className='history_show-btn'>Show more</div>
        </div>

        <Footer author='Anton Fedoryan' />
      </div>
    )
  }
}

export default History
