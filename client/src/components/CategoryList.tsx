import { InputField, ListItem } from ".";
import { useContext, useEffect, useState } from "react";
import { postRequest } from "../api";
import { UserContext } from "../contexts/UserContext";

type ListType = {
  listName: string;
  lists: string[];
  setList?: Function;
};

export const CategoryList = ({ listName, lists, setList }: ListType) => {
  const [showAddInput, setShowAddInput] = useState(false);
  const [newItem, setNewItem] = useState("");
  const { user } = useContext(UserContext);

  const handleClick = (e: any) => {
    e.preventDefault();
    setShowAddInput(!showAddInput);
  };

  const handleChange = (e: any) => {
    e.preventDefault();
    setNewItem(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // console.log(user.userId);
    const payload = {
      movieName: newItem,
      user_id: user.userId,
      watched: listName === "Watched" ? true : false,
    };
    postRequest("/api/v1/movies", payload)
      .then((response) => {
        setList(response.data);
        setNewItem("");
        alert("success");
      })
      .catch((error) => {
        alert("error");
      });
  };

  useEffect(() => {
    console.log("lists", lists);
  }, [lists]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #d0d7de",
        backgroundColor: "#F5F5F5",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          // border: "1px solid black",
          width: "100%",
          minWidth: "18em",
          justifyContent: "space-evenly",
          alignItems: "center",
          // backgroundColor: "#1976d2",
          color: "black",
          height: "40px",
        }}
      >
        <h1>{listName}</h1>
        <button
          onClick={handleClick}
          style={{ cursor: "pointer", height: "fit-content" }}
        >
          {showAddInput ? "close" : "add"}
        </button>
      </div>

      {/* conditional rendering of text input */}
      {showAddInput ? (
        <div>
          <InputField
            label={"Add to " + listName}
            value={newItem}
            handleChange={handleChange}
          />
          <button onClick={handleSubmit}>Add</button>
          <button onClick={handleClick}>Cancel</button>
        </div>
      ) : null}
      {lists.length ? (
        <div
          style={{
            overflowY: "scroll",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {lists.map((element, index, array) => {
            return <ListItem element={element} />;
          })}
        </div>
      ) : (
        <div>nothing here</div>
      )}
    </div>
  );
};
