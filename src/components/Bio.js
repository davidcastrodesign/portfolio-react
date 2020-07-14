import React from 'react';
import Profile_pic200x197 from '../images/Profile_pic200x197.png';

export const Bio = () => {
  return (
    <div>
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
            <div className='col-sm-9 col-md'>
              <h1 className='display-5 align-left pl-4 pt-4'>
                Hello, I'm
                <span className='text-danger'> David Castro Castaneda</span>.
                <br />
                I'm a Graphic and Full Stack Software Developer.
              </h1>
              <div className='accordion' id='accordionExample'>
                <div className='card-header' id='headingOne'>
                  <p
                    className='lead text-info'
                    type='button'
                    data-toggle='collapse'
                    data-target='#collapseOne'
                    aria-expanded='true'
                    aria-controls='collapseOne'
                  >
                    About Me
                  </p>
                  <div
                    id='collapseOne'
                    className='collapse'
                    aria-labelledby='headingOne'
                    data-parent='#accordionExample'
                  >
                    <div className='card-body'>
                      <p>
                        I was Born in Mexico and migrated to Ontario, CA at the
                        age of five. During grade school, I was the kid that
                        spent his vacations and after school time in the
                        Computer Lab playing games and drawing pictures using
                        Kid Pix. Throughout school most of my interests have
                        been Art and Video Games, though pre-college, had no
                        idea how to draw.
                        <br />
                        <br />
                        I received my Associate's from Riverside Community
                        College where I spent most of my time studying
                        illustration and towards the end started doing graphics
                        and layout using Adobe. I then attended California State
                        University of San Bernardino where I graduated with
                        Bachelor's in Graphics and continued on to work in Los
                        Angeles as in-house Graphic Designer.
                        <br />
                        <br />
                        Shortly after I moved to Beijing, where I focused along
                        with my wife running an Enlgish Early Education Center.
                        I used my artistic skills along with tricks I learned
                        along the way to develop a curriculum and instruct
                        children. Moving back to California, I knew I wanted to
                        do Web and mobile design but also the coding. With the
                        the advice of other Colleagues, I signed up for Coding
                        Bootcamp and to become a software developer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
