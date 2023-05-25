import { useContext } from "react";
import { useState } from "react";
import { Message } from "../components/Message";
import { MessageForm } from "../components/MessageForm";
import { AppContext } from "../contexts/AppContext";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

export function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [client, setClient] = useState(null);
  const [chatRoom, setChatRoom] = useState(null);
  const [ready, setReady] = useState(false);
  const context = useContext(AppContext);

  function handleSubmit(message) {
    const timestamp = Date.now();
    client.publish({
      room: "algebra",
      message: {...message, timestamp },
    });
  }

  function handleSignOut() {
    context.setUsername("");
  }

  useEffect(() => {   /**povezivaje sa scaledronom i soboom algrebra */
    const drone = new window.Scaledrone("7kO2tTVsP5pRC0lH");

    drone.on("open", (error) => {
      if (error) {
        console.log(error);
      } else {
        const room = drone.subscribe("algebra");

        setClient(drone);
        setChatRoom(room);
      }
    });
  }, []);

  useEffect(() => { 
    if (chatRoom !== null && !ready) {
      chatRoom.on("data", (data) => {
        setMessages((messages) => {
          return [...messages, data];
        });
      });
      setReady(true);
    }
  }, [chatRoom, ready]);

  if (!context.isSignedIn) {
    return <Navigate to="/" replace />;
  }

  return (   /**vraća taj kao room tj stranicu za chat na kojoj se nalazi pozdravm lista poruka koje su mapirane i tipka za odjavu + unos novi poruka */
    <div>
      <div className="title-content">
        <h1>welcome <p>{context.username}</p> to the portal of glory</h1>
        <button
          className="sign-out-button"
          type="button"
          onClick={handleSignOut}
        >
          Sign out
        </button>
      </div>
      <div className="chat-page-content">
        <div className="message-list">
          {messages.map((message) => {
            const time = new Date(message.timestamp).toLocaleTimeString().slice(0, -3);
            const isCurrentUser = context.username === message.author.username;
            return (
              <div className={`message ${isCurrentUser ? 'current-user' : ''}`} key={message.id}>
                <Message
                  isCurrentUser={isCurrentUser}
                  avatarIndex={message.author.avatarIndex}
                  author={message.author.username}
                  text={message.text}
                  time={time}
                />
              </div>
            );
          })}
        </div>
        <MessageForm
          onSubmit={handleSubmit}
          username={context.username}
          avatarIndex={context.avatarIndex}
        />
      </div>
    </div>
  );
}
