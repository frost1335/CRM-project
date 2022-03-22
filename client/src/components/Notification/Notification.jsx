import React, { useState } from "react";
import "./Notification.scss";
import { GrNotification } from "react-icons/gr";
import { FiChevronRight } from "react-icons/fi";
import { notification } from "../../images";

const Notification = () => {
  const [overlay, setOverlay] = useState(false);

  return (
    <div className="Notification">
      <div className="not_logo" onClick={() => setOverlay(true)}>
        <span />
        <GrNotification />
      </div>
      {overlay ? (
        <>
          <div className="not_overlay_back" onClick={() => setOverlay(false)} />

          <div className="not_overlay">
            <div className="overlay_header">
              <div className="close_icon" onClick={() => setOverlay(false)}>
                <FiChevronRight />
              </div>
            </div>
            <div className="overlay_title">
              <h3>Notification</h3>
            </div>
            <div className="overlay_content">
              <div className="content_navbar">
                <ul>
                  <li>
                    All <span>2</span>
                  </li>
                  <li>
                    Unread <span>2</span>
                  </li>
                </ul>
              </div>
              <div className="content_body">
                content body
                <div className="no_notification">
                  <img src={notification} alt="no-notification" />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Notification;
