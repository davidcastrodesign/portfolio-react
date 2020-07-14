import React from 'react';
import Profile_pic200x197 from '../images/Profile_pic200x197.png';

export const Bio = () => {
  return (
    <div>
      <bio>
        <div className='jumbotron jumbotron-fluid'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-3 col-md-3'>
                <img
                  src={Profile_pic200x197}
                  alt='Profile Pic'
                  className='img-responsive rounded-circle'
                />
              </div>
            </div>
          </div>
        </div>
      </bio>
    </div>
  );
};

export default Bio;
