import { useState } from "react";
import "../style.css";
import Layout from "../Layout";
import { useNavigate } from "react-router-dom";
import { GetActiveUser, SetActiveUser, UsersServices } from "../hook/Services";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { get } = UsersServices();
  const navigate = useNavigate();

  const onLogin = () => {
    const users = get();
    const currentUser = users.find(
      (user) => user.username === username && user.password === password
    );
    console.log(users);
    if (currentUser) {
      SetActiveUser(currentUser);
      console.log(GetActiveUser());
      navigate("/");
    }
  };

  return (
    <Layout>
      <div className="form">
        <div className="container">
          <label name="username">Username</label>
          <input
            name="username"
            placeholder="Username"
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
          />
        </div>
        <div className="container">
          <label name="password">Password</label>
          <input
            name="password"
            placeholder="Password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
          />
        </div>
        <div className="button">
          <button onClick={onLogin}>Login</button>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
