import React from "react";
import "./HandleItem.css";

const HandleItem = (props) => {
  const deleteHandler = (id) => {
    const newLists = props.lists.filter((list) => list.id !== id);
    props.onDeleteName(newLists);
  };
  return (
    <>
      <div>
        {props.lists.map((list) => (
          <div className='item' key={list.id}>
            <div className="value">{list.inputValue}</div>
            <button onClick={() => deleteHandler(list.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};
export default HandleItem;
