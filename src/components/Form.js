import React, { useContext, useState } from "react";
import '../styles/Form.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { PeticionContext } from "../context/Peticion";

function Form() {

  const {searchBook ,inputSearch , setInputSearch } = useContext(PeticionContext)

  //actualiza el valor del input
  function handleInputSearch(e) {
    setInputSearch(e.target.value)
  }

  //llama a la funcion searchbook()
  function handleSubmit(e) {
    e.preventDefault()
    if(inputSearch.trim()) {
      searchBook()
    }else {
      console.log('Introdusca un valor')
    }
    
  }

  return (
    <form className="main__form" onSubmit={handleSubmit}>
      <div className="main__form-container-input">
        <input 
          type="text" 
          placeholder="Libro" 
          className="main__form-input"
          value={inputSearch}
          onChange={handleInputSearch}
        />
        <p onClick={() => setInputSearch('')}>X</p>
      </div>
      <div className="main__form-conatiner-search" onClick={handleSubmit}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="form__icon"
        />
      </div>
    </form>
  )
}

export default Form