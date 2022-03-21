import React from "react";
import "./Search.scss";
import { MdSearch } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";

const Search = () => {
  return (
    <div className="Search">
      <form action="">
        <div className="input_box">
          <label htmlFor="search" className="search_icon">
            <MdSearch />
          </label>
          <input
            type="text"
            id="search"
            placeholder="Search folders, tasks, document"
          />
          <div className="search_types">
            All types <AiFillCaretDown className="types_icon" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
