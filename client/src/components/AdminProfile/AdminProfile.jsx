import React, { useState } from "react";
import "./AdminProfile.scss";
import { profileLogo } from "../../images";
import { FiChevronRight, FiPlus } from "react-icons/fi";
import Switch from "../Switch/Switch";
import { useNavigate } from "react-router-dom";
import SuitorAccess from "./SuitorAccess/SuitorAccess";
import AccessPermission from "./AccessPermission/AccessPermission";

const AdminProfile = (props) => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [contentBody, setContentBody] = useState({
    detail: "active",
    presmission: "",
    suitor: "",
  });

  const closeToggle = () => {
    setModal(false);
    setOverlay(false);
  };
  const modalToggle = () => setModal(!modal);
  const overlayToggle = () => setOverlay(!overlay);
  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const toggleBody = (id) => {
    switch (id) {
      case "2":
        setContentBody({
          detail: "",
          presmission: "active",
          suitor: "",
        });
        break;
      case "3":
        setContentBody({
          detail: "",
          presmission: "",
          suitor: "active",
        });
        break;
      default:
        setContentBody({
          detail: "active",
          presmission: "",
          suitor: "",
        });
        break;
    }
  };

  return (
    <div className="AdminProfile">
      <div className="profile_logo">
        <img src={profileLogo} alt="profile_logo" onClick={modalToggle} />
      </div>

      {modal ? (
        <>
          <div className="profile_modal">
            <ul>
              <li>
                <div className="modal_info">
                  <div className="info_logo">
                    <img src={profileLogo} alt="modal-logo" />
                  </div>
                  <div className="info_text">
                    <p>Name Name</p>
                    <span>Owner</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="vacation">
                  Vacation status
                  <div className="status">
                    Off <Switch className="switch" />
                  </div>
                </div>
              </li>
              <li onClick={() => overlayToggle()}>My profile</li>
              <li onClick={() => overlayToggle()}>Admin settings</li>
              <li onClick={() => overlayToggle()}>Archive</li>
              <li onClick={logoutHandler}>Sign out</li>
            </ul>
          </div>
          {overlay ? (
            <div className={`profile_overlay ${overlay ? "open" : null}`}>
              <div className="overlay_header">
                <div
                  className="overlay_toggle"
                  onClick={() => setOverlay(false)}
                >
                  <FiChevronRight className="toggle_icons" />
                </div>
              </div>
              <div className="overlay_title">
                <div className="person_info">
                  <div className="add_img">
                    <FiPlus />
                  </div>
                  <div className="info_img">
                    <img src={profileLogo} alt="person-logo" />
                  </div>
                  <div className="person_name">
                    <h3>Company name</h3>
                    <h6>Owner name</h6>
                  </div>
                </div>
                <h6>ID: 0959595847</h6>
              </div>
              <div className="overlay_content">
                <div className="content_navbar">
                  <ul>
                    <li
                      data-id="1"
                      onClick={(e) => toggleBody(e.target.dataset.id)}
                      className={contentBody.detail}
                    >
                      Company details <span className="nav_not">2</span>
                    </li>
                    <li
                      data-id="2"
                      onClick={(e) => toggleBody(e.target.dataset.id)}
                      className={contentBody.presmission}
                    >
                      Accesses permissions <span className="nav_not">2</span>
                    </li>
                    <li
                      data-id="3"
                      onClick={(e) => toggleBody(e.target.dataset.id)}
                      className={contentBody.suitor}
                    >
                      Accesses suitor <span className="nav_not">2</span>
                    </li>
                  </ul>
                </div>
                <div className="content_body">
                  <div
                    className={`company_details body_box ${contentBody.detail}`}
                  >
                    company_details
                  </div>
                  <AccessPermission
                    className={`body_box ${contentBody.presmission}`}
                  />
                  <SuitorAccess className={`body_box ${contentBody.suitor}`} />
                </div>
              </div>
            </div>
          ) : null}

          <div className="overlay_back" onClick={closeToggle} />
        </>
      ) : null}
    </div>
  );
};

export default AdminProfile;
