export const ListItem = ({ element }) => {
  return (
    <>
      <div style={{ display: "flex", border: "1px black solid", width: "90%" }}>
        <div key={element.id + element.name}>{element.name}</div>
      </div>
    </>
  );
};
