import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState("");
  const [post, setPost] = useState("");

  const getUser = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePost = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPost(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <div className="container">
        <h1 className="text-center">Post User App</h1>
        <button className="btn btn-success" onClick={handlePost}>
          Load Post
        </button>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {" "}
              {post &&
                post.map((post) => (
                  <div className="card p-3 mt-2" key={user.id}>
                    <p>{post.name}</p>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                  </div>
                ))}
            </div>
            <div className="col-md-6">
              {user &&
                user.map((user) => (
                  <div className="card p-3 mt-2" key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
