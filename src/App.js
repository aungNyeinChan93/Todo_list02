import List from "./components/List";
import Form from "./components/Form";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import { useAxiosFetchCustomeHook } from "./customeHook/axiosFetchCustomeHook";

function App() {
  const { posts, loading } = useAxiosFetchCustomeHook("./todoList");
  // console.log(posts);
  if (loading) {
    return (
      <h1 className=" text-white bg-danger min-vh-100 d-flex justify-content-center align-items-center">
        Loading...
      </h1>
    );
  }
  return (
    <div className="App">
      <Form />
      <List {...posts} />
    </div>
  );
}

export default App;
