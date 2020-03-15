import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Share.scss";

const Share = () => {
  return (
    <div className="share-container">
      <span>Share on</span>
      <a
        href="https://www.facebook.com/code4romania/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook style={{ color: "#3b5998" }} size="30px"></FaFacebook>
      </a>
      <a
        href="https://www.linkedin.com/company/code4romania/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin style={{ color: "#0e76a8" }} size="30px"></FaLinkedin>
      </a>
      <a
        href="https://www.instagram.com/code4romania/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram style={{ color: "#833AB4" }} size="30px"></FaInstagram>
      </a>
      <a
        href="https://twitter.com/code4romania"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter style={{ color: "#42D2F2" }} size="30px"></FaTwitter>
      </a>
    </div>
  );
};

export default Share;
