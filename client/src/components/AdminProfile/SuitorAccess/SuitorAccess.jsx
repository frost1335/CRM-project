import axios from "axios";
import React, { useEffect, useState } from "react";
import "./SuitorAccess.scss";

const SuitorAccess = (props) => {
  const [suitor, setSuitor] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/suitor");

        setSuitor(data.data);
      } catch (error) {
        console.log(error.response.data.error);
      }
    };

    fetchData();
  }, []);

  const suitorAgreeHandler = async (id, status) => {
    document.getElementById(`agree_info-${id}`).style.display = "none";

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        `/api/suitor/agree/${id}`,
        { status },
        config
      );

      if (data.success) {
        const filterSuitor = suitor.filter((s) => s._id !== id);

        setSuitor(filterSuitor);
      }
    } catch (error) {
      const filterSuitor = suitor.filter((s) => s._id !== id);

      setSuitor(filterSuitor);
    }
  };

  const suitorDisagreeHandler = async (id) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(`/api/suitor/disagree/${id}`, config);

      if (data.success) {
        const filterSuitor = suitor.filter((s) => s._id !== id);

        setSuitor(filterSuitor);
      }
    } catch (error) {
      const filterSuitor = suitor.filter((s) => s._id !== id);

      setSuitor(filterSuitor);
    }
  };

  return (
    <div className={`access_suitor ${props.className}`}>
      <div className="suitor_head">
        <p>Suitors</p>
        <span>Decide suitors</span>
      </div>
      {suitor.length ? (
        <div className="suitor_list">
          {suitor.map((suit, index) => (
            <div className="suitor_item" key={index}>
              <div className="item_info">
                <div className="info_logo">MK</div>
                <div className="info_text">
                  <p>{suit.username}</p>
                  <span>{suit.email}</span>
                </div>
              </div>
              <div className="item_decide">
                <div className="decide">
                  <button
                    className="disagree"
                    onClick={() => suitorDisagreeHandler(suit._id)}
                  >
                    Disagree
                  </button>
                </div>
                <div className="decide agree">
                  <button className="agree">
                    Agree
                    <div className="agree_info" id={`agree_info-${suit._id}`}>
                      <ul>
                        {["admin", "member", "student"].map((status, index) => (
                          <li
                            key={index}
                            onClick={() => suitorAgreeHandler(suit._id, status)}
                          >
                            {status}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty_list">
          <h3>Suitors not found</h3>
        </div>
      )}
    </div>
  );
};

export default SuitorAccess;
