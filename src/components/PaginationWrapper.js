import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Pagination from "./Pagination";
import { PeticionContext } from "../context/Peticion";

function PaginationWrapper() {

  const {resultBook} = useContext(PeticionContext)
  const location = useLocation()

  if(location.pathname === '/' && resultBook.length > 0) {
    return <Pagination/>
  }

  return null
}

export default PaginationWrapper