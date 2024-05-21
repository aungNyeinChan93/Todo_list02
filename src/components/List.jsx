import React from "react";

const List = () => {
  return (
    <div className="">
      <div className="list-conteiner container-fluid my-1">
        <ul class="list-group">
          <li class="list-group-item w-75 mx-auto bg-info-subtle py-2 px-4 my-2 rounded-3 container shadow-sm">
            <div className="row">
              <div className="col-10 col-md-11 ">
                <i class="fa-solid fa-arrows-turn-right fs-6 text-danger d-inline mx-1"></i>
                <div className="text d-inline mx-2 text-danger-emphasis">asdfasd</div>
              </div>
              <div className="col-2 col-md-1">
                <i className="fa-solid fa-trash fs-6 text-danger"></i>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default List;
