import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import { Login } from "../Components/Login";
import { Signup } from "../Components/Signup";
import ReqAuth from "../ReqAuth/ReqAuth";
import Create from "../Components/Create"

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/create" element={<Create />}></Route>
    </Routes>
  );
};
