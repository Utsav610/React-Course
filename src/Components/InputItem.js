import React, { useState } from "react";
import Card from "./Card";

const InputItem = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue)
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onHandleItem(inputValue);
    setInputValue("");
  };

  return (
    <Card>
      <form>
        <div>
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button onClick={submitHandler}>Add Item</button>
        </div>
      </form>
    </Card>
  );
};
export default InputItem;
