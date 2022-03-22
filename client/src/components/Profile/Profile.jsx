import React, { useState } from "react";
import "./Profile.scss";
import { profileLogo } from "../../images";
import { FiChevronRight } from "react-icons/fi";
import Switch from "../Switch/Switch";

const Profile = () => {
  const [modal, setModal] = useState(false);
  const [overlay, setOverlay] = useState(false);

  const closeToggle = () => {
    setModal(false);
    setOverlay(false);
  };
  const modalToggle = () => setModal(!modal);
  const overlayToggle = () => setOverlay(!overlay);

  return (
    <div className="Profile">
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
                    <span>Product Manager</span>
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
              <li>Sign out</li>
            </ul>
          </div>
          {overlay ? (
            <div className={`profile_overlay ${overlay ? "open" : null}`}>
              <div className="overlay_header">
                <div className="person_status">
                  <span />
                  Work
                </div>
                <div
                  className="overlay_toggle"
                  onClick={() => setOverlay(false)}
                >
                  <FiChevronRight className="toggle_icons" />
                </div>
              </div>
              <div className="overlay_title">
                <div className="person_info">
                  <div className="info_img">
                    <img src={profileLogo} alt="person-logo" />
                  </div>
                  <div className="person_name">
                    <h3>Shahav Naftali</h3>
                    <h6>Product Manager</h6>
                  </div>
                </div>
                <h6>ID: 0959595847</h6>
              </div>
              <div className="overlay_content">
                <div className="content_navbar">
                  <ul>
                    <li>
                      Personal details <span className="nav_not">2</span>
                    </li>
                    <li>
                      Password <span className="nav_not">2</span>
                    </li>
                    <li>
                      Settings <span className="nav_not">2</span>
                    </li>
                  </ul>
                </div>
                <div className="content_body"></div>
              </div>
            </div>
          ) : null}

          <div className="overlay_back" onClick={closeToggle} />
        </>
      ) : null}
    </div>
  );
};

export default Profile;
