import React from "react";
import "./Header.scss";
import logo from "../../images/Header/logo.png";
import menuIcon from "../../images/Header/menuIcon.svg";
import Container from "../Container/Container";
import HeaderLayout from "../../layout/HeaderLayout/HeaderLayout";
import openCloseMenu from "./funcoes/openCloseMenu";

function Header() {
  return (
    <HeaderLayout>
      <Container>
        <div className="header">
          <div className="container-header-menu-icon-e-logo-link">
            <img
              className="header__menu-icon"
              onClick={openCloseMenu}
              src={menuIcon}
              alt="menu icon open"
            />
            <a className="header__logo-link" href="./index.html">
              <img className="header__logo" src={logo} alt="logo food savor" />
            </a>
          </div>

          <nav className="header__nav">
            <div className="container-menu-icon">
              <img
                className="nav__menu-icon"
                onClick={openCloseMenu}
                src={menuIcon}
                alt="menu icon close"
              />
            </div>
            <div className="container-nav-links">
              <a className="header__link" href="./Home">
                Home
              </a>
              <a className="header__link" href="./recipe">
                Recipe
              </a>
              <a className="header__link" href="./popular">
                Popular
              </a>
            </div>
          </nav>

          <a className="header__signup" href="./signup">
            Sign Up
          </a>
        </div>
      </Container>
    </HeaderLayout>
  );
}

export default Header;
