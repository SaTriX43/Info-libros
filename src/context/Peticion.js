import { createContext, useEffect, useState } from "react";

const PeticionContext = createContext()

function PeticionProvider({children}) {

  const [inputSearch , setInputSearch] = useState(''); // valor del input
  const [resultBook , setResultBook] =  useState([]); //variable para guardar la busqueda
  const [maxResults] = useState(9);
  const [startIndex, setStartIndex] = useState(0)

  const apiKey = 'AIzaSyCQeXBZGYaT9wfPQuizPSHWDXGh7KXzCo4'

  //peticion
  async function searchBook() {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${inputSearch}&startIndex=${startIndex}&maxResults=${maxResults}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json()
      console.log(data.items)
      if(data.items) {
        setResultBook(data.items)
      }else {
        setResultBook([]);
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (inputSearch) {
      searchBook();
    }
  }, [startIndex]); 

  function handleNextPage() {
    setStartIndex((prevIndex) => prevIndex + maxResults)
  }

  function handlePreviusPage() {
    if(startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - maxResults)
    }
  }

  return (
    <PeticionContext.Provider value={{
      inputSearch , 
      setInputSearch , 
      resultBook , 
      searchBook,
      handleNextPage,
      handlePreviusPage
    }}>
      {children}
    </PeticionContext.Provider>
  )
}

export {PeticionContext, PeticionProvider}