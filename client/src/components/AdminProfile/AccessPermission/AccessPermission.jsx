import React, { useEffect, useState } from "react";
import "./AccessPermission.scss";
import { AiFillCaretDown } from "react-icons/ai";
import axios from "axios";

const permission = [
  {
    status: "admin",
    description:
      "Can view and edit only in folders assigned to them, attach files.",
  },
  {
    status: "member",
    description:
      "Can view, comment and attach files only without edit in folders assigned to them.",
  },
  {
    status: "student",
    description: "Can view only without edit in folders assigned to them.",
  },
];

const AccessPermission = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      try {
        const { data } = await axios.get(
          `/api/admin/permission/${localStorage.getItem("userId")}`,
          config
        );
        setUsers(data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUsers();
  }, []);

  const editPermessionHandler = async (user, status) => {
    // document.getElementById(`permission-${user._id}`).style.display = "none";

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    let userEdited = user;

    userEdited.status = status;

    try {
      const { data } = await axios.put(
        `/api/admin/permission/${user._id}`,
        userEdited,
        config
      );

      console.log(data);
      setUsers(data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={`Access_permission ${props.className}`}>
      <div className="access_head">
        <p>Employess</p>
        <span>Accesses persmisions</span>
      </div>
      <div className="user_list">
        {users.map((user, index) => (
          <div className="user_item" key={index + "user"}>
            <div className="item_info">
              <div className="info_logo">MK</div>
              <div className="info_text">
                <p>{user.username}</p>
                <span>{user.email}</span>
              </div>
            </div>
            <div className="item_permission">
              <button className="delete_user">delete</button>
              <button>
                {user.status}{" "}
                <span>
                  <AiFillCaretDown />
                </span>
                <div className="permission_list" id={"permission-" + user._id}>
                  <ul>
                    {permission.map((per) => (
                      <li
                        key={index + "permission"}
                        onClick={() => editPermessionHandler(user, per.status)}
                      >
                        <h5>{per.status}</h5>
                        <p>{per.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccessPermission;
