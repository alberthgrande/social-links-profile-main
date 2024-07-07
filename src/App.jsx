import React from "react";
import SocialMediaLinks from "./components/SocialMediaLinks";
import avatar from "./assets/images/avatar-jessica.jpeg";
import "./App.css";
function ProfileCard() {
  return (
    <div className="min-h-screen bg-off-black flex items-center justify-center">
      <div className="bg-dark-gray p-8 rounded-lg text-center max-w-sm mx-4 w-[330px] md:w-[400px] h-auto md:h-auto">
        <img
          src={avatar}
          alt="avatar-jessica.jpeg"
          className="w-24 h-24 mx-auto rounded-full"
        />
        <h1 className="profile-name mt-4">Jessica Randal</h1>
        <h2 className="profile-location">Lodon, United Kingdom </h2>
        <p className="profile-info mt-2">
          "Front-end developer and avid reader."
        </p>
        <div className="mt-6 space-y-2">
          <SocialMediaLinks
            hrefClassName="github"
            hrefLinks={"https://github.com/"}
            hrefName={"Github"}
          />
          <SocialMediaLinks
            hrefClassName="frontend-mentor"
            hrefLinks={"https://www.frontendmentor.io/"}
            hrefName={"Frontend Mentor"}
          />
          <SocialMediaLinks
            hrefClassName="linkedin"
            hrefLinks={"https://www.linkedin.com/"}
            hrefName={"LinkedIn"}
          />

          <SocialMediaLinks
            hrefClassName="twitter"
            hrefLinks={"https://x.com"}
            hrefName={"Twitter"}
          />
          <SocialMediaLinks
            hrefClassName="instagram"
            hrefLinks={"https://www.instagram.com/"}
            hrefName={"Instagram"}
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
