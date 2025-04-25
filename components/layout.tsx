import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      <header className="bg-white shadow p-4 text-center font-bold text-lg sticky top-0 z-10">
        My Wallet
      </header>
      <main className="p-4 max-w-md mx-auto">{children}</main>
    </div>
  );
};

export default Layout;
