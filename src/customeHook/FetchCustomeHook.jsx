import { useState, useEffect } from "react";

export const useFectchdata =  (url) => {
    const [posts,setPost] = useState([])
    const [loading,setLoading] =useState(true)


    const fetchingData = async()=>{
        const responceData = await fetch(url)
        const data = await responceData.json();
        setPost(data)
        setLoading(false)
    }
    useEffect(()=>{
        fetchingData()
    },[url])
    return{posts,loading}
};  
