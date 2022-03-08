const CategoryTitle = ({
  categoryName,
  selectedCategory,
  setSelectedCategory,
}) => {
  const handleClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedCategory(e.target.id);
  };
  return (
    <h2
      id={categoryName}
      className={`cursor-pointer mx-12 mb-0
      ${
        categoryName === selectedCategory
          ? "border-b-2 border-black text-xl"
          : null
      }`}
      onClick={handleClick}
    >
      {categoryName}
    </h2>
  );
};

const ListName = ({ listName, selectedList, setSelectedList }) => {
  const handleClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedList(e.target.id);
  };

  return (
    <h3
      id={listName}
      className={`cursor-pointer mx-4
  ${listName === selectedList ? "border-b-2 border-black text-xl" : null}`}
      onClick={handleClick}
    >
      {listName}
    </h3>
  );
};

export const UserProfileHeader = ({
  user,
  selectedCategory,
  setSelectedCategory,
  selectedList,
  setSelectedList,
}) => {
  return (
    <div className="flex flex-col items-center bg-gray-50">
      <div className="flex flex-row">
        <div
          style={{
            height: "120px",
            width: "120px",
            backgroundColor: "white",
            borderRadius: "50%",
            display: "inline-block",
            border: "1px solid #d0d7de",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            marginRight: "30px",
          }}
        >
          pic
        </div>
        <div>{user.firstName}</div>
      </div>
      <div className="flex flex-row justify-center w-3/4 items-baseline border-b-2 border-black mt-0">
        <CategoryTitle
          categoryName="Profile"
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <CategoryTitle
          categoryName="Movies"
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <CategoryTitle
          categoryName="TV Shows"
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <CategoryTitle
          categoryName="Books"
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <CategoryTitle
          categoryName="Games"
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <hr />
      <div className="flex flex-row">
        <ListName
          listName="Overview"
          selectedList={selectedList}
          setSelectedList={setSelectedList}
        />
        <ListName
          listName="Want to Watch"
          selectedList={selectedList}
          setSelectedList={setSelectedList}
        />
        <ListName
          listName="Watching"
          selectedList={selectedList}
          setSelectedList={setSelectedList}
        />
        <ListName
          listName="Watched"
          selectedList={selectedList}
          setSelectedList={setSelectedList}
        />
        <ListName
          listName="Custom Lists"
          selectedList={selectedList}
          setSelectedList={setSelectedList}
        />
      </div>
      <hr />
    </div>
  );
};
