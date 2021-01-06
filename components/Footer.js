import React from "react";

export default () => {
  return (
    <div style={{ padding: "15px 0", display: "flex", alignItems: "center" }}>
      <img
        height="40"
        width="40"
        src="https://dillonerhardt.com/_next/image?url=%2Fdillon-erhardt.jpg&w=320&q=75"
        style={{
          height: 50,
          width: 50,
          borderRadius: "50%",
          marginRight: 15,
        }}
      />
      <span style={{ opacity: 0.6 }}>
        Dillon Erhardt <span style={{ margin: "0 8px" }}>//</span>
        @dillonerhardt <span style={{ margin: "0 8px" }}>//</span>
        dillonerhardt.com
      </span>
    </div>
  );
};
