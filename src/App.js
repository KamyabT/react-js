import "./App.css";
import Form from "./Form";
import Header from "./Header";
import List from "./List";
import Stats from "./Stats";
import { useState } from "react";

function App() {
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function onDelete(itemId) {
    setItems((items) => items.filter((item) => item.id !== itemId));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      item: itemName,
      quantity: itemQuantity,
      packed: false,
      id: Math.random(),
    };

    handleAddItem(newItem);

    setItemName("");
    setItemQuantity(1);
  }

  function handlePack(itemId) {
    console.log("pack item");
    setItems((items) =>
      items.map((item) => (item.id === itemId ? { ...item, packed: !item.packed } : item))
    );
  }

  return (
    <>
      <Header />
      <Form
        itemName={itemName}
        onSetItemName={setItemName}
        itemQuantity={itemQuantity}
        onSetItemQuantity={setItemQuantity}
        onAddItem={handleSubmit}
      />
      <List data={items} onDelete={onDelete} onHandlePack={handlePack} />
      <Stats items={items} />
    </>
  );
}

export default App;
