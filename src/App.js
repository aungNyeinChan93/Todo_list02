import List from "./components/List";
import Form from "./components/Form";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import { useAxiosFetchCustomeHook } from "./customeHook/axiosFetchCustomeHook";
import uuid from "react-uuid";
import { apiTodolist } from "./api/apiResource";

function App() {
  const { posts, loading } = useAxiosFetchCustomeHook("./todoList");
  // console.log(posts);

  async function formHandeler(userInput) {
    const myData = {
      id: uuid(),
      task: userInput,
      completeStatus: false,
    };
    if (!userInput == "") {
      await apiTodolist.post("todoList", myData);
    }
  }

  async function deleteFunction(e, id) {
    // console.log(e);
    // console.log(id);
    await apiTodolist.delete(`todoList/${id}`);
  };

  async function editFunction(id,completeStatus){
    console.log(id,completeStatus);
    await apiTodolist.patch(`todoList/${id}`,{completeStatus})
  }

  if (loading) {
    return (
      <h1 className=" text-white bg-danger min-vh-100 d-flex justify-content-center align-items-center">
        Loading...
      </h1>
    );
  }
  return (
    <div className="App">
      <Form formHandeler={formHandeler} />
      <List {...posts} deleteFunction={deleteFunction} editFunction={editFunction} />
    </div>
  );
}

export default App;
