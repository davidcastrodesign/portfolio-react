import React from 'react';

import { BrowserRouter as Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <header>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <Link className='navbar-brand' to='/'>
            David Castro Castaneda
          </Link>

          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
