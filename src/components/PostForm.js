import { useState } from "react";

export const PostForm = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <input
            type={"text"}
            placeholder={"ID"}
            value={id}
            onChange={(event) => setId(event.target.value)}
          ></input>
        </div>
        <div>
          <input
            type={"text"}
            placeholder={"Title"}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          ></input>
        </div>
        <div>
          <input
            type={"text"}
            placeholder={"Body"}
            value={body}
            onChange={(event) => setBody(event.target.value)}
          ></input>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
