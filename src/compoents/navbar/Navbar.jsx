import React from "react";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <h2>LOGO</h2>
        </div>
        <ul className={styles["nav-item"]}>
          <li>
            <a style={{ color: "green", borderBottom: "10px solid white" }}>
              Home
            </a>
          </li>
          <li>
            {" "}
            <a>Contact</a>
          </li>
          <li>
            {" "}
            <a>About</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
