export const ListItem = ({ element }) => {
  return (
    <>
      <div style={{ display: "flex", border: "1px black solid" }}>
        <div key={element.id + element.name}>
          {element.name} {element.rating} {element.date_added}{" "}
          {element.watched.toString()}
        </div>
      </div>
    </>
  );
};
