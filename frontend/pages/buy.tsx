import { useState } from "react";
import Header from "@/components/Header";
import Button from "@/components/Button";

export default function BuyTicket() {
  const [recipient, setRecipient] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleBuyTicket = async () => {
    setLoading(true);
    setMessage("");

    // Simulating a transaction (we'll connect blockchain later)
    setTimeout(() => {
      setLoading(false);
      setMessage(`🎉 Ticket successfully gifted to ${recipient}!`);
      setRecipient("");
    }, 2000);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <div className="flex flex-col items-center justify-center h-[80vh] text-center">
        <h1 className="text-3xl font-bold mb-4">🎟️ Buy & Gift a Lottery Ticket</h1>
        <p className="text-lg mb-6">Enter a recipient’s wallet address and send them a guaranteed-prize ticket!</p>

        <input
          type="text"
          placeholder="Recipient Wallet Address"
          className="w-80 p-2 rounded text-black mb-4"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />

        <Button text={loading ? "Processing..." : "Buy Ticket"} onClick={handleBuyTicket} className="mt-2" />

        {message && <p className="mt-4 text-green-400">{message}</p>}
      </div>
    </div>
  );
}
