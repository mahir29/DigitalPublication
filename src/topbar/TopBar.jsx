import React from 'react'

import "./topbar.css"

export default function TopBar() {
    return (
        <div className="top">
          <div className="topLeft">
            <i className="topIcon fab fa-facebook"></i>
            <i className="topIcon fab fa-twitter"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-instagram"></i>
          </div>
          <div className="topCenter">
              <ul className="topList">
                  <li className="topListItem">HOME</li>
                  <li className="topListItem">ABOUT</li>
                  <li className="topListItem">CONTACT</li>
                  <li className="topListItem">WRITE</li>
                  <li className="topListItem">LOGOUT</li>
              </ul>
          </div>
          <div className="topRight">
              <img src="/" className="topImg"></img>
              <i className="topSearchIcon fas fa-search"></i>
          </div>

        </div>
    )
}


