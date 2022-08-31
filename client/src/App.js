import React, { useState } from "react";
import Post from "./components/Post/Post";
function App() {
  const [posts] = useState([
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      
  ]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          {posts.map((post) => (
            <Post {...post} key={post.id} />
          ))}
        </div>
      </div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
