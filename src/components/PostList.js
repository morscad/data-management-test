import React, { useState } from "react";
import { uniqueId } from "lodash";

import { Paginator } from "./Paginator";
import { PostEntry } from "./PostEntry";
import "./_PostList.scss";

export const PostList = ({ list }) => {
  const NUM_POST_PER_PAGE = 10;

  const [currentPage, setCurrentPage] = useState(0);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(NUM_POST_PER_PAGE);

  const setPage = (p) => {
    console.log(p);
    setCurrentPage(p);
    setStart(p * NUM_POST_PER_PAGE);
    setEnd(p * NUM_POST_PER_PAGE + NUM_POST_PER_PAGE);
  };

  return (
    <>
      <div className='post-list__title'>Article Summary List</div>
      <div className='post-list__container'>
        {list &&
          list.slice(start, end).map((post, index) => <PostEntry post={post} key={uniqueId("post")} index={index} />)}
      </div>
      <Paginator setPage={setPage} numPages={Math.ceil(list.length / NUM_POST_PER_PAGE)} currentPage={currentPage} />
    </>
  );
};
