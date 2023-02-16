import React from "react";
import { Routes, Route } from "react-router";
const Welcome = () => {
  return (
    <>
      <h1>Welcome</h1>
      <Routes>
        <Route path="newuser" element={<h2>New User</h2>} />
      </Routes>
    </>
  );
};

export default Welcome;
