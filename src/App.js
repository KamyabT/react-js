import "./App.css";
import Form from "./Form";
import Header from "./Header";
import List from "./List";
import Stats from "./Stats";
import { useState } from "react";

// const data = [
//   { id: 1, item: "passport", quantity: 2, packed: true },
//   { id: 2, item: "money", quantity: 1000, packed: true },
//   { id: 3, item: "tickets", quantity: 4, packed: true },
//   { id: 4, item: "shirts", quantity: 5, packed: false },
//   { id: 5, item: "socks", quantity: 3, packed: false },
// ];

function App() {
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      item: itemName,
      quantity: itemQuantity,
      packed: false,
      id: Date.now(),
    };

    handleAddItem(newItem);

    setItemName("");
    setItemQuantity(1);
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
      <List data={items} />
      <Stats />
    </>
  );
}

export default App;
