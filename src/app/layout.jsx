import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/styles.css";
import ReduxProvider from "@/redux/provider";
import "./globals.css";

const Layout = ({ children }) => {
  const displayReduxState = () => {};
  return (
    <html lang="en">
      <body className="bg-light">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
};

export default Layout;
