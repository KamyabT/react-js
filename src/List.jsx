const List = ({ data }) => {
  return (
    <main
      className="d-flex align-items-center justify-content-center"
      style={{ height: "60vh" }}
    >
      <ul className="d-flex align-items-center justify-content-center">
        {data.map((e) => {
          return (
            <li className="me-4" style={{ listStyle: "none" }} key={Math.random()}>
              <span style={{ cursor: "pointer" }}>❌</span> {e.item} {e.quantity}
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default List;
