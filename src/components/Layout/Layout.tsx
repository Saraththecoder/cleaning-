import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

import StickyCTABar from '../UI/StickyCTABar';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen pb-[60px] md:pb-0">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <StickyCTABar />
    </div>
  );
};

export default Layout;
