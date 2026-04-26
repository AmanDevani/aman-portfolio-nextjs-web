"use client";

import SectionHeader from "@/components/section-header";
import {
  CONTACT_DETAILS,
  PERSONAL_DETAILS,
  SECTION_HEADER_DETAILS,
} from "@/lib/constant";
import { Mail, MapPin, Phone } from "lucide-react";
import type { IconType } from "react-icons";
import React from "react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/contact-form";
import { RiLinkedinLine } from "react-icons/ri";

type contactInfoType = {
  title: string;
  value: string;
  icon: LucideIcon | IconType;
  href?: string;
};

const CONTACT_INFO: contactInfoType[] = [
  {
    icon: Mail,
    title: "Email",
    value: CONTACT_DETAILS.CONTACT_EMAIL,
    href: `mailto:${CONTACT_DETAILS.CONTACT_EMAIL}`,
  },
  {
    icon: Phone,
    title: "Phone",
    value: `+91 ${CONTACT_DETAILS.CONTACT_NUMBER}`,
    href: `tel:${CONTACT_DETAILS.CONTACT_NUMBER}`,
  },
  {
    icon: MapPin,
    title: "Location",
    value: PERSONAL_DETAILS.location,
  },
  {
    icon: RiLinkedinLine,
    title: "Linkedin",
    value: "linkedin.com/in/aman-devani",
    href: CONTACT_DETAILS.LINKEDIN_URL,
  },
];

const SingleInfo = ({ icon: Icon, title, value, href }: contactInfoType) => {
  return (
    <div className="flex items-center gap-5 mb-3">
      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
        <Icon size={20} />
      </div>
      <div>
        <p className="text-muted-foreground text-sm">{title}</p>
        {href ? (
          <Link href={href} target="_blank">
            {value}
          </Link>
        ) : (
          <p>{value}</p>
        )}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="mb-4 py-12">
      <SectionHeader title={SECTION_HEADER_DETAILS.CONTACT_SECTION_TITLE} />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <p className="text-xl font-medium mb-6">Get In Touch</p>
          <div>
            {CONTACT_INFO.map((detail) => (
              <SingleInfo {...detail} key={detail.value} />
            ))}
          </div>
        </div>
        <div>
          <p className="text-xl font-medium mb-6">Send Me a Message</p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
