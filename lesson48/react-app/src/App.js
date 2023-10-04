import React from "react";
import { useSelector } from "react-redux";
import LogIn from "./components/LogIn";
import Products from "./components/Products";
import SaveList from "./components/SaveList";
import LogOut from "./components/LogOut";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <div className="wrapper">
      <div className="list">
        <h1>Product list</h1>
        <Products />
        <SaveList />
      </div>
      {!isLoggedIn ? (
        <LogIn />
      ) : (
        <div>
          <LogOut />
        </div>
      )}
    </div>
  );
}

export default App;
