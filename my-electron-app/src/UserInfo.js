import React from "react";
import Avatar from "./Avatar";

const UserInfo = (props) => {
  return (
    <div className="UserInfo">
      {/* <img
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        /> */}
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
};

export default UserInfo;
