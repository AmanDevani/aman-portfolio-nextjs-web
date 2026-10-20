"use client";

import { useEffect, useRef } from "react";

import { trackSectionView } from "@/lib/analytics";

export function useSectionView<T extends HTMLElement>(sectionName: string, threshold = 0.3) {
  const sectionRef = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackSectionView(sectionName);
            observer.disconnect();
          }
        });
      },
      { threshold }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [sectionName, threshold]);

  return sectionRef;
}
