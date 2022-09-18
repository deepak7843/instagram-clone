import React from "react";
import "./Style/SinglePost.css";
import { v4 as uuidv4 } from 'uuid';

const SinglePost = ({ item }) => {
  return (
    
    <div className="container">
      <div className="card">
        <p className="title">{item.title}</p>
        <img className="post-image" src={item.photo} alt="postIm" />
        <div className="left-aligment">
          <p>{item.likes} likes</p>
          <div>
            <button>❤</button>
            <button>👍</button>
          </div>
          {item?.comments?.map((data) => (
            <div key={uuidv4()}>
              <p>
                <b>{data.postedBy} </b>: {data.commentText}
              </p>
            </div>
          ))}
          <input type="text" className="add-comment" placeholder="add a comment" />
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
