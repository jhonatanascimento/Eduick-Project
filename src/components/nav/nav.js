import React from "react";
import Logo from "./svgs/logo/logo";
import HamburguerMenu from "./svgs/hamburguermenu/hamburguermenu";
import CloseButton from "./svgs/closebutton/closebutton";
import "./nav.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inverted: true
    };
    this.toggleInverted = this.toggleInverted.bind(this);
  }

  toggleInverted() {
    this.setState({ inverted: !this.state.inverted });
  }

  render() {
    const classNameNav = this.state.inverted ? "homeNav" : "homeNav show";

    return (
      <nav className={classNameNav}>
        <button onClick={this.toggleInverted} className="hamburguerMenu">
          <HamburguerMenu />
        </button>

        <div className="logo">
          <Logo />
        </div>
        <div onClick={this.toggleInverted} className="closeBtn">
          <CloseButton />
        </div>
        <div className="menu">
          <ul className="grid">
            <li>
              <a className="title" href="#title">
                How it works
                <div />
              </a>
            </li>
            <li>
              <a className="title" href="#title">
                About Us
                <div />
              </a>
            </li>
          </ul>
          <button className="menuBtn">Get Started</button>
        </div>
      </nav>
    );
  }
}

export default Nav;
