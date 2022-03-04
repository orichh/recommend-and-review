export const ListItem = ({ element }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          border: "1px solid #d0d7de",
          width: "90%",
          borderRadius: "3px",
          backgroundColor: "white",
          margin: "3px",
          padding: "5px",
          cursor: "pointer",
        }}
        onClick={(e) => {
          alert("meh");
        }}
      >
        <div key={element.id + element.name}>{element.name}</div>
        <button
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            e.stopPropagation();
            alert("hit");
          }}
        >
          move
        </button>
        <button style={{ cursor: "pointer" }}>delete</button>
      </div>
    </>
  );
};
