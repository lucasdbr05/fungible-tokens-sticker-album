// app/como-feito/page.tsx
"use client";

import React from "react";

export default function ComoFeitoPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-16">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-700">
            How the Project Was Developed
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            A complete and in-depth explanation of the architecture, technologies,
            design decisions and internal functioning of the Exatas Cup digital sticker
            album project.
          </p>
        </header>

        <div className="space-y-10">

          {/* --- PROJECT DESCRIPTION --- */}
          <section className="bg-white rounded-2xl shadow-md border border-gray-200 p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-5">General Project Description</h2>

            <p className="text-gray-700 leading-relaxed">
              The project consists of developing a complete ecosystem based on <strong>Web3</strong>,
              designed to represent digital stickers of players from the Exatas Cup. The core idea
              was to create an environment where users could <strong>collect, view, buy and trade</strong>
              digital stickers in a decentralized way, using a real blockchain to record
              ownership, transfers and interactions.
            </p>

            <p className="text-gray-700 leading-relaxed mt-3">
              The Exatas Cup is a futsal championship organized by students of the Institute of Exact Sciences
              at the University of Brasília (UnB), bringing together students from Mathematics, Computer Science
              and Statistics. The tournament had editions in 2024 and 2025 and became a significant event in the
              academic community, promoting integration, healthy competition and engagement among participants.
              One of the biggest challenges has always been creating visual content to showcase the teams, such
              as player cards with photos and information. The digital sticker album developed in this project
              emerged precisely as a modern solution to this problem, offering a practical, fast and interactive
              way to present rosters, while also enabling gamification through digital collectibles.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              To achieve this, we adopted the <strong>ERC-1155</strong> standard, which allows representing multiple
              stickers inside a single smart contract, reducing gas costs, simplifying management and offering
              support for semi-fungible items — exactly what a sticker album requires. This standard is widely
              used in games, collectibles and marketplaces due to its flexibility and efficiency.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              The platform not only displays the stickers but also integrates a <strong>P2P trading system</strong>
              controlled by the smart contract. Purchase operations, listings, acceptances and cancellations
              are recorded transparently and are fully auditable, ensuring reliability and immutability —
              fundamental principles in blockchain-based applications.
            </p>
          </section>

          {/* --- ARCHITECTURE AND DECISIONS --- */}
          <section className="bg-white rounded-2xl shadow-md border border-gray-200 p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-5">Architecture and Design Decisions</h2>

            <p className="text-gray-700 leading-relaxed">
              The system was built using a modern architecture divided into three layers:
            </p>

            <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2 leading-relaxed">
              <li>
                <strong>Blockchain Layer:</strong> responsible for all sticker logic,
                transfers, minting, validations and ownership control. Implemented fully in Solidity
                and deployed on the Sepolia network.
              </li>

              <li>
                <strong>Frontend Layer:</strong> developed in Next.js with React, responsible for
                the user interface, dynamic rendering and connection to the digital wallet (MetaMask).
              </li>

              <li>
                <strong>Off-chain Data Layer:</strong> uses Firestore to store information
                that does not need to remain on the blockchain, such as trade offers, user preferences
                and auxiliary metadata.
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-4">
              This division allows critical and sensitive operations to remain protected on-chain,
              while complementary or temporary information stays off-chain to reduce costs and improve user experience.
            </p>
          </section>

          <section className="bg-white rounded-2xl shadow-md border border-gray-200 p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-5">Ethereum Sepolia Network</h2>

            <p className="text-gray-700 leading-relaxed">
              <strong>Sepolia</strong> is one of Ethereum’s official test networks, designed to enable
              the development and validation of smart contracts without real financial costs. It works
              similarly to the main network (Mainnet), but uses test tokens (Sepolia ETH) obtained via faucet.
            </p>

            <p className="text-gray-700 leading-relaxed mt-3">
              In this project, Sepolia was used to deploy the ERC-1155 contract that represents the
              digital stickers, ensuring a safe environment for testing minting, transfers and trades
              between users before a possible migration to Mainnet.
            </p>

            <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2 leading-relaxed">
              <li>Low cost and no financial risk for developers.</li>
              <li>Full compatibility with EVM and tools such as Hardhat and MetaMask.</li>
              <li>Ideal environment for testing transactions, events and Web3 integrations.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-4">
              Choosing Sepolia makes development faster, cheaper and more reliable, allowing every blockchain
              functionality to be tested before a final deployment.
            </p>
          </section>

          {/* --- SMART CONTRACT --- */}
          <section className="bg-white rounded-2xl shadow-md border border-gray-200 p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-5">Solidity Smart Contract (ERC-1155)</h2>

            <p className="text-gray-700 leading-relaxed">
              The smart contract was developed using the <strong>Hardhat</strong> framework, which provides a robust
              environment for compilation, local execution, automated tests and deployment. The ERC-1155 standard
              was chosen because it provides:
            </p>

            <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2 leading-relaxed">
              <li>Efficient support for minting multiple items in a single transaction.</li>
              <li>Compact representation of duplicate stickers.</li>
              <li>Batch transfers to reduce costs.</li>
              <li>Flexibility for managing IDs, quantities and metadata.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-4">
              Each sticker was associated with a JSON metadata file following the ERC-1155 Metadata URI standard,
              containing name, description, image and additional player information from the Exatas Cup.
            </p>
          </section>

          {/* --- METAMASK --- */}
          <section className="bg-white rounded-2xl shadow-md border border-gray-200 p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-5">MetaMask Integration</h2>

            <p className="text-gray-700 leading-relaxed">
              MetaMask acts as the intermediary between the application and the blockchain, allowing users to:
            </p>

            <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2 leading-relaxed">
              <li>Connect their wallet.</li>
              <li>Sign transactions.</li>
              <li>Switch networks (to Sepolia).</li>
              <li>Manage addresses and balances.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-4">
              All sensitive actions—such as buying stickers or accepting a trade—require explicit authorization
              from MetaMask. This ensures security, transparency and full Web3 compatibility.
            </p>
          </section>

          {/* --- FRONTEND --- */}
          <section className="bg-white rounded-2xl shadow-md border border-gray-200 p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-5">Frontend in Next.js</h2>

            <p className="text-gray-700 leading-relaxed">
              The frontend was implemented using <strong>Next.js</strong> due to its performance, structure and native
              support for routing, automatic optimization and API Routes. The interface was designed with focus on:
            </p>

            <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2 leading-relaxed">
              <li>Simple navigation between store, album and trading area.</li>
              <li>Intuitive wallet connection and network switching.</li>
              <li>Responsive layout for displaying stickers.</li>
              <li>Clear messages after blockchain transactions.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-4">
              All contract interactions were encapsulated using Web3 calls via ethers.js, ensuring a
              smooth experience even for asynchronous operations.
            </p>
          </section>

          {/* --- FIREBASE --- */}
          <section className="bg-white rounded-2xl shadow-md border border-gray-200 p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-5">Firebase Integration</h2>

            <p className="text-gray-700 leading-relaxed">
              <strong>Firebase</strong> is used as the off-chain data layer of the project, storing information
              that does not need to be recorded directly on the blockchain, such as trade offers, user preferences
              and auxiliary metadata. This reduces costs, increases efficiency and provides a smoother user experience.
            </p>

            <p className="text-gray-700 leading-relaxed mt-3">
              Its choice was motivated by the need for fast synchronization, serverless structure and
              simple integration with web applications. It works alongside the blockchain,
              complementing decentralized operations.
            </p>

            <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2 leading-relaxed">
              <li><strong>Cloud Firestore:</strong> stores and synchronizes trade offers in real time.</li>
              <li><strong>Authentication:</strong> assists in managing users and sessions.</li>
              <li><strong>Hosting:</strong> provides secure, fast and reliable deployments.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-4">
              This combination merges on-chain security with off-chain agility, creating a modern,
              lightweight and scalable platform.
            </p>
          </section>

          {/* --- HOW TO USE --- */}
          <section className="bg-white rounded-2xl shadow-md border border-gray-200 p-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-5">Detailed Usage Guide</h2>

            <ol className="list-decimal pl-6 space-y-4 text-gray-700 leading-relaxed text-lg">
              <li>
                Install the MetaMask extension and set up your wallet.
              </li>
              <li>
                On the website, click <strong>“Connect Wallet”</strong> to allow access to your public address.
              </li>
              <li>
                Connect to the <strong>Sepolia</strong> network (the interface helps you add the network if needed).
              </li>
              <li>
                Go to the <strong>Sticker Store</strong> to purchase packs.
              </li>
              <li>
                View your stickers in <strong>My Stickers</strong>, filtered by team and player.
              </li>
              <li>
                Go to <strong>Trades</strong> to:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Create your own trade offer.</li>
                  <li>Accept offers from other players.</li>
                  <li>Follow transactions being signed via MetaMask.</li>
                </ul>
              </li>
              <li>
                Accepted offers are automatically removed, ensuring consistency and real-time updates.
              </li>
            </ol>
          </section>
        </div>

        <footer className="mt-16 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Sticker Album (Exatas Cup) – Project Documentation
        </footer>
      </div>
    </div>
  );
}
