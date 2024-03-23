import Header from "./Header";

const Login = () => {
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
      <form className="p-10 bg-black absolute lg:w-[25%] sm:w-[50%] my-36 mx-auto left-0 right-0 flex flex-col text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input type="text" placeholder="email address" className="p-4 my-4 w-full bg-transparent border border-solid border-gray-500 rounded"/>
        <input type="password" placeholder="password" className="p-4 my-4 w-full bg-transparent border border-solid border-gray-500 rounded"/>
        <button className="p-4 my-6 bg-[#E50909] w-full rounded-lg">Sign In</button>
        <p className="py-4">New to Netflix? Sign Up now</p>
      </form>
    </div>
  );
};

export default Login;
