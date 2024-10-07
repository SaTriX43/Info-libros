// Pagination.js
import React, { useContext } from "react";
import '../styles/Pagination.css';
import { PeticionContext } from "../context/Peticion";

function Pagination() {
  const { handleNextPage, handlePreviousPage } = useContext(PeticionContext);

  return (
    <section className="main__pagination">
      <ul className="main__pagination-container">
        <li className="pagination__items">
          <button onClick={handlePreviousPage} className="pagination__link">Anterior</button>
        </li>
        <li className="pagination__items">
          <button onClick={handleNextPage} className="pagination__link">Siguiente</button>
        </li>
      </ul>
    </section>
  );
}

export default Pagination;
