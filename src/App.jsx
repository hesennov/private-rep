import { useState, useEffect } from "react";
// import { getPost, getPostDetail, newPost } from "./services/post";
import { PostServices } from "./services";

const App = () => {
  useEffect(() => {
    PostServices.getPost().then((res) => console.log(res));
    PostServices.getPostDetail(3).then((res) => console.log(res));
    PostServices.newPost({
      userId: 3,
      title: "test",
      body: "test lorem test",
    }).then((res) => console.log(res));
  }, []);

  return <div>App</div>;
};
export default App;
