'use client';

import Footer from './footer';
import Header from './header';

function Layout({ children }) {
  return (
    <div className="app">
      <Header />
      <main className="app-body">
        <div className="app-body__content">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
