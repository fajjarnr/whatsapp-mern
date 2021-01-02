import { Avatar } from "@material-ui/core";

import "./index.css";

function index() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat_info">
        <h2>Room Name</h2>
        <p>This is last Message</p>
      </div>
    </div>
  );
}

export default index;
