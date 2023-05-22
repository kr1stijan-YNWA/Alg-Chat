import React, { useState } from "react";
import { avatarImages } from "../library/avatar";
import "../styles/Message.css";

export function Message(props) {
  const { isCurrentUser, avatarIndex, author, text, time } = props;

  const messageContainerClass = isCurrentUser
    ? "message-container current-user"
    : "message-container";

  const messageTextClass = isCurrentUser
    ? "message-text current-user"
    : "message-text";

  return (
    <div className={messageContainerClass}>
      {isCurrentUser && (
        <div className="avatar">
          <img src={avatarImages[avatarIndex]} alt={author} width={40} height={40} />
        </div>
      )}

      <div className="message-content">
        <div className="message-author">{author}</div>
        <div className={messageTextClass}>{text}</div>
        <div className="message-time">{time}</div>
      </div>

      {!isCurrentUser && (
        <div className="avatar">
          <img src={avatarImages[avatarIndex]} alt={author} width={40} height={40} />
        </div>
      )}
    </div>
  );
}

export function ChatPage() {
  const [messages, setMessages] = useState([
    { id: 1, author: "User1", text: "Hello!", time: "10:00 AM", avatarIndex: 0 },
    { id: 2, author: "User2", text: "Hi there!", time: "10:05 AM", avatarIndex: 1 },
  ]);

  const messageComponents = messages.map((message) => (
    <Message
      key={message.id}
      isCurrentUser={message.author === "User1"}
      avatarIndex={message.avatarIndex}
      author={message.author}
      text={message.text}
      time={message.time}
    />
  ));

  return (
    <div>
      <h1>Chat Page</h1>
      <div className="message-list">{messageComponents}</div>
    </div>
  );
}
