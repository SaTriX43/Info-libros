import React, { useContext } from "react";
import '../styles/Book.css'
import { SizeContext } from "../context/Size";
import { useNavigate } from "react-router-dom";

function Book({resultBook ,id}) {

  const {isMobile} = useContext(SizeContext)
  const navigate = useNavigate()

  //redirige
  function handleClickBook() {
    navigate(`/details/${id}`)
  }
  

  return (
    <div className="main__result-book" onClick={handleClickBook}>
      <div className="main__result-book-container-img">
        {resultBook.imageLinks?.thumbnail ? (
          <img
            src={resultBook.imageLinks.thumbnail}
            alt={resultBook.title}
            className="book-img"
          />
        ): (
          <p>Imagen no encontrada</p>
        )}
      </div>
      <div className="main__result-book-container-info">
        <div className="main__result-book-container-info-up">
          <h3 className="main__result-book-title">{resultBook.title}</h3>
          <p className="main__result-book-author">{resultBook.authors}</p>
        </div>
        <div className={`main__result-book-container-info-down  ${!isMobile ? 'main__result-book-container-info-down-desktop' : ''}`}>
          <p>Year:  <b>{resultBook.publishedDate}</b></p>
          <p>Language:  <b>{resultBook.language}</b></p>
          <p>File:  <b>Pdf</b></p>
        </div>
      </div>
    </div>
  )
}

export default Book