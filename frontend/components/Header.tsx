import React from "react";
import Link from "next/link";
import { ConnectButton } from "thirdweb/react"; 
import { createThirdwebClient } from "thirdweb";
import { lightTheme } from "thirdweb/react";
const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID,
} as any);
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
        <ConnectButton
        client={client} 
        theme={lightTheme({
          colors: {
            primaryButtonBg: "#4084f4", // Change button background color
            primaryButtonText: "#ffffff", // Change button text color
            secondaryButtonBg: "#2864ec", // Background color for secondary states
            secondaryButtonText: "#FFFFFF", // Text color for secondary button
          },
        })}
        connectButton={{
          label: "Connect Wallet", // Change button label
          className: "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-md",
        }}
        />
      </div>
    </nav>
  );
};

export default Header;
