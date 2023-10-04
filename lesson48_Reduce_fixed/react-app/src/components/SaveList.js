import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; // You were missing useDispatch

const SaveList = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const coffeeValue = useSelector((state) => state.coffee);
  const sugarValue = useSelector((state) => state.sugar);
  const dispatch = useDispatch();

  const products = {
    coffee: coffeeValue,
    sugar: sugarValue,
  };

  useEffect(() => {
    if (localStorage.getItem('coffee')) {
      dispatch({
        type: 'save',
        setCoffee: localStorage.getItem('coffee'),
        setSugar: localStorage.getItem('sugar'),
      });
    }
  }, [dispatch]);

  const saveListData = () => {
    localStorage.setItem('coffee', products.coffee);
    localStorage.setItem('sugar', products.sugar);
  };

  const clearSaveList = () => {
    localStorage.removeItem('coffee');
    localStorage.removeItem('sugar');
    dispatch({ type: 'clear' });
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