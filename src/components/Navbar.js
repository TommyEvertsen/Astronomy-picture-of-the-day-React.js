import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menu = {
    title: "Home",
    menuitem3: "APOD",
    menuitem4: "Space facts",
    menuitem5: "Rover"
  };

  return (
    <div className="Navbar">
      <Menu menu={menu} />
    </div>
  );
};

const Menu = (props) => {
  return (
    <div className="NavBar">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
      </head>
      <body className="body space-text">
        <nav style={{ backgroundColor: "#110022" }}  class="navbar navbar-expand-lg navbar-light bg-light ">
          <div class="container-fluid">
            <div class="navbar-header link">
              <Link
                style={{ color: "gold" }}
                to="/"
                class="navbar-brand className='space-text"
              >
                {props.menu.title}
              </Link>
            </div>

            <div class="navbar-header link">
              <Link
                style={{ color: "gold" }}
                to="/APOD"
                class="navbar-brand className='space-text"
              >
                {props.menu.menuitem3}
              </Link>
            </div>

           {/*  <div class="navbar-header link">
              <Link
                style={{ color: "gold" }}
                to="/Epic"
                class="navbar-brand className='space-text"
              >
                {props.menu.menuitem4}
              </Link>
            </div> */}

           

          </div>
        </nav>
        <div class="container">
          <h3></h3>
        </div>
      </body>
    </div>
  );
};

export { Navbar };
