import React from "react";
import { Link } from "react-router-dom";
import "./stlylePage/PageNoteFound.css";
import errorPicture from "../assets/images/page-not-found.webp";

const PageNoteFound = () => {
  return (
    <>
      <img
        className="page-not-found-img"
        src={errorPicture}
        alt="page not found foto"
      />

      <Link className="page-not-found-link" to="/">
        Back to Home
      </Link>
    </>
  );
};

export default PageNoteFound;
