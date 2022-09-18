import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../App";
import { Link } from "react-router-dom";
import SinglePost from "./SinglePost";
import "./Style/Home.css";

const Home = () => {
  const [data, setData] = useState([]);
  const [comment, setComment] = useState("");
  const [disableInput, setDisableInput] = useState("");

  useEffect(() => {
    fetch("https://instagram-clone55.herokuapp.com/posts", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        result.sort((a, b) => b.id - a.id);
        setData(result);
      });
  }, []);

  return (
    <div className="home">
      {console.log("Map", data)}
      {data?.map((item) => {
        return <SinglePost item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Home;
