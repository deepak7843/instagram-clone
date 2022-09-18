import React, { useState } from "react";

import "./Style/Create.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [bodyText, setBodyText] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8080/posts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          body: bodyText,
          photo: photoUrl,
        }),
      });
      let resJson = await res.json();
      {
        console.log(photoUrl);
      }
      if (res.status === 200) {
        setTitle("");
        setBodyText("");
        setPhotoUrl("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="createContainer">
      <p className="txt">Create Post</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="createInput"
          value={title}
          placeholder="Enter Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="createInput"
          value={bodyText}
          placeholder="Enter Body"
          onChange={(e) => setBodyText(e.target.value)}
        />
        <input
          type="text"
          className="createInput"
          value={photoUrl}
          placeholder="Enter photo url"
          onChange={(e) => setPhotoUrl(e.target.value)}
        />
        <button type="submit" className="createButton">
          Create
        </button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
};

export default Create;
