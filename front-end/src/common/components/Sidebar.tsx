import React, { useState } from "react";

const Sidebar = () => {
  const [friendsNum, setFriendsNum] = useState(0);
  return (
    <div className="w-36 h-sidebar absolute left-0 bg-sidebar">
      <span>친구 {friendsNum}</span>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Sidebar;
