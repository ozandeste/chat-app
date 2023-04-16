import { useForm } from "react-hook-form";
import { EyeIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";

type Props = {
  setIsLoggedIn: (value: Boolean) => void;
};

interface User {
  email: string;
  password: string;
}

const Form = ({ setIsLoggedIn }: Props) => {
  const [signUp, setSignUp] = useState(true);
  const [authData, setAuthData] = useState<User>({ email: "", password: "" });
  const passwordRef = useRef(null);

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onChangeForm = (e: any) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: any) => {
    const isValid = await trigger();

    if (!isValid) {
      e.preventDefault();
    } else {
      authfunc();
      e.preventDefault();
    }
  };

  const showPassword = (passwordRef: any) => {
    if (passwordRef.current.type === "password") {
      passwordRef.current.type = "text";
    } else {
      passwordRef.current.type = "password";
    }
  };

  const authfunc = async () => {
    console.log("Gel");
    if (signUp) {
      try {
        const data = await createUserWithEmailAndPassword(
          auth,
          authData.email,
          authData.password
        );
        const user = data.user;

        if (user) {
          setSignUp(!signUp);
        }
      } catch (e: unknown) {
        if (typeof e === "string") console.log(e.toUpperCase());
        else if (e instanceof Error) console.log(e.message);
      }
    } else {
      try {
        const data = await signInWithEmailAndPassword(
          auth,
          authData.email,
          authData.password
        );
        const user = data.user;
        if (user) {
          setIsLoggedIn(true);
          localStorage.setItem("token", "loggedIn");
        }
      } catch (e: unknown) {
        if (typeof e === "string") console.log(e.toUpperCase());
        else if (e instanceof Error) console.log(e.message);
      }
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-purple-dark-100">
      <h1 className="mb-8 text-[32px] font-bold selection:bg-black">
        {signUp ? "Register" : "Login"}
      </h1>
      <motion.form
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        exit={{scale: 0}}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="rounded-lg bg-purple-dark-300 px-16 py-12"
        target="_blank"
        onSubmit={onSubmit}
        method="POST"
      >
        <div className="relative flex items-center gap-3">
          <label className="absolute right-5" htmlFor="search">
            {/* <MagnifyingGlassIcon className="h-6 w-6 text-purple-40" /> */}
          </label>
          <input
            id="email-address"
            className="w-full rounded-lg bg-purple-dark-100 px-2 py-2 text-white outline-none focus:outline-1 focus:outline-purple-dark-100"
            type="text"
            placeholder="Email address"
            onChange={onChangeForm}
            name="email"
            value={authData.email}
          />
        </div>

        <div className="relative mt-5 flex items-center gap-3">
          <label
            className="absolute right-5"
            onClick={() => showPassword(passwordRef)}
          >
            <EyeIcon className="h-6 w-6 text-purple-40" />
          </label>
          <input
            id="password"
            ref={passwordRef}
            className="w-full rounded-lg bg-purple-dark-100 px-2 py-2 text-white outline-none focus:outline-1 focus:outline-purple-dark-100"
            type="password"
            placeholder="Password"
            onChange={onChangeForm}
            name="password"
            value={authData.password}
          />
        </div>

        <h1 className="mt-5 cursor-pointer py-3">Google ile giriş yap</h1>
        <h1 onClick={() => setSignUp(false)} className="cursor-pointer py-3 text-red-400">
          Daha önceden kayıt oldunuz mu?
        </h1>
        <button
          type="submit"
          className="float-right mt-8 rounded-md px-5 py-3 transition duration-100 hover:bg-purple-100 hover:text-white"
        >
          {signUp ? "Register" : "Login"}
        </button>
      </motion.form>
    </div>
  );
};

export default Form;
