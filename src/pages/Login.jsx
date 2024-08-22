import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";

import { signInWithEmailAndPassword } from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { useRef, useState } from "react";
import { auth } from "../firebase";
const db = getFirestore();

const Login = () => {
  const [err, setErr] = useState(false);
  const identifier = useRef();
  const password = useRef();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const signInUser = async (identifier, password) => {
      try {
        let email = identifier;

        // Check if identifier is a username (e.g., no "@" means it's likely a username)
        if (!identifier.includes("@")) {
          const q = query(
            collection(db, "users"),
            where("username", "==", identifier)
          );
          const querySnapshot = await getDocs(q);

          if (!querySnapshot.empty) {
            email = querySnapshot.docs[0].data().email; // Get the email associated with the username
          } else {
            throw new Error("Username not found");
          }
        }
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        console.log("User signed in:", user);
        if (user) {
          navigate("/home");
        }
      } catch (error) {
        setErr(true);
      }
    };

    signInUser(identifier.current.value, password.current.value);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 text-slate-200 p-10"
    >
      <h1 className="text-3xl border-b border-b-slate-200 py-4 mb-5">Login</h1>
      <p className="text-red-500">{err && "Wrong username or password"}</p>
      <Input ref={identifier} type="text" id="email" label="Email" />
      <Input ref={password} type="password" id="password" label="password" />
      <button
        type="submit"
        className="text-slate-100 border border-slate-300 px-4 py-2 mx-auto inline-block w-[200px]"
      >
        Login
      </button>
      <Link to="/register" className="text-slate-300 text-center">
        Don't have an account?{" "}
        <span className="italic border-b border-b-slate-200 cursor-pointer hover:text-slate-50">
          Register
        </span>
      </Link>
    </form>
  );
};
export default Login;
