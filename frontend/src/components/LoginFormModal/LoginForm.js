import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./LoginFormModal.css";

function LoginForm({ setShowModal }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/cars" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).then(() =>
      setShowModal(false)
    ).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors)  setErrors(data.errors);
    });
  };

  return (
    <form className="formModal" onSubmit={handleSubmit}>
      <h1>Welcome Back!</h1>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label>
        Username or Email
        <input
          className="inputField"
          type="text"
          placeholder="Username or Email"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          className="inputField"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button className="button" type="submit">
        Log In
      </button>
    </form>
  );
}

export default LoginForm;
