import { useState } from "react";
import Header from "@/components/Header";
import Button from "@/components/Button";

export default function ClaimPrize() {
  const [wallet, setWallet] = useState("");
  const [loading, setLoading] = useState(false);
  const [prize, setPrize] = useState<string | null>(null);

  const handleCheckPrize = async () => {
    setLoading(true);
    setPrize(null);

    // Simulate checking the prize (we'll integrate blockchain later)
    setTimeout(() => {
      setLoading(false);
      const hasPrize = Math.random() < 0.95; // 5% chance of winning
      setPrize(hasPrize ? `🎉 You won 0.01 ETH!` : "🎉 You won 30 ETH!");
    }, 2000);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <div className="flex flex-col items-center justify-center h-[80vh] text-center">
        <h1 className="text-3xl font-bold mb-4">🎁 Claim Your Prize</h1>
        <p className="text-lg mb-6">Enter your wallet address to check if you won!</p>

        <input
          type="text"
          placeholder="Your Wallet Address"
          className="w-80 p-2 rounded text-black mb-4"
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
        />

        <Button text={loading ? "Checking..." : "Check Prize"} onClick={handleCheckPrize} className="mt-2" />

        {prize && <p className="mt-4 text-green-400">{prize}</p>}
      </div>
    </div>
  );
}
