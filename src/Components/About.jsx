import myPhoto from "../photos/Me.jpg";
import { motion } from "framer-motion";

export const About = () => {

  const offScreen = {
    y: 300
  }
  const onScreen = {
    y: 50,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.5
    }
  }
  return (
    <div className="bg-lighter text-dark text-monospace d-flex align-items-center justify-content-center">
      <div className="card border-0 " style={{background: "#263859"}}>
        <div className="card-body min-vh-100 d-flex flex-column justify-content-center">
          <div className="row pb-5">
            <div className="col-md-3 d-flex flex-column justify-content-center">
              <motion.div
                initial={offScreen}
                whileInView={onScreen}
                viewport={{once:true}}
              >
                <div
                  className="nav bg-card flex-column nav-pills rounded-sm"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                  }}
                >
                  <a
                    className="nav-link active text-light "
                    id="v-pills-home-tab"
                    data-toggle="pill"
                    href="#v-pills-home"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    About Me
                  </a>
                  <a
                    className="nav-link text-light"
                    id="v-pills-profile-tab"
                    data-toggle="pill"
                    href="#v-pills-profile"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    Education
                  </a>
                  <a
                    className="nav-link text-light"
                    id="v-pills-messages-tab"
                    data-toggle="pill"
                    href="#v-pills-messages"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >
                    Skills & Experience
                  </a>
                </div>
              </motion.div>
            </div>
            <div className="col-md-9 mt-5 mt-md-0 text-white">
              <motion.div
                initial={offScreen}
                whileInView={onScreen}
                viewport={{once:true}}
              >
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <div className="row">
                      <div className="col-12 flex flex-column justify-content-center align-items-center">
                        <div
                          className="card bg-card"
                          style={{
                            boxShadow:
                              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                            }}
                        >
                          <div className="card-header ">
                            <h4>A Little Bit About Me</h4>
                          </div>
                          <div className="card-body">
                            <div className="row">
                              <div className="col-md-8 d-flex align-items-center">
                                <p className="text-monospace">
                                  I'm a Dutch/Canadian student, spending most of
                                  my life living on the Caribbean island
                                  Curacao. I grew up loving to play soccer, and
                                  took an interest in football once I moved to
                                  Canada, but for the last 4 years I have been
                                  incredibly passionate about fitness and
                                  working out. Not only has this benefited my
                                  health and lifestyle, but inspired my projects
                                  and fueled my passion for coding.
                                </p>
                              </div>
                              <div className="col-md-4">
                                <img
                                  src={myPhoto}
                                  alt=""
                                  className="rounded img-fluid"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <div className="container p-2">
                      <div className="row h-100">
                        <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                          <div
                            className="card bg-card w-100"
                            style={{
                              boxShadow:
                                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                            }}
                          >
                            <div className="card-header">
                              <h4>My Education</h4>
                            </div>
                            <div className="card-body text-left">
                              <h6 className="highlighted-text">
                                Dalhousie University
                              </h6>
                              <p>
                                I am currently pursuing a Bachelor of Computer
                                Science Degree at Dalhousie University located
                                in Halifax, NS. Throughout my first year I was
                                able to maintain a 4.12 cumulative GPA, in
                                courses such as Intro to Object Oriented
                                Programming, Intro to Web Development, Intro to
                                Computer Systems, and Discrete Math.
                              </p>
                              <h6 className="highlighted-text">
                                Riverview High School
                              </h6>
                              <p>
                                From 2020 to 2023, I attended Riverview High
                                School in Riverview, NB, where my passion for
                                coding began in my Computer Science 11 and 12
                                courses.
                              </p>
                              <h6 className="highlighted-text">
                                International School of Curacao
                              </h6>
                              <p>
                                After my family moved to Curacao in 2007, I
                                attended the International School of Curacao
                                from grades K-4 to grade 9, before moving to
                                Canada in 2020.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-messages"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
                  >
                    <div className="container p-2">
                      <div className="row">
                        <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                          <div
                            className="card bg-card w-100"
                            style={{
                              boxShadow:
                                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                            }}
                          >
                            <div className="card-header">
                              <h4>Skills & Experience</h4>
                            </div>
                            <div className="card-body text-left">
                              <div className="row">
                                <div className="col-md-4">
                                  <ul className="list-group list-group-flush">
                                    <li className="list-group-item bg-lighter">
                                      Java
                                    </li>
                                    <li className="list-group-item bg-lighter">
                                      C#
                                    </li>
                                    <li className="list-group-item bg-lighter">
                                      HTML/CSS
                                    </li>
                                    <li className="list-group-item bg-lighter">
                                      JavaScript
                                    </li>
                                    <li className="list-group-item bg-lighter">
                                      Python
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul className="list-group list-group-flush">
                                    <li className="list-group-item bg-lighter">
                                      React
                                    </li>
                                    <li className="list-group-item bg-lighter">
                                      ASP.NET Core MVC
                                    </li>
                                    <li className="list-group-item bg-lighter">
                                      Tailwind
                                    </li>
                                    <li className="list-group-item bg-lighter">
                                      jQuery
                                    </li>
                                    <li className="list-group-item bg-lighter">
                                      Bootstrap
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4 mt-3 mt-md-0">
                                  <h6 className="highlighted-text">
                                    Student Software Developer
                                  </h6>
                                  <p>
                                    Following the summer of my first year at
                                    Dalhousie, I was able to secure a summer job
                                    as a Student Software Developer at{" "}
                                    <span className="highlighted-text">
                                      Ditech Testing
                                    </span>
                                    . I worked on the company's web portal,
                                    utilizing ASP.NET MVC to implement and
                                    improve new features for employees.
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
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
