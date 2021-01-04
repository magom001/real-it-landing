import React, { FC } from "react";
import "./layout.css";

const Layout: FC = ({ children }) => {
  return (
    <article>
      <h1>Header</h1>
      {children}
    </article>
  );
};

export default Layout;
