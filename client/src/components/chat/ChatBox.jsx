import { useContext } from "react";
import {Stack} from "react-bootstrap"
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";

const ChatBox = () => {
  const { user } = useContext(AuthContext);
  const { currentChat, messages, isMessagesLoading } = useContext(ChatContext);
  const { recipientUser } = useFetchRecipientUser(currentChat, user);

  console.log("recipient user", recipientUser)

  if(!recipientUser){
    <p style={{textAlign: "center", width: "100%"}}>
        No conversation selected yet...
    </p>
  }

  if(isMessagesLoading){
    <p>
        Messages Loading...
    </p>
  }

  return <Stack gap={4} className="chat-box">
    <div className="chat-header">
        <strong>{recipientUser?.name}</strong>
    </div>
  </Stack>;
};

export default ChatBox;
