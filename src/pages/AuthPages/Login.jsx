import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const encodedToken = localStorage.getItem("token");
  const {
    authState: { email, password },
    authDispatch,
    login,
  } = useAuthContext();

  return (
    <div className="main">
      <div className="signup-page">
        <h2 className="signup-title">Log In</h2>

        <input
          onChange={(e) =>
            authDispatch({ type: "EMAIL", payload: e.target.value })
          }
          value={email}
          type="email"
          className="signup-input"
          placeholder="Email"
          required
        />
        <input
          onChange={(e) =>
            authDispatch({ type: "PASSWORD", payload: e.target.value })
          }
          value={password}
          minLength="6"
          type="password"
          name="password"
          className="signup-input"
          placeholder="Password"
          required
        />

        <button
          className="btn-login"
          onClick={() =>
            login(email, password, navigate, location, encodedToken)
          }
        >
          Login
        </button>
        <button
          className="btn-login"
          onClick={() =>
            login(
              "adarshpatel@gmail.com",
              "adarsh@neog",
              navigate,
              location,
              encodedToken
            )
          }
        >
          Test Login
        </button>

        <span className="signup-span">
          New User ?
          <button
            onClick={() =>
              navigate("/signup", { state: { from: { pathname: "/" } } })
            }
            className="signup-link"
          >
            SignUp
          </button>
        </span>
      </div>
    </div>
  );
};

export { Login };
