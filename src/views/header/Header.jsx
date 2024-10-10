import React from "react";
import "./header.css";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { IoPower } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <>
      <div className="dvHeader shadow-sm sticky-top bg-colour6">
        <div className="dvStripe py-1">
          <div className="container-xl">
            <div className="row">
              <div className="dvUserInfo col-6 col-lg-6 d-flex align-items-center">
                <div className="mr-2">
                  <i className="fa-regular fa-user text-colour6"></i>
                </div>
                <div id="liwelcome" className="">
                  <span id="lblMemberName" className="text-colour6">
                    <span id="txtWelcome"></span>
                    <FaRegUser />
                    <span data-i18n="ABC-guest">Guest</span>
                  </span>
                </div>
              </div>
              <div className="col-6 col-lg-6 d-flex align-items-center justify-content-end">
                <div
                  id="lnkRegister"
                  className="dvActivationInfo col-6 text-end col-lg-auto me-0 me-lg-3 ml-lg-auto"
                >
                  <a
                    href="\Activation.aspx"
                    className="nav-link p-0 text-colour6"
                  >
                    <IoPower />
                    <span data-i18n="ABC-activation">Activation</span>
                  </a>
                </div>

                <div
                  id="lnkloginlogout"
                  className="dvLoginInfo col-6 col-lg-auto d-none d-lg-block text-end"
                >
                  <div className="nav-item">
                    <a
                      href="Login.aspx"
                      id="lnkLogin"
                      className="nav-link d-inline-block p-0 text-colour6"
                    >
                      <FaRegUser />
                      <span
                        className="nav-link p-0 d-inline-block"
                        data-i18n="ABC-login"
                      >
                        Login
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xl py-lg-3">
          <nav className="navbar navbar-expand-lg navbar-light px-0 py-2 mx-lg-n3">
            <div className="logo m-0 col-auto col-lg-2 px-0 px-lg-3 order-0 order-lg-0">
              <Link
                href="Index.aspx"
                className="d-inline-block pr-2 mr-1 border-right"
              >
                <img src="src/assets/images/logos/infinity-logo.svg" />
              </Link>
            </div>
            <div className="logo m-0 col-5 col-lg-2 px-0 px-lg-3 order-1 order-lg-2 text-lg-right">
              <Link
                href="https://www.abcbanking.mu/"
                target="_blank"
                className="d-inline-block"
              >
                <img src="src/assets/images/logos/abc-footer-logo.svg" />
              </Link>
            </div>
            {/* remove d-lg-none and style="display:none !important;" from below to display language selectmenu   */}
            <div className="order-2 col d-flex col-lg-auto align-items-center justify-content-end pr-0 pr-lg-0 d-lg-none">
              {/* <div className="dvLanguage pr-3 pr-lg-0 mb-1 mb-lg-0 d-flex- align-items-center" style="display: none !important;">
                     <div className="form-group select-dropdown selectUl selLanguage m-0">
                         <select className="form-control px-1 py-0 mt-1 mt-lg-0 py-2" id="languageSelector">
                         </select>
                     </div>
                 </div>  */}
              <select className="dvLang d-none" id="languageSelector">
                <option value="en">en</option>
                <option value="np">np</option>
                <option value="ar">ar</option>
              </select>
              <button
                className="navbar-toggler d-lg-none px-0 py-2 border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
              >
                <GiHamburgerMenu />
              </button>
            </div>
            <div
              className="navbar-collapse collapse order-3 order-lg-1 col-lg-8 px-0 px-lg-3 mb-1 mb-lg-0 justify-content-lg-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav align-items-lg-center w-100">
                <li className="nav-item">
                  <Link
                    className="nav-link py-2 py-lg-0 px-0 px-lg-3"
                    id="about"
                    to="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link py-2 py-lg-0 px-0 px-lg-3"
                    id="about"
                    to="/shop"
                  >
                    Shop
                  </Link>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link py-2 py-lg-0 px-0 px-lg-3"
                    id="earn"
                    href="ComingSoon.aspx"
                  >
                    Earn
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link py-2 py-lg-0 px-0 px-lg-3"
                    href="Redeem.aspx"
                    id="redeem"
                  >
                    Redeem
                  </a>
                </li>
                <li
                  className="nav-item dropdown"
                  visible="true"
                  id="limyaccount"
                >
                  <a
                    className="nav-link py-2 py-lg-0 px-0 px-lg-3"
                    href="StatementSummary.aspx"
                    id="navbarDropdown"
                  >
                    My Account
                  </a>
                </li>
                <li
                  className="nav-item d-block d-lg-none"
                  id="mob_lnkloginlogout"
                  runat="server"
                >
                  <a
                    href="Login.aspx"
                    className="nav-link p-2 btn btn-one mb-3"
                    id="mob_lnkLogin"
                  >
                    <FaRegUser />
                    <span className="d-inline-block">Login</span>
                  </a>
                  <a id="mob_liLogout" className="nav-link p-2 btn btn-one">
                    <FaRegUser />
                    <span className="d-inline-block">Logout</span>
                  </a>
                </li>
                {/* <li className="dvUserInfo nav-item d-flex align-items-center border-top ml-lg-auto pt-2 pt-lg-0">
                         <div className="d-flex align-items-center">
                             <div className="mr-2">
                                 <i className="fa-regular fa-user text-colour7"></i>
                             </div>
                             <div className="" id="liwelcome" visible="true">
                                 <asp:Label CssclassName="text-colour7 heading-semibold" ID="lblMemberName">
                                     <span id="txtWelcome"></span>
                                     <span>Guest</span>
                                 </asp:Label>
                             </div>
                         </div>
                     </li>  */}
              </ul>
              {/* <div className="dvLoginBtn d-none">
                     <div className="nav-item" id="lnkloginlogout">
                         <a href="Login.aspx" className="nav-link btn btn-one btn-sm d-inline-block mt-2 mt-lg-0" id="lnkLogin">
                             <i className="fa-regular fa-user pr-1 d-inline-block"></i>
                             <span className="nav-link p-0 d-inline-block text-uppercase">Login</span>
                         </a>
                         <a id="liLogout" visible="false">
                             <asp:LinkButton CausesValidation="false" ID="logout" data-toggle="modal" data-target="#dvLogoutModal" OnClick="SignOut" CssclassName="nav-link ml-lg-3 nav-link btn btn-one btn-sm d-inline-block mt-2 mt-lg-0">
                             <i className="fa-regular fa-user pr-1 d-inline-block"></i>
                              <span className="nav-link p-0 d-inline-block text-uppercase">Logout</span>
                             </asp:LinkButton>
                         </a>
                     </div>
                 </div> */}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
