import List from "./components/List";
import Form from "./components/Form";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import { useAxiosFetchCustomeHook } from "./customeHook/axiosFetchCustomeHook";
import uuid from "react-uuid";
import { apiTodolist } from "./api/apiResource";

function App() {
  const { posts, loading, setPost } = useAxiosFetchCustomeHook("./todoList");
  // console.log(posts);

  async function formHandeler(userInput, setInputUser) {
    const myData = {
      id: uuid(),
      task: userInput,
      completeStatus: true,
    };
    const responce = await apiTodolist.post("todoList", myData);
    console.log(responce.data);
    console.log(posts.data.concat(responce.data));
    // setPost(posts.data.concat(responce.data))
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
      <List {...posts} />
    </div>
  );
}

export default App;
