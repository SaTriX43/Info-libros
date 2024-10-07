import React, { useContext } from "react";
import '../styles/Results.css'
import Book from "./Book";
import { SizeProvider } from "../context/Size";
import { PeticionContext } from "../context/Peticion";

function Results() {

  const {resultBook} = useContext(PeticionContext)

  return (
    <section className="main__results">
      <SizeProvider>
        {resultBook.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            resultBook={book.volumeInfo} 
          />
        ))}
      </SizeProvider>
    </section>
  )
}

export default Results