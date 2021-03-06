import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.Config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import "./Login.css";
import logo from "../../images/logo.png";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [createUser, setCreateUser] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState({
    errorMsg: "",
  });
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    error: "",

    success: false,
  });
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  };

  const handleChange = (e) => {
    let isFieldValid = true;

    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password" && "password2") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }

    if (user.password !== user.password2) {
      let passwordCheck = { ...passwordMatch };
      passwordCheck.errorMsg = "";
      passwordCheck.errorMsg = "password is not matched";
      setPasswordMatch(passwordCheck);
    }
    if (user.password == user.password2) {
      let passwordCheck = { ...passwordMatch };
      passwordCheck.errorMsg = "";
      setPasswordMatch(passwordCheck);
    }
  };
  const handleSubmit = (e) => {
    if (createUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          updateUserName(user.name);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }

    if (!createUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const { displayName, email } = res.user;
          let newUserInfo = { ...user };
          newUserInfo = { name: displayName, email };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          console.log(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }

    e.preventDefault();
  };

  const updateUserName = (name) => {
    var user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        console.log("user name updated");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="form-section">
      <form onSubmit={handleSubmit} className="login-area">
        {createUser && (
          <input
            type="text"
            name="name"
            onBlur={handleChange}
            placeholder="name"
          />
        )}
        <br />
        <input
          type="text"
          name="email"
          onBlur={handleChange}
          placeholder="email"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          onBlur={handleChange}
          placeholder="password"
          required
        />
        <br />
        {createUser && (
          <input
            type="password"
            name="password2"
            onBlur={handleChange}
            placeholder="confirm password"
            required
          />
        )}
        <p>{passwordMatch.errorMsg}</p>
        <br />
        <input
          className="submit-btn"
          type="submit"
          value={createUser ? "Create account" : "Login"}
        />
      </form>
      <div className="login-btn">
        <p>
          {createUser ? "already have an account?" : "don't have an account?"}
        </p>
        <button onClick={() => setCreateUser(!createUser)}>
          {createUser ? "Login" : "Create an account"}
        </button>
      </div>
      <hr />
      <button className="google-btn" onClick={handleGoogleSignIn}>
        <img src={logo} /> continue with google
      </button>

      <p style={{ color: "red" }}>{user.error}</p>
      {user.success && (
        <p style={{ color: "green" }}>
          user {createUser ? "created" : "logged In"} successfully
        </p>
      )}
    </div>
  );
};

export default Login;
