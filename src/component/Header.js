import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppState } from "../App";
import { signOutUser } from "../component/firebase/firebase";

const Header = () => {
  const { login, setLogin } = useContext(AppState);

  const handleLogout = async () => {
    try {
      // Call the signOut function from your firebase/firebase.js file
      await signOutUser();
      setLogin(false); // Update the login state to false
    } catch (error) {
      console.log("Error during logout:", error);
    }
  };

  return (
    <div className="sticky z-10  header top-0 text-3xl flex justify-between items-center border-b-2 border-gray-500 text-red-500 font-bold p-3 ">
      <Link to={"/"}>
        <span>
          Filmy<span className="text-white">Web</span>
        </span>
      </Link>
      <div className="flex items-center">
        {login && (
          <Link to={"/addmovie"}>
            <h1 className="text-lg flex items-center cursor-pointer mr-4">
              <Button variant="outlined" color="error">
                <AddIcon className="mr-1" color="inherit" />
                <span className="text-white">Add New</span>
              </Button>
            </h1>
          </Link>
        )}
        {login ? (
          <Button variant="outlined" color="error" onClick={handleLogout}>
            <span className="text-white font-medium capitalize">Logout</span>
          </Button>
        ) : (
          <Link to={"/login"}>
            <h1 className="text-lg bg-green-500 flex items-center cursor-pointer">
              <Button variant="outlined" color="error">
                <span className="text-white font-medium capitalize">Login</span>
              </Button>
            </h1>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
