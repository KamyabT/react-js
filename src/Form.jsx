import { useState } from "react";

const Form = () => {
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("1");

  function handleAddItem(e) {
    e.preventDefault();
    console.log(itemName , itemQuantity);
  }

  return (
    <div
      className="bg-warning d-flex align-items-center justify-content-center"
      style={{ height: "10vh" }}
    >
      <form className="d-flex" action="" onClick={(e) => handleAddItem(e)}>
        <input
          className="form-control me-2"
          type="text"
          placeholder="item name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <select
          className="form-control form-control-sm me-2"
          name=""
          id=""
          value={itemQuantity}
          onChange={(e) => setItemQuantity(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button className="form-control">Submit</button>
      </form>
    </div>
  );
};

export default Form;
