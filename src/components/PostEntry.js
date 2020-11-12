import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./_PostEntry.scss";
export const PostEntry = ({ post, index }) => {
  return (
    <div className='post-entry__wrapper' data-order={index % 2 === 0 ? "even" : "odd"}>
      <div className='post-entry__image'>
        <img
          src={`https://picsum.photos/seed/${Math.floor(Math.random() * 10000)}/60?random=${index}`}
          alt={post.title}
        />
      </div>
      <div className='post-entry__content'>
        <div className='post-entry__title'>{post.title}</div>
        <div className='post-entry__body'>{post.body}</div>
      </div>
    </div>
  );
};
