import React from "react";
import { useState } from "react";


const Form = ({formHandeler}) => {
  const [userInput,setUserInput] = useState("");

  function formBtnHandeler(userInput){
    formHandeler(userInput);
    setUserInput("")
  }
 
  return (
    <div className="Form mt-2">
      <h2 className="text-danger text-center mb-3 fs-2 fst-italic">React Todo List Mini-Project</h2>
      <div className="Form Form-container container-fluid">
        {/* <h1 className="Form-title ">Form</h1>  */}
        <form action="#"  className="w-75 mx-auto bg-body-tertiary py-2 px-3 rounded-3 container shadow" >
          <div className="row">
            <div className="col-12 col-md-10 my-2">
              <input value={userInput} onChange={(e)=>setUserInput(e.target.value)} type="text" name="" id="" className="form-control" />
            </div>
            <div className="col-12 col-md-2 my-2">
              <button onClick={()=>formBtnHandeler(userInput)} typeof="button" className="btn btn-danger px-3 rounded-pill"><i className="fa-solid fa-plus me-1 fs-6"></i>Add</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
