import React, { Component } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <ul>
      <Link to="/admin/posts">posts</Link>
      <Link to="/admin/users">users</Link>
    </ul>
  );
};

export default SideBar;
