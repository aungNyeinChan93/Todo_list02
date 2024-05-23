import React from "react";

const Card = ({ data, deleteFunction, editFunction }) => {
  // console.log(data);

  function confirmFunction(e, id) {
    // eslint-disable-next-line no-restricted-globals
    const confrimDelete = confirm("Are you sure to delete!");
    if (confrimDelete) {
      deleteFunction(e, id);
    }
  }

  function chechBoxFunction(id, completeStatus) {
    editFunction(id, completeStatus);
  }
  return (
    <div className="Card card-container">
      {data.map((item, index) => {
        return (
          <div className="container-fluid my-1" key={item.id}>
            <ul className="list-group">
              <li
                className={
                  item.completeStatus
                    ? "list-group-item w-75 mx-auto bg-success py-2 px-4 my-2 rounded-3 container shadow-sm"
                    : "list-group-item w-75 mx-auto bg-info-subtle py-2 px-4 my-2 rounded-3 container shadow-sm"
                }
              >
                <div className="row">
                  <div className="col-10 col-md-11 ">
                    <i
                      className={
                        item.completeStatus
                          ? "fa-solid fa-arrows-turn-right fs-6 text-white d-inline mx-1"
                          : "fa-solid fa-arrows-turn-right fs-6 text-danger d-inline mx-1"
                      }
                    ></i>
                    <input
                      className="card-checkBox mx-2 "
                      type="checkbox"
                      checked={item.completeStatus?true:false}
                      onChange={() =>
                        chechBoxFunction(item.id, !item.completeStatus)
                      }
                    />
                    <div
                      className={
                        item.completeStatus
                          ? "text d-inline mx-2 text-danger-emphasis text-decoration-line-through"
                          : "text d-inline mx-2 text-danger-emphasis "
                      }
                    >
                      <span>{index + 1}</span> {item.task}
                    </div>
                  </div>
                  <div className="col-2 col-md-1">
                    <i
                      className={
                        item.completeStatus
                          ? "fa-solid fa-trash fs-6 text-white"
                          : "fa-solid fa-trash fs-6 text-danger"
                      }
                      onClick={(e) => confirmFunction(e.target, item.id)}
                    ></i>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
