import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { auth } from "../firebase";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";

const db = getFirestore(); // Initialize Firestore

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    const { username, email, password } = data;
    // console.log(data);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      // Save the username in Firestore
      await setDoc(doc(db, "users", user.uid), {
        username: username,
        email: email,
      });

      console.log("User registered with UID:", user.uid);
      if (user.uid) {
        toast.success("Registered successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 text-slate-200 p-10"
    >
      <Toaster />
      <h1 className="text-3xl border-b border-b-slate-200 py-4 mb-5">
        Register
      </h1>
      <Input type="text" id="username" label="Username" />
      <Input type="email" id="email" label="Email" />
      <Input type="password" id="password" label="password" />
      <button
        type="submit"
        className="text-slate-100 hover:border-slate-100 my-5 border border-slate-400 px-4 py-2 mx-auto inline-block w-[200px]"
      >
        Register
      </button>
      <Link to="/login" className="text-slate-300 text-center">
        Already have an account?{" "}
        <span className="italic border-b border-b-slate-200 cursor-pointer hover:text-slate-50">
          Login
        </span>
      </Link>
    </form>
  );
};
export default Register;
