import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import JournalItem from "./components/JournalItem";
import data from "./data";

function App() {
  const listData = data;
  return (
    <>
      <Header />
      {listData.map((item) => {
        return (
          <JournalItem
            key={item.id + item.title}
            title={item.title}
            location={item.country}
            mapLink={item.googleMapsLink}
            dates={item.dates}
            description={item.text}
            imageUrl={item.img.src}
          />
     
        );
      })}
    </>
  );
}

export default App;

const arr = [1, 2, 3, 4, 5];
console.log(
  arr.map((item) => {
    return item * item;
  })
);

const names = ["Alice", "Bob", "Charlie"];

const capitalizedNames = names.map((name) => {
  return name[0].toUpperCase() + name.slice(1).toLowerCase();
});
console.log(capitalizedNames);

const inPTag = names.map((name) => {
  return "<p>" + name + "</p>";
});
console.log(inPTag);
