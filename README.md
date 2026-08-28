# Electro Riyal: Educational Blockchain Simulation System ⛓️⚡

A full-stack, decentralized blockchain simulation platform built to demonstrate the core mathematical and cryptographic foundations of distributed ledger technology (DLT). 

> **💡 Project Purpose:** This project is an **educational simulation** designed to demonstrate how blockchain networks detect tampering and maintain data integrity. It is important to note that **the system does not encrypt transaction data** (records remain readable); instead, it utilizes **SHA-256 cryptographic hashing** and **Proof of Work (PoW)** to instantly detect any unauthorized modifications or retroactive tampering across the ledger.

---

## 👥 Authors & Academic Context
* **Project Type:** Cryptography & Distributed Systems Academic Project
* **Academic Year:** 2025–2026

**👩‍💻 My Role:** Team Leader — responsible for leading the team, building the cryptographic blockchain simulation, and designing the full web interface.

---

## 🌟 Key Cryptographic & System Features
* **SHA-256 Hashing:** Generates deterministic, fixed-length digests linking each block to its predecessor via `previous_hash`, ensuring immutable record history.
* **Tamper Detection & Integrity:** Any altered transaction immediately invalidates downstream block hashes, making tampering detectable in real-time.
* **Proof of Work (PoW) Consensus:** Enforces computational difficulty (requiring hashes to meet a target prefix pattern, e.g., `'00000'`) to prevent retroactive data modification.
* **Decentralized Chain Validation:** Real-time ledger integrity checks that inspect block continuity, hash matches, and PoW correctness.
* **Consensus & Fork Resolution:** Node synchronization logic (`replace_chain`) that enforces the longest-valid-chain rule across distributed instances.
* **Interactive Web GUI:** Intuitive interface for creating transactions, initiating mining routines, and visualizing blockchain state transitions.

---

## 🏗️ System Architecture

### 1. Backend (Flask REST API)
* **Language/Framework:** Python, Flask
* **Key API Endpoints:**
  * `GET /mine_block`: Solves Proof of Work, seals pending transactions, and appends a new block.
  * `POST /add_transaction`: Queues verified sender, receiver, and amount transaction payloads.
  * `GET /get_chain`: Fetches full ledger state and current chain length.
  * `GET /is_valid`: Performs mathematical and structural validation across all blocks.
  * `POST /connect_node` & `GET /replace_chain`: Registers network peers and resolves ledger forks.

### 2. Frontend (React & Material-UI)
* **Framework:** React.js, Material-UI (MUI), React Router
* **UI Capabilities:** Dynamic block viewer, transaction dispatch form, network status dashboards, and live mining feedback.

---

## 🧱 Block Data Structure

Each block in the ledger contains:
```json
{
  "index": 1,
  "timestamp": "2026-08-28 12:00:00",
  "proof": 535235,
  "previous_hash": "00000a3b8f1c...",
  "transactions": [
    {
      "sender": "Alice",
      "receiver": "Bob",
      "amount": 50
    }
  ],
  "hash": "00000d7e4a1b..."
}
```
---

🚀 Getting Started
Prerequisites
Python 3.9+

Node.js & npm

1. Backend Setup
# Clone the repository
git clone [https://github.com/Hanan71/Electro_Riyal.git](https://github.com/Hanan71/Electro_Riyal.git)
cd Electro_Riyal/backend

# Install dependencies
pip install -r requirements.txt

# Run Flask API
python app.py

2. Frontend Setup
# In a new terminal, navigate to frontend
cd Electro_Riyal/frontend

# Install dependencies
npm install

# Start development server
npm start

---
## 📄 Project Documentation (PDF)
You can view and download the complete System Design and Cryptographic Specification document directly from this repository:

[![View PDF](https://img.shields.io/badge/View_PDF-Document-007acc?style=for-the-badge&logo=adobeacrobatreader&logoColor=white&labelColor=2ea44f)](https://github.com/Hanan71/Electro_Riyal/blob/main/Electro%20Riyal%20%20Doc.pdf) 👈 Click to view project documentation

[![Canva Presentation](https://img.shields.io/badge/Canva_Presentation-D4AF37?style=for-the-badge&logo=canva&logoColor=000000&labelColor=000000)](https://canva.link/507hrsw3lxw2why) 👈 Click to view the presentation on Canva
