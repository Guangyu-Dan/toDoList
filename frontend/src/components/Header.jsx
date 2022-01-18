import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SaveIcon from "@material-ui/icons/Save";
import Fab from "@material-ui/core/Fab";
import axios from 'axios';
function Header(props) {
  return (
    <header>
    <div class="container-fluid">
      <div class='row'>
        <div class="col-lg-2 col-md-3">
          <h1 class="logo">
            <HighlightIcon  className="logo_icons"/>&nbsp;
            Keeper
          </h1>
        </div>
        <div class="col-lg-8 login-info col-md-7">
          { props.email !== "null" && <h1>
          Logged in as <u>{props.email}</u>&nbsp;</h1>}
        </div>
        <div class="col-lg-2 nav-icons col-md-2">
          { props.email !== "null" && <h1>
          <Fab onClick={props.handleSubmit} size="medium"><SaveIcon className="svg_icons"/> </Fab>&nbsp;&nbsp;
          <Fab onClick={props.handleLogout} size="medium"><ExitToAppIcon className="svg_icons"/> </Fab></h1>}
        </div>
      </div>
    </div>
    </header>
  );
}

export default Header;
