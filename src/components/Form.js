import { useState } from "react";

export const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`hello ${username}`);
  };
  const [username, setUsername] = useState("");
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>username</label>
        <input
          type={"text"}
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
