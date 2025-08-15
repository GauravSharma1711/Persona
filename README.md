# Persona AI Chat App

**Live Demo:** [https://persona-3zfc.vercel.app/](https://persona-3zfc.vercel.app/)

Persona is an AI-powered chat application where users can interact with different personas (like real educators, coders, or custom characters) for an engaging and personalized experience.  
The project is built using the **MERN stack** (MongoDB, Express, React, Node.js) and integrates AI APIs.


---

## 🚀 Features
- Chat with multiple personas.
- Real-time conversational UI.
- Customizable backend with AI API integration.
- Deployed frontend and backend separately on **Vercel**.
- Environment variable–based configuration for easy deployment.

---

## 🖥️ Tech Stack
- **Frontend:** React + Vite, Axios, Tailwind CSS
- **Backend:** Node.js, Express.js
- **AI API:** Gemini/OpenAI compatible API
- **Deployment:** Vercel (Frontend & Backend)

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/persona.git
cd persona
```

2️⃣Backend Setup

```bash
cd backend
npm install
```

Create a .env file in backend:
```bash
PORT=8000
FRONTEND_URL=http://localhost:5173
GEMINI_API_KEY=your_gemini_api_key_here
```
Run backend locally:
```bash
npm run dev
```

3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
```

Create a .env file in frontend:

```bash
VITE_API_URL=http://localhost:8000/api/v1
```

Run frontend locally:
```bash
npm run dev
```