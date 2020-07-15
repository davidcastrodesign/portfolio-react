import React from 'react';
import password_generator from '../images/password_generator.png';
import workday_scheduler from '../images/workday_scheduler.png';
import gamrblack300px from '../images/gamrblack300px.png';

export const Projects = () => {
  return (
    <div>
      <h2 className='text-center'>PROJECTS</h2>
      <div className='row'>
        <div className='col'>
          <div
            className='card align-items-center p-3 border-0 text-left'
            style={{ width: '18rem' }}
          >
            <a
              href='https://davidcastrodesign.github.io/passwordgenerator/'
              target='blank'
            >
              <img
                src={password_generator}
                className='card-img-top'
                alt='Password Generator'
              />
            </a>
            <div className='card-body'>
              <a href='https://github.com/davidcastrodesign/passwordgenerator'>
                GitHub Link
              </a>
            </div>
          </div>
        </div>

        <div className='col'>
          <div
            className='card align-items-center p-3 border-0 text-center'
            style={{ width: '18rem' }}
          >
            <a
              href='https://davidcastrodesign.github.io/Work-Day-Scheduler/'
              target='blank'
            >
              <img
                src={workday_scheduler}
                className='card-img-top'
                alt='Workday Scheduler'
              />
            </a>
            <div className='card-body'>
              <a href='https://github.com/davidcastrodesign/Work-Day-Scheduler'>
                GitHub Link
              </a>
            </div>
          </div>
        </div>

        <div className='col'>
          <div
            className='card align-items-center p-3 border-0 text-right'
            style={{ width: '18rem' }}
          >
            <a href='https://jhnpn.github.io/Project-1/' target='blank'>
              <img src={gamrblack300px} className='card-img-top' alt='Gamer' />
            </a>
            <div className='card-body'>
              <a href='https://github.com/jhnpn/Project-1/tree/David-branch'>
                GitHub Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
