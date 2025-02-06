import Header from "@/components/Header";
import Button from "@/components/Button";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <div className="flex flex-col items-center justify-center h-[80vh] text-center">
        <h1 className="text-4xl font-bold mb-4">🎟️ Welcome to Agentic Lottery</h1>
        <p className="text-lg mb-6">
          Buy a ticket, gift it to a friend, and win guaranteed prizes!
        </p>
        <div className="flex gap-4">
          <Button text="Buy Ticket" onClick={() => router.push("/buy")} />
          <Button text="Claim Prize" onClick={() => router.push("/claim")} />
        </div>
      </div>
    </div>
  );
}
