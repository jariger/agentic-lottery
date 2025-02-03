import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <nav className="w-full bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">🎟️ Agentic Lottery</h1>
      <div className="flex gap-4">
        <Link href="/buy">
          <span className="cursor-pointer hover:text-gray-400">Buy Ticket</span>
        </Link>
        <Link href="/claim">
          <span className="cursor-pointer hover:text-gray-400">Claim Prize</span>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
