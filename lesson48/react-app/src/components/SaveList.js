import React from "react";
import { useSelector } from "react-redux";

const SaveList = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const coffee = useSelector((state) => state.coffee);
  const sugar = useSelector((state) => state.sugar);

  const saveListData = () => {
    const dataToSave = { coffee, sugar };
    localStorage.setItem("Дані замовлення:", JSON.stringify(dataToSave));
  };

  const clearSaveList = () => {
    localStorage.clear();
  };

  return (
    <div className="save">
      {!isLoggedIn ? (
        <p>You must be logged in to save the list.</p>
      ) : (
        <div>
          <button onClick={saveListData}>SAVE</button>
          <button onClick={clearSaveList}>CLEAR</button>
        </div>
      )}
    </div>
  );
};

export default SaveList;
