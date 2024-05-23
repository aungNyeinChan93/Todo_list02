import React from "react";
import Card from "../components/Card";

const List = ({data,deleteFunction,editFunction}) => {
  // console.log(data);
  return (
    <div className="List list-container">
      <Card data={data} deleteFunction={deleteFunction} editFunction={editFunction} />
    </div>
  );
};

export default List;
