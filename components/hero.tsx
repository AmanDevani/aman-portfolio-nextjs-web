"use client";

import React from "react";
import { CONTACT_DETAILS, PERSONAL_DETAILS } from "@/lib/constant";
import { Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { RiLinkedinLine } from "react-icons/ri";
import { LuGithub } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="my-20" id="about">
      <div>
        <div className="max-w-xl flex flex-col gap-4">
          <div>
            <div className="text-4xl font-bold">{PERSONAL_DETAILS.name}</div>
            <p className="text-muted-foreground text-xl">
              {PERSONAL_DETAILS.role}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <Link href={`mailto:${CONTACT_DETAILS.CONTACT_EMAIL}`}>
                {CONTACT_DETAILS.CONTACT_EMAIL}
              </Link>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{PERSONAL_DETAILS.location}</span>
            </div>
          </div>

          <p className="text-muted-foreground">
            {PERSONAL_DETAILS.description}
          </p>

          <div className="flex items-center gap-3">
            <Link
              href={`mailto:${CONTACT_DETAILS.CONTACT_EMAIL}`}
              target="_blank"
            >
              <Button variant="outline" className="cursor-pointer ">
                <IoMailOutline />
              </Button>
            </Link>
            <Link href={CONTACT_DETAILS.GITHUB_URL} target="_blank">
              <Button variant="outline" className="cursor-pointer">
                <LuGithub />
              </Button>
            </Link>
            <Link href={CONTACT_DETAILS.LINKEDIN_URL} target="_blank">
              <Button variant="outline" className="cursor-pointer ">
                <RiLinkedinLine />
              </Button>
            </Link>
          </div>
        </div>
        {/* <div className="flex justify-center items-center">
          <LinkedInProfilePreview />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
