import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="tokyo_tm_about">
        <div className="about_image">
          <img src="assets/img/slider/shot.png" alt="about" />
        </div>
        {/* END ABOUT IMAGE */}
        <div className="description">
          <h3 className="name">Emmanuel F.O | Frontend Engineer</h3>
          <div className="description_inner">
            <div className="left">
              <p>
                I am an experienced and passionate frontend engineer with a product-focused approach, boasting over two years of hands-on experience. Originating as a design enthusiast, my journey seamlessly blends design expertise with cutting-edge frontend development skills. I love to craft visually striking interfaces that prioritize user-centric design without compromising on robust functionality.
              </p>
              <div className="tokyo_tm_button">
                <button onClick={toggleModal} className="ib-button">
                  Read More
                </button>
              </div>
              {/* END TOKYO BUTTON */}
            </div>
            {/* END LEFT */}
            <div className="right">
              <ul>
                <li>
                  <p>
                    <span>Address:</span> 911 Housing Estate,Kurudu Fct-Abuja
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email:</span>
                    <a href="mailto:mail@gmail.com">femmaje@gmail.com</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Phone:</span>
                    <a href="tel:+770221770505">+234 901 453 5419</a>
                  </p>
                </li>
              
                <li>
                  <p>
                    <span>Freelance:</span>Available
                  </p>
                </li>
              </ul>
              {/* END UL */}
            </div>
            {/* END RIGHT */}
          </div>
          {/* END DESCRIPTION INNER */}
        </div>
      </div>

      {/* START ABOUT POPUP BOX */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_about">
          <button className="close-modal" onClick={toggleModal}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END POPUP CLOSE BUTTON */}
          <div className="box-inner">
            <div className="description_wrap scrollable">
              <div className="my_box">
                <div className="left">
                  <div className="about_title">
                    <h3>Technologies Used</h3>
                  </div>
                  {/* END ABOUT TITLE */}

                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">Css3/Scss</span>
                        <span className="number">95%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" style={{width: 95 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="80">
                      <span>
                        <span className="label">HTML5</span>
                        <span className="number">80%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 80 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">ReactJs</span>
                        <span className="number">90%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 90 + '%'}}></div>
                        </div>
                      </div>
                    </div>
                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">Reduxtoolkit</span>
                        <span className="number">80%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 90 + '%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* END PROGRESS */}
                </div>
                {/* END LEFT */}

                <div className="right">
                  <div className="about_title">
                    
                  </div>
                  {/* END TITLE */}
                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">NextJS</span>
                        <span className="number">70%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 95 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">Styled-Component</span>
                        <span className="number">90%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 90 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="85">
                      <span>
                        <span className="label">Firebase</span>
                        <span className="number">85%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 85 + '%'}}></div>
                        </div>
                      </div>
                    </div>
                    <div className="progress_inner" data-value="85">
                      <span>
                        <span className="label">NodeJs</span>
                        <span className="number">50%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 85 + '%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* EDN TOKYO PROGRESS */}
                </div>
                {/* END RIGHT */}
              </div>
              {/* END MYBOX */}

              <div className="counter">
                <div className="about_title">
                  <h3>Fun Facts</h3>
                </div>
                <ul>
                  <li>
                    <div className="list_inner">
                      <h3>50+</h3>
                      <span>Projects Completed</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>80%</h3>
                      <span>Growth rate</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>9K+</h3>
                      <span>Lines of Code</span>
                    </div>
                  </li>
                </ul>
                {/* END COUNTER CONTENT */}
              </div>
              {/* END COUNTER */}

              {/* <div className="partners">
                <div className="about_title">
                  <h3>Our Partners</h3>
                </div>
                <Brand />
              </div> */}
              {/* END PARTNER SLIDER */}
            </div>
          </div>
        </div>
      </Modal>
      {/* END ABOUT POPUP BOX */}
    </>
  );
};

export default About;
