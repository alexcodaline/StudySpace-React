import React, { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState({
    coffee: 0,
    sugar: 0,
  });

  const [showRemoveCoffee, setShowRemoveCoffee] = useState(false);
  const [showRemoveSugar, setShowRemoveSugar] = useState(false);

  useEffect(() => {
    setShowRemoveCoffee(products.coffee > 0);
    setShowRemoveSugar(products.sugar > 0);
  }, [products]);

  const addCoffee = () =>
    setProducts((prevState) => ({
      ...prevState,
      coffee: prevState.coffee + 1,
    }));

  const addSugar = () =>
    setProducts((prevState) => ({
      ...prevState,
      sugar: prevState.sugar + 1,
    }));

  const removeCoffee = () =>
    setProducts((prevState) => ({
      ...prevState,
      coffee: Math.max(prevState.coffee - 1, 0),
    }));

  const removeSugar = () =>
    setProducts((prevState) => ({
      ...prevState,
      sugar: Math.max(prevState.sugar - 1, 0),
    }));

  return (
    <div className="wrapper">
      <div className="list">
        <h1>Product list</h1>
        <div className="product">
          <span>{`Coffee: ${products.coffee}`}</span>
          <button onClick={addCoffee}>Add</button>
          {showRemoveCoffee && <button onClick={removeCoffee}>Remove</button>}
        </div>
        <div className="product">
          <span>{`Sugar: ${products.sugar}`}</span>
          <button onClick={addSugar}>Add</button>
          {showRemoveSugar && <button onClick={removeSugar}>Remove</button>}
        </div>
      </div>
    </div>
  );
}

export default App;
