export const ListItem = ({ element }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          border: "1px black solid",
          width: "95%",
          borderRadius: "3px",
          backgroundColor: "white",
          margin: "2px",
        }}
      >
        <div key={element.id + element.name}>{element.name}</div>
        <button style={{ cursor: "pointer" }}>move</button>
        <button style={{ cursor: "pointer" }}>delete</button>
      </div>
    </>
  );
};
