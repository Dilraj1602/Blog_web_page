import "./App.css";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { useContext ,useEffect   } from "react";
import { AppContext } from "./context/AppContext";




export default function App() {

  const {fethBlogPosts} =useContext(AppContext);

  useEffect(() => {
    fethBlogPosts();
  },[]);

  return (
    <div>

      <Header></Header>
      <Blogs></Blogs>
      <footer>
      <Pagination></Pagination>
      </footer>

    </div>
  );
}
