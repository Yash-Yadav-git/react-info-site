import React from "react";
import "../main.css";

const main = () => {
  return (
    <main className="container">
      <div>
        <h2 className="main-heading">Fun facts about React</h2>
        <ul className="main-fun-facts">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
    </main>
  );
};

export default main;
