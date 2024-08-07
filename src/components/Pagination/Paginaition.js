import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Paginaition = ({ info, pageNumber, setPageNumber }) => {
  let [width, setWidth] = useState(window.innerWidth);

  let updateDimension = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);

  return (
    <>
      <style jsx>
        {`
          @media (max-width: 768px) {
            .next,
            .prev {
              display: none;
            }
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>

      <ReactPaginate
        className="pagination justify-content-center gap-4 my-4 "
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        nextLabel="Next"
        previousLabel="Prev"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        nextClassName="btn btn-outline-primary fs-5   next"
        previousClassName="btn btn-outline-primary fs-5 prev"
        activeClassName="active"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        onPageChange={(data) => {
          setPageNumber(data.selected + 1);
        }}
        pageCount={info?.pages}
      />
    </>
  );
};

export default Paginaition;
