🎁 Agentic Lottery - Gift-Driven, Agent-Powered Ethereum Lottery
Agentic Lottery is an Ethereum-based gift lottery system designed for ETHGlobal's Agentic Ethereum hackathon. Unlike traditional lotteries, this system guarantees every participant wins something. Users can gift lottery tickets to friends, and those tickets always return a prize — possibly less, equal, or more than the ticket's value — but never zero.

Built with the Agent Development Kit (ADK), this app demonstrates how AI agents can coordinate social, value-aligned interactions onchain in novel ways.

🌟 Key Features
🎁 Gift a Lottery Ticket - Buy a ticket for someone else, turning speculation into generosity.

💸 Guaranteed Rewards - Recipients always get a prize, even if it's less than the ticket price.

🤖 Autonomous Agents (via ADK) - Agents help:

Recommend recipients based on social graph or wallet activity.

Monitor lottery outcomes and notify participants.

Manage onchain gifting budgets or preferences.

🧱 Smart Contracts - Written in Solidity, deployed on Ethereum testnets.

🖼️ Frontend - React + TypeScript dApp interface to buy/gift tickets and view prizes.

🚀 Quick Start
```
bash
Copy
Edit
git clone https://github.com/jariger/agentic-lottery
cd agentic-lottery

# Install frontend
cd frontend
npm install
npm run dev

# Contract deployment assumed via Hardhat (or similar)
```
🤖 How Agents Work (ADK Integration)
This project uses the Agent Development Kit (ADK) to implement lightweight AI agents that:

Suggest recipients using user wallet metadata.

Automate bulk gifting with configurable preferences (e.g. gas limits, recipient frequency).

Monitor contract events and prompt the user with follow-ups (e.g. top-up gift pool, retry failed transfers).

Agents are instantiated off-chain and act as co-pilots to users, making decentralized generosity scalable and delightful.

🧠 Inspiration
Inspired by the shift from “winner-takes-all” to value-for-all systems, Agentic Lottery embodies the principle that even a small win is better than walking away empty-handed. Combined with ADK, this system explores how autonomous agents can drive intentional, empathetic, and fun onchain behavior.

📜 License
MIT
