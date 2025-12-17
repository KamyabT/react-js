const Item = ({ item, onDelete }) => {
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
      <p className="mb-0">
        {item.item} {item.quantity}
      </p>
    </li>
  );
};

export default Item;
