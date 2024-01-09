import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const Portfolio = () => {
  return (
    <>
      <SimpleReactLightbox>
        <div className="tokyo_tm_portfolio">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Portfolio</span>
                <h3>Creative Portfolio</h3>
              </div>
            </div>
          </div>
          {/* END TOKYO_TM_TITLE */}
          <div className="portfolio_filter">
            <Tabs>
              <TabList>
                <Tab>All</Tab>
              </TabList>
              {/* END TABLIST */}
              <div className="list_wrapper">
                <SRLWrapper>
                  <TabPanel>
                    <ul className="portfolio_list">
                      <li>
                        <div className="inner">
                          <div className="entry">
                            <a href="assets/img/portfolio/5.jpg">
                              <img
                                src="assets/img/portfolio/t-hub3.png"
                                alt="Portfolio"
                              />
                            
                            </a>
                            <div className="live"><a href="https://t-hub.tongston.com/">see live</a></div>
                          </div>
                        </div>
                      </li>
                      {/* END VIMEO */}
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/2.jpg">
                              <img
                                src="assets/img/portfolio/TRL.png"
                                alt="portfolio"
                              />
                            </a>
                            <div className="live"><a href="https://the-review-library.vercel.app/">see live</a></div>
                          </div>
                        </div>
                      </li>
                      {/* END YOUTUBE */}
                      {/* <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/4.jpg">
                              <img
                                src="assets/img/portfolio/4.jpg"
                                alt="portfolio"
                              />
                            </a>
                            <div className="live"><a href="https://vsolutionse.github.io/Web_Form-design/">see live</a></div>
                          </div>
                        </div>
                      </li> */}
                      {/* END SOUNDCLOUD */}
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/3.jpg">
                              <img
                                src="assets/img/portfolio/huddle2.png"
                                alt="portfolio"
                              />
                            </a>
                            <div className="live"><a href="https://vsolutionse.github.io/Huddle-Landing-Page/">see live</a></div>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/3.jpg">
                              <img
                                src="assets/img/portfolio/sunny1.png"
                                alt="portfolio"
                              />
                            </a>
                            <div className="live"><a href="https://vsolutionse.github.io/Huddle-Landing-Page/">see live</a></div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
            
                </SRLWrapper>
                {/* END TABPANEL */}
              </div>
              {/* END LIST WRAPPER */}
            </Tabs>
          </div>
        </div>
      </SimpleReactLightbox>
    </>
  );
};

export default Portfolio;
