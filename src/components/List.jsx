import React from "react";
import Card from "../components/Card";

const List = ({ data }) => {
  // console.log(data);
  return (
    <div className="List list-container">
      <Card data={data} />
    </div>
  );
};

export default List;
