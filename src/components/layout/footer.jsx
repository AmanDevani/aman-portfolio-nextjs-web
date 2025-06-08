'use client';
import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div>© {year} Designed & Developed by Aman Devani.</div>
        <div className="social-icons">
          <LinkedinLogo size={22} />
          <InstagramLogo size={22} />
          <GithubLogo size={22} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
