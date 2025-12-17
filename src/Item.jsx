const Item = ({ item, onDelete, onHandlePack }) => {
  return (
    <li
      className="d-flex align-items-center justify-content-center me-4"
      style={{ listStyle: "none" }}
      key={item.id}
    >
      <span
        onClick={() => onDelete(item.id)}
        className="me-2"
        style={{ cursor: "pointer" }}
      >
        ❌
      </span>
      <p className={`mb-0 ${item.packed ? "text-decoration-line-through" : ""}`}>
        {item.item} {item.quantity}
      </p>
      <input
        type="checkbox"
        className="ms-2"
        onChange={() => onHandlePack(item.id)}
        value={item.packed}
      />
    </li>
  );
};

export default Item;
