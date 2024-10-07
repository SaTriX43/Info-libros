import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";

function HeaderWrapper() {

  const location = useLocation()

  if (location.pathname === '/') {
    return <Header/>;
  }

  return null
}


export default HeaderWrapper