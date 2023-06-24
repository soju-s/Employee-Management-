import React from "react";

function PageNotFound() {
  return (
    <div
      style={{ width: "100%", height: "78vh" }}
      className="d-flex justify-content-center align-items-center flex-column"
    >
      <img
        src="https://cdn.svgator.com/images/2022/01/funny-404-error-page-design.gif"
        alt="pagenotfoundimage"
      />

      <h1>Looks like you are lost </h1>
      <a className="btn btn-success" href="/">
        Go Home
      </a>
    </div>
  );
}

export default PageNotFound;
