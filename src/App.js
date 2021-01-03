import axios from "./axios";
import Pusher from "pusher-js";
import { useEffect, useState } from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then((res) => {
      setMessages(res.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("e1dc409441fecdf54abe", {
      cluster: "ap1",
    });

    const channel = pusher.subscribe("message");
    channel.bind("inserted", function (newMessage) {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
