import { useState, useEffect } from "react";
import { apiTodolist } from "../api/apiResource";

export const useAxiosFetchCustomeHook = (target) => {
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const data = await apiTodolist.get(target);
    setPost(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { posts, loading };
};
