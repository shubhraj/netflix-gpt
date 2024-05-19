import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { logo, userAvatar, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //useSelector to read user object from store
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  //this hook will take care of all dispath related to user store
  useEffect(() => {
    //read firebase docs to understand it better, onAuthStateChanged returns unsubscribe function
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsubscribe when component unmounts to remove the event listner
    return () => unsubscribe();
  }, []); // empty [] execute this hook only once

  const handleGPTButtonClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between flex-col md:flex-row">
      <img className="w-44 mx-auto md:mx-0" src={logo} alt="logo"/>

      {user && (
        <div className="p-2 flex justify-between">
          {showGptSearch && (
            <select
              className="p-2 bg-gray-900 text-white m-2"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="text-white bg-purple-800 mx-4 py-2 px-4 rounded w-40"
            onClick={handleGPTButtonClick}
          >
            {showGptSearch ? "HomePage" : "GPT Search"}
          </button>
          <img alt="user-icon" src={userAvatar} className="hidden md:block"/>
          <div>
            <span className="font-bold text-white p-2 m-2 hidden md:block">
              {user.displayName}
            </span>
          </div>
          <button onClick={handleSignout} className="font-bold text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
