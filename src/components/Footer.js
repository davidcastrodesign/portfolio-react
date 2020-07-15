import React from 'react';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';

export const Footer = () => {
  return (
    <div>
      <div className='row mx-auto' style={{ width: '700px' }}>
        <div className='col' style={{ width: '50px' }}>
          <a href='https://github.com/davidcastrodesign' target='blank'>
            <img src={github} alt='github' style={{ width: '20%' }} />
          </a>
        </div>
        <div className='col' style={{ width: '50px' }}>
          <a
            href='https://www.linkedin.com/in/davidcastrocastaneda/'
            target='blank'
          >
            <img src={linkedin} alt='linkedIn' style={{ width: '20%' }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
