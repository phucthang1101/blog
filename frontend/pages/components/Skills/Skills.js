import React, { useState, useRef, useEffect } from 'react';

const Skills = () => {
  const [isPerRun, setPerRun] = useState(false);
  let [count, setCount] = useState(0);
  let skillsRef = useRef(null);

  useEffect(() => {
    //  const setScrollPositionCallBack = ;

    if (typeof window !== 'undefined') {
      // console.log('scroll func');
      window.addEventListener('scroll', () => {
        const scrollCheck =
          skillsRef && skillsRef.current
            ? Math.abs(skillsRef.current.getBoundingClientRect().top) >= 200
            : 0;

        //  console.log('js: ', document.getElementById('section-3').scrollTop);
        if (count <= 1 && scrollCheck !== isPerRun) {
          // console.log('in: ',count)
          setCount(++count);
          setPerRun(scrollCheck);
        }
      });
    }
  });

  return (
    <section ref={skillsRef} id='section-3' className='skills_div'>
      <div id='skills-bd' className='skills-area section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='skills-title'>
              <h2>
                My <span>Skills</span>
              </h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <div className='about-text-right'>
                <div id='skills'>
                  <div className='row'>
                    <div className='col-md-6 col-12'>
                      <div className='skill'>
                        <div className='skill-name'>HTML</div>
                        <div className='skill-bar '>
                          <div
                            className={`skill-per ${isPerRun ? '' : 'html5'}`}
                            per='90%'
                          ></div>
                        </div>
                      </div>
                      <div className='skill'>
                        <div className='skill-name'>CSS</div>
                        <div className='skill-bar'>
                          <div
                            className={`skill-per ${isPerRun ? '' : 'css'}`}
                            per='70%'
                          ></div>
                        </div>
                      </div>
                      <div className='skill'>
                        <div className='skill-name'>Javascript</div>
                        <div className='skill-bar'>
                          <div
                            className={`skill-per ${isPerRun ? '' : 'js'}`}
                            per='60%'
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className='col-md-6 col-12'>
                      <div className='skill'>
                        <div className='skill-name'>HTML</div>
                        <div className='skill-bar'>
                          <div
                            className={`skill-per ${isPerRun ? '' : 'react'}`}
                            per='60%'
                          ></div>
                        </div>
                      </div>
                      <div className='skill'>
                        <div className='skill-name'>CSS</div>
                        <div className='skill-bar'>
                          <div
                            className={`skill-per ${isPerRun ? '' : 'net'}`}
                            per='90%'
                          ></div>
                        </div>
                      </div>
                      <div className='skill'>
                        <div className='skill-name'>Javascript</div>
                        <div className='skill-bar'>
                          <div
                            className={`skill-per ${isPerRun ? '' : 'db'}`}
                            per='70%'
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
