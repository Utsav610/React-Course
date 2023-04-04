import logo from "./logo.svg";
import "./App.css";
import InputItem from "./Components/InputItems";
import FrequentlyItem from "./Components/FrequentlyItem";
import TotalItems from "./Components/TotalItems";
import React, { useState } from "react";

function App() {
  const questions = [
    {
      id: 1,
      title: "Is this a good product?",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
    },
    {
      id: 2,
      title: "How much does it cost?",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
    },
    {
      id: 3,
      title: "When can I get it?",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
    },
  ];

  const [items, setitem] = useState(questions);

  const addQuestion = (item) => {
    setitem((prevItem) => [
      ...prevItem,
      { id: Date.now(), title: item.title, info: item.info },
    ]);
  };
  console.log(items);

  return (
    <>
      <InputItem onHandleItem={addQuestion}></InputItem>
      <TotalItems data={items} />
    </>
  );
}

export default App;
