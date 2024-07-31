import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import catTyping from "../photos/catTyping.gif";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
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
    <div className="bg-dark text-monospace text-white">
      <div className="card bg-lighter min-vh-100 pb-5">
        <div className="card-header text-center">
          <h3>Contact</h3>
        </div>
        <motion.div
          initial={offScreen}
          whileInView={onScreen}
          viewport={{ once: true }}
        >
          <div className="card-body h-100">
            <div className="row">
              <div className="col-md-4 mb-5 mb-md-0">
                <div
                  className="card bg-card text-white h-100"
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                  }}
                >
                  <div className="card-header">
                    <h4>My Info</h4>
                  </div>
                  <div className="card-body">
                    <div className="card-text">
                      Thanks for checking out my page! See my socials below to
                      connect :)
                    </div>
                    <div className="d-flex justify-content-around p-4">
                      <IconContext.Provider
                        value={{ color: "white", size: "50px" }}
                      >
                        <div>
                          <a href="https://github.com/lennartschaeffer">
                            <FaGithub />
                          </a>
                        </div>
                      </IconContext.Provider>
                      <IconContext.Provider
                        value={{ color: "white", size: "50px" }}
                      >
                        <div>
                          <a href="http://www.linkedin.com/in/lennart-schaeffer-929b12247">
                            <FaLinkedin />
                          </a>
                        </div>
                      </IconContext.Provider>
                      <IconContext.Provider
                        value={{ color: "white", size: "50px" }}
                      >
                        <div>
                          <a href="mailto:lennartschaeffer@hotmail.com">
                            <MdEmail />
                          </a>
                        </div>
                      </IconContext.Provider>
                    </div>
                  </div>
                  <div className="card-foooter d-flex justify-content-center p-4">
                    <img
                      src={catTyping}
                      alt=""
                      className="img-fluid rounded-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div
                  className="card bg-card text-white"
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                  }}
                >
                  <div className="card-header">
                    <h4>Contact Me</h4>
                  </div>
                  <div className="card-body d-flex justify-content-center">
                    <form
                      action="https://formspree.io/f/xzzprryp"
                      method="POST"
                      className="d-flex flex-column align-items-center"
                    >
                      <div className="">
                        <label htmlFor="firstname">First Name</label>
                        <br />
                        <input
                          name="first"
                          onChange={(e) =>
                            setForm({ firstName: e.target.value })
                          }
                          id="firstname"
                          type="text"
                          placeholder="John"
                          className="bg-lighter text-white rounded-lg"
                          required
                        />
                      </div>
                      <div className="">
                        <label htmlFor="lastname">Last Name</label>
                        <br />
                        <input
                          name="last"
                          onChange={(e) =>
                            setForm({ lastName: e.target.value })
                          }
                          id="lastname"
                          type="text"
                          placeholder="Doe"
                          className="bg-lighter text-white rounded-lg"
                          required
                        />
                      </div>
                      <div className="">
                        <label htmlFor="email">Email</label>
                        <br />
                        <input
                          name="email"
                          onChange={(e) => setForm({ email: e.target.value })}
                          id="email"
                          type="email"
                          placeholder="example@email.com"
                          className="bg-lighter text-white rounded-lg"
                          required
                        />
                      </div>
                      <div className="">
                        <label htmlFor="phone">Phone #</label>
                        <br />
                        <input
                          name="tel"
                          onChange={(e) => setForm({ phone: e.target.value })}
                          id="phone"
                          type="tel"
                          placeholder="(000)- 0000"
                          className="bg-lighter text-white rounded-lg"
                          required
                        />
                      </div>
                      <div className="">
                        <label htmlFor="comments">Message</label>
                        <br />
                        <textarea
                          name="text"
                          onChange={(e) => setForm({ message: e.target.value })}
                          rows={3}
                          id="comments"
                          className="bg-lighter text-white rounded-lg"
                          required
                        ></textarea>
                      </div>
                      <div>
                        <input type="submit" className="btn btn-primary" />
                      </div>
                      <ToastContainer />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
