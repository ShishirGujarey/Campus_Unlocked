import React from 'react'
import './Navbar.css';
function Navbar() { 
  return (
    <div>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"/>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.3/dist/jquery.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
    <nav class="navbar navbar-expand-sm navbar-custom fixed-top">

        <a class="navbar-brand" href="#url">
            <img src="https://nwm.iitk.ac.in/skins/elastic/images/logo.svg?s=1553129109" alt="logo" class="image_logo"/>
        </a>

        <a href ="#url" class="navbar-brand d-block abs-center-x text-center navbar-custom align-middle custom-font disabled">CAMPUS UNLOCKED</a>

        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link navbar-custom home-font" href="#url">HOME</a>
            </li>
        </ul>
    </nav>
    </div>
  )
};

export default Navbar;
