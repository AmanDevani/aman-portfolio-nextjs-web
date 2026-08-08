import { personalInfo } from "@/data/personal";

export default function Footer() {
  const initials = personalInfo.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center text-primary-foreground text-[10px] font-bold font-display">
              {initials}
            </div>
            <span className="text-xs text-muted-foreground font-mono">
              &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </span>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
