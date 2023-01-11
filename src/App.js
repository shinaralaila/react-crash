import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Message from "./components/Message";
import { ClickHandler } from "./components/ClickHandler";
import { Parent } from "./components/Parent";
import { UserGreetings } from "./components/UserGreetings";
import { MyStyle } from "./components/MyStyle";
import { Inline } from "./components/Inline";
import "./appStyle.css";
import styles from "./appStyles.module.css";
import { Form } from "./components/Form";
import { PostForm } from "./components/PostForm";

function App() {
  return (
    <div className="App">
      {/* <Greet name="shinu" age="36">
        <button>Action</button>
      </Greet> */}
      {/* <Message></Message> */}
      {/* <ClickHandler></ClickHandler> */}
      {/* <Parent></Parent> */}
      {/* <UserGreetings></UserGreetings> */}
      {/* <MyStyle></MyStyle> */}
      {/* <Inline />

      <h1 className="primary">Primary</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Form></Form> */}
      <PostForm></PostForm>
    </div>
  );
}

export default App;
