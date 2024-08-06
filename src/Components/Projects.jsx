import gymTrackerPic from "../photos/gymtracker.png";
import pballPic from "../photos/pball.png";
import gym1 from "../photos/gym1.PNG";
import gym2 from "../photos/gym2.PNG";
import gym3 from "../photos/gym3.PNG";
import gym5 from "../photos/gym5.PNG";
import api from "../photos/api.png";
import api1 from "../photos/api1.png";
import api2 from "../photos/api2.png";
import webscrap1 from "../photos/webscrap2.png";
import webscrap2 from "../photos/webscrap3.png";
import webscrap from "../photos/webscrap.png";
import { FaGithub } from "react-icons/fa";

import { motion } from "framer-motion";

export const Projects = () => {
  const offScreen = {
    y: 300,
  };
  const onScreen = {
    y: 50,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.5,
    },
  };
  return (
    <div className="bg-card text-monospace">
      <div className="card bg-lighter min-vh-100">
        <div className="card-header text-white">
          <div className="card-title text-center">
            <h4>Projects</h4>
          </div>
        </div>
        <div className="card-body d-flex align-items-center justify-content-center">
          <div className="row w-100">
            <div className="col-12">
              <div
                id="projectsCarousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#projectsCarousel"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#projectsCarousel" data-slide-to="1"></li>
                  <li data-target="#projectsCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="col-lg-4 mb-4 mb-lg-0 d-block w-100 m-auto">
                      <div
                        className="card bg-card text-light "
                        style={{
                          boxShadow:
                            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                        }}
                      >
                        <img
                          src={gymTrackerPic}
                          className="card-img-top img-fluid"
                          alt="..."
                          style={{ height: 220 }}
                        />
                        <div className="card-header">
                          <div className="card-title highlighted-text">
                            GymTracker
                          </div>
                          <div className="card-subtitle text-grey">
                            React Native, NativeWind, AppWrite, Expo
                          </div>
                          <a href="https://github.com/lennartschaeffer/GymTracker">
                            <FaGithub />{" "}
                          </a>
                        </div>
                        <div className="card-body p-5 h-100">
                          <button
                            type="button"
                            className="btn bg-red text-white w-100"
                            data-toggle="modal"
                            data-target="#gymTrackerModal"
                          >
                            See More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="col-lg-4 d-block w-100 m-auto">
                      <div
                        className="card bg-card text-light h-25"
                        style={{
                          boxShadow:
                            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                        }}
                      >
                        <img
                          src={api}
                          className="card-img-top "
                          alt="..."
                          style={{ height: 220 }}
                        />
                        <div className="card-header">
                          <div className="card-title highlighted-text">
                            MiddleEarthAPI
                          </div>
                          <div className="card-subtitle text-grey">
                            ASP.NET Core Web API's, ASP.NET Entity Framework,
                            SQL
                          </div>
                          <a href="https://github.com/lennartschaeffer/MiddleEarthAPI">
                            <FaGithub />{" "}
                          </a>
                        </div>
                        <div className="card-body  p-5">
                          <button
                            className="btn bg-red text-white w-100"
                            data-toggle="modal"
                            data-target="#middleEarthApiModal"
                          >
                            See More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="col-lg-4 d-block w-100 m-auto">
                      <div
                        className="card bg-card text-light h-100"
                        style={{
                          boxShadow:
                            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                        }}
                      >
                        <img
                          src={webscrap}
                          className="card-img-top"
                          alt="..."
                          style={{ height: 220 }}
                        />
                        <div className="card-header">
                          <div className="card-title highlighted-text">
                            Supplement Stores Web Scraper
                          </div>
                          <div className="card-subtitle text-grey">
                            Python, Flask, BeautifulSoup
                          </div>
                        </div>
                        <div className="card-body p-5">
                          <button
                            className="btn bg-red text-white w-100"
                            data-toggle="modal"
                            data-target="#webScrapModal"
                          >
                            See More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#projectsCarousel"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#projectsCarousel"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
          <div className="modal fade" id="gymTrackerModal" tabIndex="-1">
            <div
              className="modal-dialog modal-dialog-centered modal-lg"
              role="document"
            >
              <div className="modal-content bg-card text-white">
                <div className="modal-header ">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Gym Tracker
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div
                    id="gymCarousel"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <ol className="carousel-indicators">
                      <li
                        data-target="#gymCarousel"
                        data-slide-to="0"
                        className="active"
                      ></li>
                      <li data-target="#gymCarousel" data-slide-to="1"></li>
                      <li data-target="#gymCarousel" data-slide-to="2"></li>
                      <li data-target="#gymCarousel" data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src={gym1}
                          className="d-block w-25 h-25 m-auto"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={gym2}
                          className="d-block w-25 h-25 m-auto"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={gym3}
                          className="d-block w-25 h-25 m-auto"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={gym5}
                          className="d-block w-25 h-25 m-auto"
                          alt="..."
                        />
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#gymCarousel"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#gymCarousel"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
                <div className="modal-footer">
                  <div className="row">
                    <div className="col-12">
                      <p className="card-text">
                        Full Stack React Native iOS app, allowing users to track
                        workouts, logging every exercise, set, rep, and weight
                        they complete. However, GymTracker is not limited to
                        simply tracking workouts. Users can post videos and
                        photos about their workouts, which will then show up on
                        the Feed tab for all users who are authenticated.
                      </p>
                    </div>
                    <div className="col-12 d-flex justify-content-end">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="middleEarthApiModal" tabIndex="-1">
            <div
              className="modal-dialog modal-dialog-centered modal-lg"
              role="document"
            >
              <div className="modal-content bg-card text-white">
                <div className="modal-header ">
                  <h5 className="modal-title" id="exampleModalLabel">
                    MiddleEarthAPI
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div
                    id="apiCarousel"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <ol className="carousel-indicators">
                      <li
                        data-target="#apiCarousel"
                        data-slide-to="0"
                        className="active"
                      ></li>
                      <li data-target="#apiCarousel" data-slide-to="1"></li>
                      <li data-target="#apiCarousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={api1} className="d-block w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src={api} className="d-block w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src={api2} className="d-block w-100" alt="..." />
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#apiCarousel"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon "
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#apiCarousel"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon "
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
                <div className="modal-footer">
                  <div className="row">
                    <div className="col-12">
                      <p className="card-text">
                        Controller-based web API using a SQL database and
                        ASP.NET Entity Framework. MiddleEarthAPI supports all
                        CRUD operations, and is made to provide information on
                        characters from Tolkien's infamous Lord of The Rings
                        Series. The character information includes their first
                        and last name, home, race (Hobbit, Elf, etc...), other
                        names they go by, and a photo URL.
                      </p>
                    </div>
                    <div className="col-12 d-flex justify-content-end">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="webScrapModal" tabIndex="-1">
            <div
              className="modal-dialog modal-dialog-centered modal-lg"
              role="document"
            >
              <div className="modal-content bg-card text-white">
                <div className="modal-header ">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Supplement Store Web Scraper
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div
                    id="webScrapCarousel"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <ol className="carousel-indicators">
                      <li
                        data-target="#webScrapCarousel"
                        data-slide-to="0"
                        className="active"
                      ></li>
                      <li
                        data-target="#webScrapCarousel"
                        data-slide-to="1"
                      ></li>
                      <li
                        data-target="#webScrapCarousel"
                        data-slide-to="2"
                      ></li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src={webscrap}
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={webscrap1}
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={webscrap2}
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#webScrapCarousel"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#webScrapCarousel"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
                <div className="modal-footer">
                  <div className="row">
                    <div className="col-12">
                      <p className="card-text">
                        Often times, I've made a big purchase on supplements for
                        the gym, just to find out the other store had it for a
                        better price! This Python Web Scraper solves that
                        problem. With BeautifulSoup, a Python Web-Scraping
                        library, I scraped content from Supplement King and
                        Popeye's Supplements, the two biggest supplement stores
                        in the Maritimes. After getting the necessary data, I
                        divided it into Pre-workouts, Protein Powders, and
                        Creatine, and used Flask and the DataTables library to
                        display the content. You can simply search for your
                        desired supplement and find the best pricing, along with
                        a link to the product on the company's website.
                      </p>
                    </div>
                    <div className="col-12 d-flex justify-content-end">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
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
