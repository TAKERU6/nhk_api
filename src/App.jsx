import React from "react";
import List from "./components/List";
import Form from "./components/Form";

const App = () => {
  return (
    <>
      <h1>NHK番組表検索</h1>
      <Form />
      <List />
    </>
  );
};

export default App;
