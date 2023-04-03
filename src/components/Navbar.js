import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ setUser, user }) => {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        window.location = "/login";
      }
    });
  }

  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/recipelist">All Recipe</NavLink> 
          

          {user ? (
            <>
              <NavLink to="/post-recipe">Create Recipe</NavLink>
            </>
          ) : (
            <></>
          )}
        </NavMenu>

        <NavBtn>
          {user ? (
            <>
            <NavLink to="/view">My Recipes</NavLink> 
              <NavBtnLink
                to="/logout"
                className="btn btn-primary btn-sm active"
                onClick={() => handleLogoutClick()}
              >
                Logout
              </NavBtnLink>
            </>
          ) : (
            <>
              <NavBtnLink to="/login" className="btn btn-primary btn-sm active">
                Login
              </NavBtnLink>
              <NavBtnLink
                to="/sign-up"
                className="btn btn-primary btn-sm active"
              >
                Sign Up
              </NavBtnLink>
            </>
          )}
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;