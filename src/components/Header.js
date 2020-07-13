import React from 'react';

export const Header = () => {
  return (
    <div>
      <header>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <a className='navbar-brand' href={'...'}>
            David Castro Castaneda
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item active'>
                <a className='nav-link' href={'...'}>
                  Home<span class='sr-only'>(current)</span>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href={'...'}>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href={'...'}>
                  Portfolio
                </a>
              </li>
              <li className='nav-item'>
                <button
                  type='button'
                  className='nav-link btn /*btn-primary*/'
                  data-toggle='modal'
                  data-target='#exampleModal'
                  href='#'
                >
                  Contact
                </button>
                <div
                  className='modal fade'
                  id='exampleModal'
                  tabindex='-1'
                  role='dialog'
                  aria-labelledby='exampleModalLabel'
                  aria-hidden='true'
                >
                  <div className='modal-dialog' role='document'>
                    <div className='modal-content'>
                      <div className='modal-header'>
                        <h5 className='modal-title' id='exampleModalLabel'>
                          Contact
                        </h5>
                        <button
                          type='button'
                          className='close'
                          data-dismiss='modal'
                          aria-label='Close'
                        >
                          <span aria-hidden='true'>&times;</span>
                        </button>
                      </div>
                      <div className='modal-body'>
                        <form>
                          <div className='form-group'>
                            <label for='fname'>Name</label>
                            <input
                              type='text'
                              className='form-control'
                              id='fname'
                              name='name'
                              placeholder='Jane Smith'
                            />
                          </div>
                          <div className='form-group'>
                            <label for='lemail'>Email</label>
                            <input
                              type='email'
                              className='form-control'
                              id='lemail'
                              placeholder='name@gmail.com'
                            />
                          </div>
                          <div className='form-group'>
                            <label for='textarea'>Message</label>
                            <textarea
                              className='form-control'
                              id='textarea'
                              placeholder='Write something..'
                              rows='3'
                            ></textarea>
                          </div>
                        </form>
                      </div>
                      <div className='modal-footer'>
                        <button type='submit' className='btn btn-info mb-2'>
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
