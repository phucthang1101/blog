import React from 'react';
import SvgIcon from './svgIcons';

const Services = () => {
  return (
    <section id='section-4' className='service_area'>
      <div className='services-area section-padding' id='services'>
        <div className='container'>
          <div className='row'>
            <div className='service-title'>
              <h2>
                My <span>Services </span>
              </h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-3 col-sm-6 service'>
              <div className='service-box'>
                <span className='after'></span>
                <span className='before'></span>
                <div className='service-icon'>
                  <SvgIcon width={110} className='database' viewBox='0 0 512.056 512.056'>
                  <g>
			<path d="M245.333,256C180.629,256,128,308.629,128,373.333s52.629,117.333,117.333,117.333s117.333-52.629,117.333-117.333
				S310.037,256,245.333,256z M295.552,359.552c-2.091,2.069-4.821,3.115-7.552,3.115s-5.461-1.045-7.552-3.115L256,335.083v102.251
				c0,5.888-4.779,10.667-10.667,10.667s-10.667-4.779-10.667-10.667V335.083l-24.448,24.448c-4.16,4.16-10.923,4.16-15.083,0
				c-4.16-4.16-4.16-10.923,0-15.083l42.645-42.645c0.981-0.981,2.176-1.771,3.477-2.325c2.603-1.088,5.547-1.088,8.149,0
				c1.323,0.533,2.496,1.323,3.477,2.325l42.645,42.645C299.712,348.629,299.712,355.371,295.552,359.552z"/>
			<path d="M402.048,149.824C387.221,75.968,321.387,21.333,245.333,21.333c-88.235,0-160,71.765-160,160
				c0,3.605,0.149,7.296,0.469,11.2C37.653,197.653,0,238.507,0,288c0,52.928,43.072,96,96,96c5.888,0,10.667-4.779,10.667-10.667
				c0-76.459,62.208-138.667,138.667-138.667S384,296.875,384,373.333c0,5.888,4.779,10.667,10.667,10.667
				C459.371,384,512,331.371,512,266.667C512,204.992,464.171,154.283,402.048,149.824z"/>
		</g>
                  </SvgIcon>
                </div>

                <div className='service-content'>
                  <h4>Database</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aut, id laboriosam maxime nam neque nulla placeat quam
                    repudiandae similique ullam?
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-sm-6 service'>
              <div className='service-box'>
                <span className='after'></span>
                <span className='before'></span>
                <div className='service-icon'>
                  <i className='icon-aperture'></i>
                </div>
                <div className='service-content'>
                  <h4>Web Development</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aut, id laboriosam maxime nam neque nulla placeat quam
                    repudiandae similique ullam?
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-sm-6 service'>
              <div className='service-box'>
                <span className='after'></span>
                <span className='before'></span>
                <div className='service-icon'>
                  <i className='icon-gears'></i>
                </div>
                <div className='service-content'>
                  <h4>Content Writing</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aut, id laboriosam maxime nam neque nulla placeat quam
                    repudiandae similique ullam?
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-3 col-sm-6 service'>
              <div className='service-box'>
                <span className='after'></span>
                <span className='before'></span>
                <div className='service-icon'>
                  <i className='icon-bargraph'></i>
                </div>
                <div className='service-content'>
                  <h4>SEO (Search Engine Optimisation) Optimize</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aut, id laboriosam maxime nam neque nulla placeat quam
                    repudiandae similique ullam?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
