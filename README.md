# CollegeBazaar

A campus marketplace web app where students can list, browse, and bid on items. Built with a React (Vite) frontend and an Express + PostgreSQL backend.


## Structure

- `frontend/` — React + Vite client
- `backend/` — Express REST API + PostgreSQL

## Google OAuth Login

Students can sign in with their Google account (restricted to the campus email domain) or with email/password. See `backend/controllers/userController.js` (`googleLogin`) and `frontend/src/components/AuthPage.jsx` for the implementation, and the Setup section below for configuration.

## Setup

### Backend

```bash
cd backend
npm install
cp .env_example .env   # fill in DATABASE_URL, JWT_SECRET, GOOGLE_CLIENT_ID, etc.
npm start
```

### Frontend

```bash
cd frontend
npm install
cp .env.example .env   # fill in VITE_API_URL, VITE_GOOGLE_CLIENT_ID
npm run dev
```
