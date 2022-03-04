import { useEffect } from "react";
import { deleteRequest } from "../api";
export const ListItem = ({ element, user_id, setList }) => {
  const handleDelete = (e) => {
    e.stopPropagation();
    const payload = {
      user_id: user_id,
      list_id: element.id,
    };
    deleteRequest("/api/v1/lists", payload)
      .then((response) => {
        setList(response.data);
        alert("deleted");
      })
      .catch(() => alert("error deleting"));

    /*
      on click, send post request to endpoint
      what am i sending with the post request?
      need the list it's on, and the id of it


    */
  };
  useEffect(() => {
    console.log("element in line 21", element, user_id);
  }, [element, user_id]);

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
        <div key={element.id + element.name}>
          {element.name} + {element.id}
        </div>
        <button
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            e.stopPropagation();
            alert("hit");
          }}
        >
          move
        </button>
        <button style={{ cursor: "pointer" }} onClick={handleDelete}>
          delete
        </button>
      </div>
    </>
  );
};
