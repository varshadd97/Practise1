import React from "react";
import Sonam from "./Component/Sonam";
import Rahul from "./Component/Rahul";
import CRUD from "./Component/CRUD"
import SingleValueCounter from "./Component/SingleValueCounter.";
import FunctionalCounter from "./Component/FunctionalCounter";
import ClassCounter from "./Component/ClassCounter";
import ArrayMethods from "./Component/ArrayMethods";


const App = () => {
  return (
    <div>
      <Sonam />
      <Rahul />
      <ArrayMethods />
      <CRUD />
      <FunctionalCounter />
      <ClassCounter />
      <SingleValueCounter />
    </div>
  );
};

export default App;
