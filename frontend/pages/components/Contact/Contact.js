import React from 'react';
const Contact = () => {
  return (
    <section id='section-8' className='contact_section '>
    <div className="container">
        <div className='row mx-auto'>
        <div class='col-xs-12 col-sm-6 col-md-4'>
        <div class='left'>
          <div class='contact-title mb-30'>
            <h2 class='mb-15 white-color'>GET IN <span>TOUCH</span></h2>
           
            <p>
              Feel free to contact me. Thank you !
            </p>
          </div>
          <ul class='contact-text clearfix'>
            <li style={{marginTop:'19px'}}>
            <i class="fa fa-phone" aria-hidden="true"></i>

              <h4 class='montserrat weight-regular no-margin capitalize'>
                Phone
              </h4>
              <span>
                <a
                  class='montserrat weight-regular'
                  href='tel:+88-669-658-6586'
                >
                  +88 669 658 6586
                </a>
              </span>
            </li>
            <li>
            <i class="fa fa-envelope" aria-hidden="true"></i>

              <h4 class='montserrat weight-regular no-margin capitalize'>
                Email
              </h4>
              <span>
                <a
                  class='montserrat weight-regular capitalize'
                  href='mailto:regaltheme@email.com'
                >
                  regaltheme@email.com
                </a>
              </span>
            </li>
            <li>
            <i class="fa fa-home" aria-hidden="true"></i>

              <h4 class='montserrat weight-regular capitalize no-margin'>
                Our Location
              </h4>
              <span class='montserrat weight-regular capitalize'>
                Location Name,here.US
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class='col-xs-12 col-sm-6 col-md-8'>
        <div class='contact-wrapper'>
          <form action='#' method='post' className='contact-form'>
            <div class='field'>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Who are you?'
                autofocus
              />
              <label for='name'>Name</label>
            </div>
            <div class='field'>
              <input
                type='text'
                id='email'
                name='email'
                placeholder='name@domain.tld'
              />
              <label for='email'>E-Mail</label>
            </div>
            <div class='field'>
              <textarea
                id='msg'
                rows='4'
                name='msg'
                placeholder='You message...'
              ></textarea>
              <label for='msg'>Nachricht</label>
            </div>
            <input class='button' type='submit' value='Send' />
          </form>
        </div>
      </div>
 
        </div>
    </div>
      </section>
  );
};

export default Contact;
