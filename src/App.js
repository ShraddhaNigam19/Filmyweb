import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Cards from "./component/Cards";
import AddMovie from "./component/AddMovie";
import Detail from "./component/Detail";
import { createContext, useEffect, useState } from "react";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
const AppState = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <AppState.Provider value={{ login, userName, setLogin, setUserName }}>
      <div className="App relative">
        <Header />
        <Routes>
          <Route path="/" element={<Cards />}></Route>
          <Route path="/addmovie" element={<AddMovie />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </div>
    </AppState.Provider>
  );
}

export default App;
export { AppState };
