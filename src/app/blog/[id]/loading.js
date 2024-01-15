import React from "react";

const Loading = () => {
  return (
    <div className="container mt-2 d-flex flex-column justify-content-center align-align-items-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
