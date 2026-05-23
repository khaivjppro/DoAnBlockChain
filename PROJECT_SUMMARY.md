# DoAnBlockChain - Project Summary

## 🎯 Overview

**DoAnBlockChain** is a comprehensive blockchain-based certificate management system that combines Web3 technology, NFTs, and smart contracts to create a secure, transparent, and tamper-proof digital credential ecosystem.

---

## ✨ Key Features

### 🔐 Security & Authenticity
- ✅ Blockchain-based certificate storage
- ✅ Immutable digital records on Polygon/Ethereum
- ✅ NFT-based ownership verification
- ✅ Cryptographic hashing of certificates
- ✅ Role-based access control (RBAC)

### 🌐 Web3 Integration
- ✅ MetaMask wallet connection
- ✅ Web3.js for blockchain interaction
- ✅ Smart contract integration (Solidity)
- ✅ Transaction tracking and verification
- ✅ Multi-chain support (Polygon, Ethereum)

### 📱 User Features
- ✅ Certificate viewing & management
- ✅ QR code generation for verification
- ✅ NFT ownership display
- ✅ Blockchain transaction tracking
- ✅ PDF certificate download

### 👨‍💼 Admin Features
- ✅ Certificate creation & management
- ✅ NFT minting
- ✅ User management
- ✅ Analytics & reporting
- ✅ Batch operations
- ✅ Certificate revocation

### 🏢 Employer Features
- ✅ Certificate verification via QR code
- ✅ Blockchain validation
- ✅ Certificate authenticity checking
- ✅ Batch verification

---

## 🏗️ Technology Stack

### Frontend
- **Framework**: Next.js 14 with React 18
- **Styling**: TailwindCSS
- **State Management**: Zustand
- **Blockchain**: Web3.js, Ethers.js
- **UI Components**: Lucide React Icons
- **TypeScript**: Full type safety

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Multer
- **Validation**: Express Validator

### Smart Contracts
- **Language**: Solidity 0.8.19
- **Standards**: ERC721 (NFT)
- **Framework**: Hardhat
- **Access Control**: OpenZeppelin AccessControl
- **Testing**: Hardhat + Chai

### Infrastructure
- **Blockchain Networks**: 
  - Polygon Mumbai Testnet (80001)
  - Ethereum Sepolia Testnet (11155111)
- **Storage**: IPFS (Pinata, Web3.Storage)
- **Hosting Ready**: Vercel, Heroku, Railway

---

## 📁 Project Structure

```
DoAnBlockChain/
│
├── backend/                    # Node.js Backend
│   ├── models/
│   │   ├── User.js
│   │   └── Certificate.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── user.routes.js
│   │   ├── certificate.routes.js
│   │   ├── blockchain.routes.js
│   │   ├── ipfs.routes.js
│   │   ├── admin.routes.js
│   │   └── analytics.routes.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── upload.js
│   ├── server.js
│   └── package.json
│
├── frontend/                   # Next.js Frontend
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── login/
│   │   ├── register/
│   │   ├── dashboard/
│   │   ├── certificates/
│   │   ├── analytics/
│   │   ├── users/
│   │   ├── settings/
│   │   └── verify/
│   ├── components/
│   │   ├── layout/
│   │   ├── certificate/
│   │   ├── admin/
│   │   └── web3/
│   ├── utils/
│   │   ├── api.ts
│   │   └── web3.ts
│   ├── store/
│   │   └── useAuth.ts
│   └── package.json
│
├── smart-contracts/            # Solidity Contracts
│   ├── contracts/
│   │   ├── CertificateNFT.sol
│   │   ├── CertificateStorage.sol
│   │   ├── CertificateRegistry.sol
│   │   └── AdvancedCertificateNFT.sol
│   ├── scripts/
│   │   └── deploy.js
│   ├── test/
│   │   └── CertificateNFT.test.js
│   ├── hardhat.config.js
│   └── package.json
│
├── docs/
│   ├── README.md
│   ├── SETUP_GUIDE.md
│   ├── API_DOCS.md
│   └── DEPLOYMENT.md
│
└── .gitignore
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js >= 16
- npm >= 8
- MongoDB
- MetaMask

### Installation

```bash
# Clone repository
git clone https://github.com/khaivjppro/DoAnBlockChain.git
cd DoAnBlockChain

# Backend
cd backend
npm install
cp .env.example .env
npm run dev

# Frontend (new terminal)
cd frontend
npm install
cp .env.local.example .env.local
npm run dev

# Smart Contracts (new terminal)
cd smart-contracts
npm install
npm run compile
npm run deploy:mumbai
```

---

## 📊 API Overview

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/register` | POST | User registration |
| `/api/auth/login` | POST | User login |
| `/api/certificates` | GET | List certificates |
| `/api/certificates/:id/mint` | POST | Mint NFT |
| `/api/certificates/:id/verify` | POST | Verify certificate |
| `/api/users/dashboard` | GET | Dashboard data |
| `/api/blockchain/status` | GET | Network status |
| `/api/analytics/stats` | GET | Admin analytics |

