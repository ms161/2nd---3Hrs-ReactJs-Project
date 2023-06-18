import Form from "./components/Form";
import ItemContainer from "./components/ItemContainer";
import Context from "./components/Store/context";
import "./App.css";
// import

import { useState } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);

  const addItem = (data) => {
    setUserData((prevData) => {
      return [...prevData, data];
    });
  };
  console.log(userData, "userdata in app");

  const context = {
    items: userData,
    dataHandler: addItem,
  };
  console.log(context.items);

  return (
    <Context.Provider value={context}>
      <Form></Form>
      <ItemContainer></ItemContainer>
    </Context.Provider>
  );
};

export default App;
