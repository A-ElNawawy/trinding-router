import React from "react";

const styles = {
  width: "95%",
  margin: "auto",
};

const Container = ({ children }) => {
  return <div style={styles}>{children}</div>;
};

export default Container;
