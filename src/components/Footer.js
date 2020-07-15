import React from 'react';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import dribbble from '../images/dribbble.png';
import instagram from '../images/instagram.png';

export const Footer = () => {
  return (
    <footer className='page-footer pt-2 fixed-bottom'>
      <div className='container'>
        <ul className='row mx-auto' style={{ width: '100%' }}>
          <li className='list-inline-item'>
            <a href='https://github.com/davidcastrodesign' target='blank'>
              <img src={github} alt='github' style={{ width: '64px' }} />
            </a>
          </li>
          <li className='list-inline-item'>
            <a
              href='https://www.linkedin.com/in/davidcastrocastaneda/'
              target='blank'
            >
              <img src={linkedin} alt='linkedIn' style={{ width: '64px' }} />
            </a>
          </li>
          <li className='list-inline-item'>
            <a href='https://dribbble.com/dc_aka' target='blank'>
              <img src={dribbble} alt='dribbble' style={{ width: '64px' }} />
            </a>
          </li>
          <li className='list-inline-item'>
            <a href='https://www.instagram.com/aka_dc/' target='blank'>
              <img src={instagram} alt='instagram' style={{ width: '64px' }} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
