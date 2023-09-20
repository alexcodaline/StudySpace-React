import React, { useState } from "react";
import Product from "./components/Product";

function App() {
  const productsList = [
    { name: "Iphone", price: 800, id: 1 },
    { name: "Watch", price: 100, id: 2 },
  ];
  const [products, setProducts] = useState(productsList);
  const [newProducts, setNewProducts] = useState({
    name: "",
    price: "",
    id: 3,
  });

  const [isValidName, setValidName] = useState(true);
  const [isValidPrice, setValidPrice] = useState(true);

  const validName = () => newProducts.name.length > 1;
  const validPrice = () => newProducts.price > 0;

  const addProducts = () => {
    if (validName() && validPrice()) {
      const newProduct = { ...newProducts, id: products.length + 1 };
      setProducts((prev) => [...prev, newProduct]);
      setNewProducts({
        name: "",
        price: "",
        id: newProduct.id + 1,
      });
    }
  };

  const removeProduct = (id) => {
    const newList = products.filter((product) => product.id !== id);
    setProducts(newList);
  };

  const changeName = (e) => {
    setNewProducts({ ...newProducts, name: e.target.value });
  };

  const changePrice = (e) => {
    setNewProducts({ ...newProducts, price: parseFloat(e.target.value) });
  };

  return (
    <div className="wrapper">
      <div className="add">
        <label>Product name</label>
        <input
          onChange={changeName}
          type="text"
          onBlur={() => setValidName(validName())}
          value={newProducts.name}
        />
        <label>Product price</label>
        <input
          onChange={changePrice}
          type="number"
          onBlur={() => setValidPrice(validPrice())}
          value={newProducts.price}
        />
        <button onClick={addProducts} type="button">
          Add
        </button>
      </div>
      <div className="list">
        {products.map((product) => (
          <Product
            onRemove={removeProduct}
            key={product.id}
            id={product.id}
            name={product.name}
            price={`${product.price} $`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
