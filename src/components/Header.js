import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { logo, userAvatar } from "../utils/constants";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //useSelector to read user object from store
    const user = useSelector(store => store.user);
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
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName } = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName}));
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

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
        <img
            className="w-44"
            src={logo}
            alt="logo"
        />

        {user && <div className="p-2 m-2 flex">
            <img
            alt="user-icon"
            src={userAvatar}
            />
            <div><span className=" font-bold text-white p-2 m-2">{user.displayName}</span></div>
            <button onClick={handleSignout} className="font-bold text-white">
            Sign Out
            </button>
        </div>}

    </div>
  );
};

export default Header;
