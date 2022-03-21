import React from "react";
import "./Sidebar.scss";
import { logo } from "../../images";
import { RiTaskLine, RiFileCopy2Fill, RiFolderLine } from "react-icons/ri";
import { VscFileSubmodule } from "react-icons/vsc";
import {
  MdOutlineAnalytics,
  MdOutlinePeopleAlt,
  MdNotificationsNone,
} from "react-icons/md";

const links = [
  {
    icon: RiTaskLine,
    title: "My tasks",
    link: "",
  },
  {
    icon: VscFileSubmodule,
    title: "Task Manager",
    link: "",
  },
  {
    icon: RiFileCopy2Fill,
    title: "Storage",
    link: "",
  },
  {
    icon: RiFolderLine,
    title: "Folder name",
    link: "",
  },
  {
    icon: MdOutlineAnalytics,
    title: "Work status",
    link: "",
  },
  {
    icon: MdOutlinePeopleAlt,
    title: "Contacts",
    link: "",
  },
  {
    icon: MdNotificationsNone,
    title: "News board",
    link: "",
  },
];

const Sidebar = (props) => {
  return (
    <div className={`Sidebar ${props.toggle ? " " : " close"}`}>
      <div className="logo">
        <img src={logo} alt="logo.png" />
      </div>
      <div className="sidebar_list">
        <ul className="menu">
          {links.map((link, index) => (
            <li className="link" key={index}>
              <a href={link.link}>
                <link.icon className="icon" /> <span>{link.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
