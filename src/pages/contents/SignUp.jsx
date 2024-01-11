import { useState } from "react";
import "../style.css";
import Layout from "../Layout";
import { UsersServices } from "../hook/Services";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [organization, setOrganization] = useState("");
  const { create } = UsersServices();

  const OnSignup = () => {
    create({ username, password, fullname, organization });
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
        <div className="container">
          <label name="fullname">Fullname</label>
          <input
            name="fullname"
            placeholder="Fullname"
            value={fullname}
            onChange={(evt) => setFullname(evt.target.value)}
          />
        </div>
        <div className="container">
          <label name="organization">Organization</label>
          <input
            name="organization"
            placeholder="Organization"
            value={organization}
            onChange={(evt) => setOrganization(evt.target.value)}
          />
        </div>
        <div className="button">
          <button onClick={OnSignup}>Save</button>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
