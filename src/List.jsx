const data = [
  { item: "passport", quantity: 2, packed: true },
  { item: "money", quantity: 1000, packed: true },
  { item: "tickets", quantity: 4, packed: true },
  { item: "shirts", quantity: 5, packed: false },
  { item: "socks", quantity: 3, packed: false },
];

const List = () => {
  console.log(data);

  return (
    <main
      className="d-flex align-items-center justify-content-center"
      style={{ height: "60vh" }}
    >
      hi list
    </main>
  );
};

export default List;
