import { useNavigate, useParams } from 'react-router-dom'
import '../styles/details.css'
import { useContext, useEffect, useState } from 'react';
import { PeticionContext } from '../context/Peticion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Details() {

  const {id} = useParams();
  const navigate = useNavigate()
  const {resultBook} = useContext(PeticionContext);
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    if(resultBook && resultBook.length > 0) {
      const foundBook = resultBook.find((book) => book.id === id) ;
      if(foundBook) {
        setBookDetails(foundBook.volumeInfo)
      }
    }else {
      console.log('libro no encontrado')
      navigate('/')
    }
    
    
  },[id , resultBook, navigate])

  if(!bookDetails) {
    console.log(!bookDetails)
    return <h1>Cargando detalles del libro...</h1>
  }

  return (
    <article className="details">
      <p className='details-back' onClick={() => navigate('/')}>
        <FontAwesomeIcon
          icon={faArrowLeft}
        />
      </p>
      <header className="details__header">
        <p>
          <span>Principal</span> | {bookDetails.title}
        </p>
      </header>
      <main className="details__main">
        <div className="details__container-img">
          {bookDetails.imageLinks?.thumbnail ? (
            <img
              src={bookDetails.imageLinks.thumbnail}
              alt={bookDetails.title}
              className="book-img"
            />
          ): (
            <p>Imagen no encontrada</p>
          )}
        </div>
        <section className="details__container-title-info">
          <div className="details__container-title">
            <h2 className="details-title">
              {bookDetails.title}
            </h2>

            <p><b>Descripcion: </b> {bookDetails.description}</p>
          </div>
          <div className="details__container-info">
            <p>Categoria:  <span>{bookDetails.categories}</span></p>
            <p>Anio:   <span>{bookDetails.publishedDate}</span></p>
            <p>Lenguaje:  <span>{bookDetails.language}</span></p>
            <p>Paguinas:   <span>{bookDetails.pageCount}</span></p>
            
          </div>
        </section>
      </main>
    </article>
  )
}

export default Details