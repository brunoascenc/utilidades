import React from "react";

export default function PokesPagination({
  paginate,
  pokesPerPage,
  totalPokes,
}) {
  
  const pageNumbers = [];

  //Page Numbers
  for (let i = 1; i <= Math.ceil(totalPokes / pokesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="col-md-12 mt-5">
      <ul className="pagination justify-content-md-center ">
        {pageNumbers.map((number) => {
          return (
            <li key={number} className="page-item">
              <a
                href="/#"
                onClick={() => paginate(number)}
                className="page-link"
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
