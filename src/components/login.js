import { checkValidData } from "../utils/validate";
import Header from "./Header";
import { useRef, useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInform = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
      const message = checkValidData(email.current.value, password.current.value);
      setErrorMessage(message);
  }

  return (
    <div>
      <Header />
      <div className="bg-cover block h-[100%] absolute w-[100%] min-h-[100vh]">
        <img
          className="min-h-[100%] min-w-[100%]"
          src="
                https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form onSubmit={ (e) => e.preventDefault() } className="p-10 bg-black absolute lg:w-[25%] sm:w-[50%] my-36 mx-auto left-0 right-0 flex flex-col text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {" "}
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        
        { !isSignIn && <input
          type="text"
          placeholder="Name"
          className="p-4 my-4 w-full bg-transparent border border-solid border-gray-500 rounded"
        />}

        <input
          required
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-4 my-4 w-full bg-transparent border border-solid border-gray-500 rounded"
        />
        <input
          required
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-transparent border border-solid border-gray-500 rounded"
        />
        <p className="text-red-600">{errorMessage}</p>
        <button className="p-4 my-6 bg-[#E50909] w-full rounded-lg" onClick={handleButtonClick}>
        {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        {isSignIn ? (
          <p className="py-4 cursor-pointer" onClick={toggleSignInform}>
            New to Netflix? Sign Up now
          </p>
        ) : (
          <p className="py-4 cursor-pointer" onClick={toggleSignInform}>
            Already a registered, Sign In!
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
