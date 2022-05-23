import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript 2", body: "Description" },
    { id: 3, title: "Javascript 3", body: "Description" },
  ]);
  return (
    <div className="App">
      <form>
        <MyInput type="text" placeholder="Post name" />
        <MyInput type="text" placeholder="Post description" />
        <MyButton disabled>Create post</MyButton>
      </form>
      <PostList posts={posts} title="The list about JS" />
    </div>
  );
}

export default App;
