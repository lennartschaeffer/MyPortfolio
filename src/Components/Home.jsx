import { FaBootstrap, FaHtml5, FaJava } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCsharp } from "react-icons/si";
import Me from "../photos/Me.jpg";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <div className="text-monospace vh-100" style={{ background: "#070F2B" }}>
      <div
        className="card regular-text vh-100"
        style={{ background: "#263859" }}
      >
        <div className="card-body d-flex justify-content-center align-items-center">
          <div className="row ">
            <div className="col-12 d-flex flex-column justify-content-center">
              <div
                className="jumbotron jumbotron-fluid"
                style={{
                  boxShadow: "0 4px 2px -2px gray",
                  background: "#263859",
                }}
              >
                <div className="container">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <h1 className="display-4 text-md-center">
                      Hi, I'm
                      <span className="highlighted-text font-weight-normal">
                        {" "}
                        Lennart Schaeffer.
                      </span>
                    </h1>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.9,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <p className="lead text-md-center m-0">
                      I'm a second year CS student at{" "}
                      <span className="highlighted-text">
                        Dalhousie University{" "}
                      </span>{" "}
                      with a passion for{" "}
                      <span className="highlighted-text">Web</span> and{" "}
                      <span className="highlighted-text">Mobile App</span>{" "}
                      Development. I'm looking to pursue a career as a
                      <span className="highlighted-text">
                        &nbsp;Full-Stack Developer
                      </span>{" "}
                      or{" "}
                      <span className="highlighted-text">
                        Software Engineer
                      </span>
                      , as I enjoy solving problems and presenting my creativity
                      through coding.
                    </p>
                  </motion.div>
                </div>
              </div>
              <div className="row p-3">
                <div className="col-2 d-flex justify-content-center highlighted-text">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.9,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <FaHtml5 />
                  </motion.div>
                </div>
                <div className="col-2 d-flex justify-content-center highlighted-text">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 1,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <FaCss3 />
                  </motion.div>
                </div>
                <div className="col-2 d-flex justify-content-center highlighted-text">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 1.1,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <IoLogoJavascript />
                  </motion.div>
                </div>
                <div className="col-2 d-flex justify-content-center highlighted-text">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 1.2,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <FaReact />
                  </motion.div>
                </div>
                <div className="col-2 d-flex justify-content-center highlighted-text">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 1.3,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <FaJava />
                  </motion.div>
                </div>
                <div className="col-2 d-flex justify-content-center highlighted-text">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 1.4,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <SiCsharp />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
