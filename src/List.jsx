const List = ({ data, onDelete }) => {
  return (
    <main
      className="d-flex align-items-center justify-content-center"
      style={{ height: "60vh" }}
    >
      <ul className="d-flex align-items-center justify-content-center">
        {data.map((e) => {
          return (
            <li
              className="d-flex align-items-center justify-content-center me-4"
              style={{ listStyle: "none" }}
              key={Math.random()}
            >
              <span onClick={onDelete} className="me-2" style={{ cursor: "pointer" }}>
                ❌
              </span>
              <p className="mb-0">
                {e.item} {e.quantity}
              </p>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default List;
