'use client';

import Link from 'next/link';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">Aman</div>
        <div className="header-links">
          <nav className="nav">
            <Link href="/" className="nav-item">
              Home
            </Link>
            <Link href="/" className="nav-item">
              About
            </Link>
            <Link href="/" className="nav-item">
              Experience
            </Link>
            <Link href="/" className="nav-item">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;
