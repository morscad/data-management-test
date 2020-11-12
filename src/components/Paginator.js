import React from "react";
import { times, uniqueId } from "lodash";

import "./_Paginator.scss";

export const Paginator = ({ numPages, currentPage, setPage }) => {
  return (
    <div className='paginator__container'>
      {times(numPages, (index) => (
        <div
          key={uniqueId("page")}
          onClick={() => {
            setPage(index);
          }}
          className={`paginator__page paginator__page-${currentPage === index ? "in" : ""}active`}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};
