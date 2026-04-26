"use client";

import React from "react";

const LinkedInProfilePreview = () => {
  // Below script needs to be load to preview the profile
  // <Script
  //       src="https://platform.linkedin.com/badges/js/profile.js"
  //       async
  //       defer
  //       type="text/javascript"
  //     ></Script>

  return (
    <div
      className="badge-base LI-profile-badge"
      data-locale="en_US"
      data-size="large"
      data-theme="light"
      data-type="VERTICAL"
      data-vanity="aman-devani"
      data-version="v1"
    ></div>
  );
};

export default LinkedInProfilePreview;
