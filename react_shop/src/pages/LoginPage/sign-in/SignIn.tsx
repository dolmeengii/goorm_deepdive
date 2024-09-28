import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "../../../components/form/Form";
import { loginEmail } from "../../../firebase";
import { setUserId } from "../../../store/cart/cart.slice";
import { setUser } from "../../../store/user/user.slice";

const SignIn = () => {
  const navigate = useNavigate();
  const [firebaseError, setFirebaseError] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (email: string, password: string) => {
    loginEmail(email, password).then((result) => {
      if (result) {
        const user = result.user;
        setUser(user);
        setUserId(user.uid);
        navigate("/");
      }
    });
  };

  return (
    <Form
      title={"로그인"}
      getDataForm={handleLogin}
      firebaseError={firebaseError}
    />
  );
};

export default SignIn;
