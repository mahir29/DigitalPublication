import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="enter your email"
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="enter your password"
        />

        <button className="loginButton">Login</button>
     
      <button className="loginRegisterButton">
        <Link className="link" to="/register">Register</Link>
      </button>
      </form>
    </div>
  );
}
