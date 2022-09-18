

import { Link as RouterLink, useNavigate } from "react-router-dom";
import "./Style/Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <h1>Instagram</h1>
      </div>
      <div>
        <p></p>
      </div>
      <div className="left">
      <div>
          <RouterLink to="/create">
            <p>Craete Post</p>
          </RouterLink>
        </div>
        <div>
          <RouterLink to="/login">
            <p>Login</p>
          </RouterLink>
        </div>
        <div>
          <RouterLink to="/signup">
            <p>Signup</p>
          </RouterLink>
        </div>
      </div>
    </div>
  );
};
