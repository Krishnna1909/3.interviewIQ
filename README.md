# 🎯 InterviewIQ — AI-Powered Interview Preparation Platform

> Upload your resume. Get personalized questions. Practice. Get feedback. Land the job.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Anthropic](https://img.shields.io/badge/Claude%20AI-6B48FF?style=for-the-badge&logo=anthropic&logoColor=white)

---

## 🚀 What is InterviewIQ?

InterviewIQ is a full-stack SaaS platform that uses **Claude AI** to simulate real interview experiences. Users upload their resume, and the AI analyzes it to generate personalized, role-specific interview questions across Technical and HR rounds — then evaluates every answer with intelligent feedback.

---

## ✨ Features

| Feature | Description |
|---|---|
| 📄 Resume Parsing | Upload PDF resume — AI extracts role, skills, projects & experience |
| 🤖 AI Question Generation | 5 personalized questions per interview, difficulty-scaled |
| 🎤 Technical & HR Modes | Choose interview type based on your preparation goal |
| 📊 Intelligent Feedback | Per-answer scoring on Confidence, Communication & Correctness |
| 💳 Credit System | Pay-per-use model — 50 credits per interview session |
| 💰 Razorpay Payments | Seamless credit purchase with Razorpay integration |
| 🔐 Google Auth | One-click sign-in via Firebase Authentication |
| 📈 Interview History | View all past interviews with scores and detailed reports |
| 🎨 Smooth UI | Framer Motion animations for a premium user experience |

---

## 🛠️ Tech Stack

### Frontend
- **React.js** — Component-based UI
- **Framer Motion** — Smooth animations and transitions
- **Firebase** — Google Authentication

### Backend
- **Node.js + Express.js** — REST API server
- **MongoDB + Mongoose** — Database and schema modeling
- **PDF.js** — Server-side resume PDF parsing
- **Claude AI (Anthropic)** — Question generation and answer evaluation
- **Razorpay** — Payment gateway for credit purchases
- **JWT** — Secure route authentication
- **Multer** — File upload handling

### Deployment
- **Render** — Full-stack deployment (client + server)

---

## 📁 Project Structure

```
InterviewIQ/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── firebase.js
│   └── .env
│
└── server/                 # Node.js backend
    ├── controllers/
    │   ├── auth.controller.js
    │   ├── interview.controller.js
    │   ├── payment.controller.js
    │   └── user.controller.js
    ├── models/
    ├── routes/
    ├── services/
    │   ├── ai.service.js
    │   └── razorpay.service.js
    ├── middlewares/
    ├── config/
    └── .env
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js >= 18
- MongoDB Atlas account
- Anthropic API key
- Firebase project
- Razorpay account

### 1. Clone the repository
```bash
git clone https://github.com/Krishnna1909/interviewiq.git
cd interviewiq
```

### 2. Setup Server
```bash
cd server
npm install
```

Create `server/.env`:
```env
PORT=8000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ANTHROPIC_API_KEY=your_anthropic_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

```bash
npm run dev
```

### 3. Setup Client
```bash
cd client
npm install
```

Create `client/.env`:
```env
VITE_FIREBASE_API_KEY=your_value
VITE_FIREBASE_AUTH_DOMAIN=your_value
VITE_FIREBASE_PROJECT_ID=your_value
VITE_API_BASE_URL=http://localhost:8000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

```bash
npm run dev
```

---

## 🔄 How It Works

```
1. User signs in with Google (Firebase Auth)
         ↓
2. Uploads PDF resume
         ↓
3. Claude AI parses resume → extracts role, skills, projects
         ↓
4. User selects interview mode (Technical / HR)
         ↓
5. Claude generates 5 personalized questions (easy → hard)
         ↓
6. User answers each question within time limit
         ↓
7. Claude evaluates each answer → scores + feedback
         ↓
8. Final report generated with overall scores
```

---

## 💳 Credit System

| Action | Credits |
|---|---|
| Start Interview Session | 50 credits |
| New User Bonus | 100 credits (free) |
| Purchase Credits | Via Razorpay |

---

## 📊 Scoring Breakdown

Each answer is evaluated across 3 dimensions:

- **Confidence** — Clarity and assertiveness of the response
- **Communication** — Language quality and structure
- **Correctness** — Accuracy and relevance of content

`Final Score = Average of all three (0–10)`

---

## 🌐 Deployment

This app is deployed on **Render**. To deploy your own instance:

1. Push code to GitHub
2. Create two Render services (client + server)
3. Add all environment variables in Render Dashboard → Environment
4. Set build and start commands:
   - Server: `node index.js`
   - Client: `npm run build`

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

[MIT](LICENSE)

---

<p align="center">Built with ❤️ using Claude AI · React · Node.js · MongoDB</p>
