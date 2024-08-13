import { createContext, useEffect } from "react"
import { useState } from "react"
import {baseUrl} from "../baseUrl";


export const AppContext = createContext();

function AppContextProvider({ children }) {

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);



  async function fethBlogPosts(page = 1){
    setLoading(true);
    try{
      const response = await fetch(`${baseUrl}?page=${page}`);
      const data = await response.json();
      setPage(data.page);
      setTotalPages(data.totalPages);
      setPosts(data.posts);
      setLoading(false);
    }
    catch(error){
      console.error("Error fetching data", error);
      setPage(1);
      setTotalPages(null);
      setPosts([]);
      setLoading(false);
    }
  }

  function handlePageChange(page)
  {
    setPage(page);
    fethBlogPosts(page);
  }




  const value ={
    loading,
    posts,
    page,
    totalPages,
    setLoading,
    setPosts,
    setPage,
    setTotalPages,
    handlePageChange,
    fethBlogPosts
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;

