import { PERSONAL_INFO } from "@/common";
import React from "react";

export async function generateMetadata() {
  return {
    title: PERSONAL_INFO.TITLE,
    description: PERSONAL_INFO.DESCRIPTION,
    icons: PERSONAL_INFO.ICONS,
    openGraph: {
      images: PERSONAL_INFO.OG_IMAGE,
    },
    twitter: {
      card: "summary_large_image",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const MainLayout = ({ children }) => {
  return <div>{children}</div>;
};

export default MainLayout;
