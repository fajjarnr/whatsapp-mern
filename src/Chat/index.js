import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";
import "./index.css";

function index() {
  return (
    <div clasName="chat">
      <div className="chat_header">
        <Avatar />

        <div className="chat_headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className="chat_message">
          <span className="chat_name">Fajar</span>
          this is new message
          <span className="chat_timestamp">
            {new Date().toLocaleTimeString()}
          </span>
        </p>

        <p className="chat_received">
          <span className="chat_name">Fajar</span>
          this is new message
          <span className="chat_timestamp">
            {new Date().toLocaleTimeString()}
          </span>
        </p>
      </div>

      <div className="chat_footer">
        <InsertEmoticon />
        <form>
          <input type="text" placeholder="Type a Message" />
          <button type="submit">send</button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default index;
