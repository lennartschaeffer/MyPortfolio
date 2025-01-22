import { FaBootstrap, FaHtml5, FaJava, FaPython } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCsharp } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import Me from "../photos/Me.jpg";
import { motion } from "framer-motion";
import mypic from "../photos/homepage Large.png";
import { SiTypescript } from "react-icons/si";

export const Home = () => {
  return (
    <div className="min-vh-100" style={{ background: "#070F2B" }}>
      <div
        className="card regular-text min-vh-100"
        style={{ background: "#263859" }}
      >
        <div className="card-body d-flex justify-content-center align-items-center">
          <div className="row ">
            <div className="col-lg-7 col-12 d-flex flex-column justify-content-center">
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
                    <h1 className="display-4 text-md-center font-weight-bold">
                      Hi, I'm
                      <span className="display-4 highlighted-text font-weight-bold">
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
                    <p className="lead text-md-center m-0 font-weight-normal">
                      I'm a second year CS student at{" "}
                      <span className="highlighted-text">
                        Dalhousie University{" "}
                      </span>{" "}
                      with a passion for{" "}
                      <span className="highlighted-text">
                        Full-Stack Software Development
                      </span>
                      , as well as an interest in{" "}
                      <span className="highlighted-text">
                        Cloud Technologies{" "}
                      </span>
                      and{" "}
                      <span className="highlighted-text">Generative AI</span>. I
                      enjoy exploring new technologies and utilizing my
                      creativity to build impactful solutions.
                    </p>
                  </motion.div>
                </div>
              </div>
              <div className="row p-3">
                <div className="col-2 d-flex justify-content-center highlighted-text align-items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.9,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <FaReact size={30} />
                  </motion.div>
                </div>
                <div className="col-2 d-flex justify-content-center highlighted-text align-items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 1,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <DiNodejs size={40} />
                  </motion.div>
                </div>
                <div className="col-2 d-flex justify-content-center highlighted-text align-items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 1.1,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <SiTypescript size={30} />
                  </motion.div>
                </div>
                <div className="col-2 d-flex justify-content-center highlighted-text align-items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 1.2,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <FaPython size={30} />
                  </motion.div>
                </div>
                <div className="col-2 d-flex justify-content-center highlighted-text align-items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 1.3,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <FaJava size={30} />
                  </motion.div>
                </div>
                <div className="col-2 d-flex justify-content-center highlighted-text align-items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 1.4,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <SiCsharp size={30} />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-12 d-flex justify-content-center align-items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <img
                  src={mypic}
                  alt="my-picture"
                  className="img-fluid rounded-lg "
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
