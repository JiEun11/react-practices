import React from "react";
import UserInfo from "./UserInfo";

const formatDate = (date) => {
  return date.toLocaleDateString();
};

const Comment = (props) => {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <UserInfo user={props.author} />
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">{formatDate(props.date)}</div>
      </div>
    </div>
  );
};

export default Comment;
