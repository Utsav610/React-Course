import React, { useState } from "react";
import HandleItem from "./Components/HandleItem";
import InputItem from "./Components/InputItem";

const App = () => {
  const [list, setList] = useState([]);

  const handleDeleteItem = (newLists) => {
    setList(newLists);
  };

  const handleAddItem = (inputValue) => {
    setList([...list, { id: Date.now(), inputValue }]);
  };

  return (
    <>
      <h1 className="header">My List</h1>
      <InputItem onHandleItem={handleAddItem}></InputItem>
      {list.length> 0 && <HandleItem lists={list} onDeleteName={handleDeleteItem} />}
    </>
  );
};

export default App;

// const App = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [list, setList] = useState([]);

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleAddItem = () => {

//       setList([...list, { id: Date.now(), inputValue }]);
//       setInputValue("");

//   };

//   const handleDeleteItem = (newLists) => {
//     setList(newLists);
//   };

//   return (
//     <div>
//       <h1 className="header">My List</h1>
//       <div className="container">
//         <input type="text" value={inputValue} onChange={handleInputChange} />
//         <button onClick={handleAddItem}>Add Item</button>
//         {list.length> 0 && <HandleItem lists={list} onDeleteName={handleDeleteItem} />}
//       </div>
//     </div>
//   );
// };

// export default App;
