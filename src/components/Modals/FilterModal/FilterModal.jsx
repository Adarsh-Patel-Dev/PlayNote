// import React, { useState } from "react";
import { MdClose } from "react-icons/md";
// import { Toast } from "../../components/Toast/Toast";
// import "./modal.css";
import "./filtermodal.css"

function FilterModal() {
  return (
    <div style={{ display: "block" }} className="modal--container">
      <div id="myModal" className=" filter-modal modal">

        <div className="modal-content">
          <button onClick={() => {}} className="asidebar-btn top-right">
            Clear All
          </button>
          <div className="modal-body">
            <p className="modal-title">Tags</p>
            <ul className="flex-row-center flex-start">
              <li>
                <input type="checkbox" name="office" />
                <label htmlFor="office" className="label">
                  office
                </label>
              </li>
              <li>
                <input type="checkbox" name="food" />
                <label htmlFor="food" className="label">
                  food
                </label>
              </li>
              <li>
                <input type="checkbox" name="home" />
                <label htmlFor="home" className="label">
                  home
                </label>
              </li>
            </ul>

            <p className="modal-title">Priority</p>
            <ul className="flex-row-center flex-start">
              <li>
                <input type="checkbox" name="low" />
                <label htmlFor="low" className="label">
                  low
                </label>
              </li>
              <li>
                <input type="checkbox" name="medium" />
                <label htmlFor="medium" className="label">
                  medium
                </label>
              </li>
              <li>
                <input type="checkbox" name="high" />
                <label htmlFor="high" className="label">
                  high
                </label>
              </li>
            </ul>

            <p className="modal-title">Sort By Date</p>
            <ul className="flex-row-center flex-start">
              <li>
                <input type="radio" name="low" />
                <label htmlFor="low" className="label">
                  Latest
                </label>
              </li>
              <li>
                <input type="radio" name="medium" />
                <label htmlFor="medium" className="label">
                  Oldest
                </label>
              </li>
            </ul>

            <div className="modal--btn">
              <button className="btn-modal">Done</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { FilterModal };
