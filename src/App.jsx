import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const addPost = (data) => {
    const headers = new Headers();
    headers.append("Content-type", "aplication/json");
    headers.append("authorization", "Bearer hesen 1231234567890");

    const formData = new FormData();

    formData.append("userId", data.userId);
    formData.append("title", data.title);
    formData.append("body", data.body);

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      // body: JSOB.stringfy(data),
      body: formData,
      // headers: {
      //   authorization: "12312434134123",
      // },
      headers,
    });
  };
  const fetchingData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (res.ok && res.status === 200) {
          return res.json();
        }
      })
      .then((posts) => setData(posts))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    addPost({
      userId: 1234,
      id: 2234,
      title: "test deneme 123",
      body: "HER ŞEY ENERJİDİR VE HER ŞEY YALNIZCA BUNDAN İBARETTİR",
    });
    fetchingData();
  }, []);

  return (
    <div className="App">
      <ul>
        {data?.map((post) => (
          <>
            <li key={post.id}>{post.title}</li>
          </>
        ))}
      </ul>
      <button onClick={fetchingData}>FEtchingData</button>
    </div>
  );
}

export default App;
