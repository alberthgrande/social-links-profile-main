import React from "react";

const SocialMediaLinks = ({ hrefName, hrefLinks, hrefClassName }) => {
  return (
    <a
      href={hrefLinks}
      target="_blank"
      rel="noopener noreferrer"
      className={`profile-links block bg-zinc-300 py-4 rounded text-black font-medium ${hrefClassName}`}
      style={{ marginTop: "1.25rem" }}
    >
      {hrefName}
    </a>
  );
};

export default SocialMediaLinks;
