import Item from "./Item";

const List = ({ data, onDelete }) => {
  return (
    <main
      className="d-flex align-items-center justify-content-center"
      style={{ height: "60vh" }}
    >
      <ul className="d-flex align-items-center justify-content-center">
        {data.map((item) => {
          return <Item item={item} onDelete={onDelete}></Item>;
        })}
      </ul>
    </main>
  );
};

export default List;
