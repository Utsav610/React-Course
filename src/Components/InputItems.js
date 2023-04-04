import React, { useState } from "react";
import "./InputItems.css";

const InputItem = (props) => {
  const [question, setquestion] = useState("");
  const [inputtext, setinputtext] = useState("");

  const questionHandler = (event) => {
    setquestion(event.target.value);
  };

  const inputHandler = (event) => {
    setinputtext(event.target.value);
  };

  //   console.log(question);
  //   console.log(inputtext);
  const submitHandler = (event) => {
    event.preventDefault();
    const itemData = {
      title: question,
      info: inputtext,
    };
    props.onHandleItem(itemData);
    setinputtext("");
    setquestion("");
  };

  return (
    <form onSubmit={submitHandler} className="mx-64 my-4">
      <div>
        <label id="question" className="text-base">Question :</label>
        <input className="border-2 mx-4 my-4 px-2 py-1 border-black border-solid" id="question" onChange={questionHandler} value={question} type="text" />
      </div>
      <div>
        <h3 className="text-base font-bold">Answer :</h3>
        <textarea
          className="border-2 border-black mx-2 my-2 px-2 py-1 border-solid"
          name="answer"
          id="answer"
          cols="50"
          rows="10"
          value={inputtext}
          onChange={inputHandler}
        ></textarea>
      </div>
      <button className="border-4 text-white border-indigo-300 bg-indigo-500 flex justify-center items-center border-solid px-4 rounded-md hover:bg-indigo-700" type="submit">Submit</button>
    </form>
  );
};

export default InputItem;
