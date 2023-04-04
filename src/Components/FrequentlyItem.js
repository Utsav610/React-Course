import React, { useState } from "react";

const FrequentlyItem = (props) => {
  const [more, setmore] = useState(false);
  const [buttonText, setButtonText] = useState('+');
  
  const infoHandler = () => {
    setmore((prev) => !prev);
    setButtonText(buttonText === '+' ? '-' : '+');
  };
  return (
    <div className="mx-64 my-4">
      <div className="flex space-x-10">
        <h2>{props.title}</h2>
        <span>
         
          <button onClick={infoHandler} className="p-1 border-2 border-black">
          {buttonText}
          </button>
        </span>
      </div>
      {/* {console.log(props.title)} */}
      {more && <p>{props.info}</p>}
    </div>
  );
};

export default FrequentlyItem;
