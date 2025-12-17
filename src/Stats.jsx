const Stats = ({ items }) => {
  const itemsNum = items.length;
  const itemsPacked = items.filter((item) => item.packed).length;
  return (
    <div
      className="bg-black d-flex align-items-center justify-content-center text-white"
      style={{ height: "15vh" }}
    >
      You have packed {itemsPacked} number out of {items.length} items :
      {(itemsPacked / itemsNum) * 100}% Done
    </div>
  );
};

export default Stats;