---

## 🔐 Smart Contracts

### CertificateNFT.sol
- ERC721 NFT implementation
- Certificate minting
- Ownership tracking
- Verification logic

### CertificateStorage.sol
- Metadata storage
- Certificate lifecycle management
- Revocation handling

### CertificateRegistry.sol
- Central registry
- Status tracking
- Verification system

### AdvancedCertificateNFT.sol
- Role-based access control
- Advanced features
- Multi-role support

---

## 👥 User Roles

| Role | Permissions |
|------|-------------|
| **Student** | View certificates, Download PDF, Share QR, Verify others |
| **Admin** | Create, Mint, Revoke, Manage users, Analytics |
| **Employer** | Verify certificates, View details |

---

## 📈 Features by Role

### Student Dashboard
- View all received certificates
- Download certificate PDFs
- Share QR codes
- Check blockchain status
- View NFT details

### Admin Dashboard
- Create new certificates
- Upload PDFs to IPFS
- Mint NFTs
- Revoke certificates
- Manage users
- View analytics
- Export reports

### Employer Dashboard
- Verify certificates via QR code
- Check blockchain validation
- View certificate details
- Download verification reports

---

## 🔄 Certificate Lifecycle

```
1. Admin Creates Certificate
   ↓
2. PDF Uploaded to IPFS
   ↓
3. Hash Stored on Blockchain
   ↓
4. NFT Minted to Student
   ↓
5. Student Receives Certificate
   ↓
6. Employer/Others Can Verify
   ↓
7. Admin Can Revoke if Needed
```

---

## 🌐 Network Configuration

### Polygon Mumbai Testnet
- **Chain ID**: 80001
- **RPC**: https://rpc-mumbai.maticvigil.com
- **Explorer**: https://mumbai.polygonscan.com
- **Faucet**: https://faucet.polygon.technology/

### Ethereum Sepolia Testnet
- **Chain ID**: 11155111
- **RPC**: https://sepolia.infura.io/v3/YOUR_KEY
- **Explorer**: https://sepolia.etherscan.io
- **Faucet**: https://sepolia-faucet.pk910.de/

---

## 📝 Environment Variables

### Backend (.env)
```
MONGODB_URI=
JWT_SECRET=
BLOCKCHAIN_RPC_URL=
CONTRACT_ADDRESS=
PINATA_API_KEY=
```

### Frontend (.env.local)
```
NEXT_PUBLIC_BACKEND_URL=
NEXT_PUBLIC_RPC_URL=
NEXT_PUBLIC_CONTRACT_ADDRESS=
NEXT_PUBLIC_CHAIN_ID=
```

### Smart Contracts (.env)
```
CONTRACT_OWNER_PRIVATE_KEY=
MUMBAI_RPC_URL=
POLYGONSCAN_API_KEY=
```

---

## 📦 Dependencies

### Backend
- express, mongoose, jsonwebtoken, bcryptjs, web3, multer, axios, cors, helmet

### Frontend
- next, react, web3.js, ethers.js, axios, qrcode.react, zustand, tailwindcss

### Smart Contracts
- hardhat, @openzeppelin/contracts, solidity

---

## 🧪 Testing

```bash
# Backend
npm test

# Frontend
npm test

# Smart Contracts
npm test
npm run test:gas
```

---

## 🚀 Deployment

### Frontend → Vercel
```bash
cd frontend
vercel deploy
```

### Backend → Heroku/Railway
```bash
cd backend
heroku create
heroku config:set MONGODB_URI=...
git push heroku main
```

### Smart Contracts → Polygon
```bash
cd smart-contracts
npm run deploy:mumbai
```

---

## 📚 Documentation

- **Setup Guide**: [SETUP_GUIDE.md](SETUP_GUIDE.md)
- **API Documentation**: [API_DOCS.md](API_DOCS.md)
- **README**: [README.md](README.md)

---

## 🔐 Security Features

- ✅ JWT authentication
- ✅ Blockchain verification
- ✅ Smart contract audits
- ✅ Role-based access control
- ✅ Input validation
- ✅ XSS protection (Helmet.js)
- ✅ CORS security
- ✅ Password hashing (bcrypt)

---

## 🎯 Future Enhancements

- [ ] AI-powered certificate verification
- [ ] Mobile app (React Native)
- [ ] DAO governance
- [ ] Multi-chain support (L2s)
- [ ] Soulbound NFTs
- [ ] Gamification (achievements)
- [ ] Advanced analytics
- [ ] Email notifications
- [ ] API webhooks
- [ ] GraphQL API

---

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

---

## 📄 License

MIT License - See LICENSE file

---

## 💬 Support

- **GitHub Issues**: Report bugs
- **Documentation**: Read guides
- **Email**: support@doablockchain.com

---

## 🙏 Acknowledgments

- OpenZeppelin for smart contract libraries
- Polygon for testnet
- The Ethereum community

---

**Status**: ✅ Production Ready  
**Version**: 1.0.0  
**Last Updated**: May 2026  
**Repository**: https://github.com/khaivjppro/DoAnBlockChain
