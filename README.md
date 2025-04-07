# Prepwise: AI-Powered Mock Interview Platform

**Prepwise** is an AI-powered mock interview platform built using modern web technologies. It helps users prepare for job interviews by simulating real-world interview environments and providing real-time, voice-based AI interviewer interactions, followed by detailed feedback.

---

## ✨ Features

- AI voice-based interviewer powered by Vapi and OpenAI
- Authentication via Firebase
- Real-time feedback generation
- Role and tech-stack based question generation
- Responsive and modern UI with Tailwind CSS
- Interview history and scoring breakdown
- Dark mode support

---

## 🚀 Tech Stack

- **Frontend:** Next.js 15 (App Router), TypeScript, Tailwind CSS, ShadCN UI
- **Backend:** Firebase Admin SDK, Firestore
- **Authentication:** Firebase Auth with session cookies
- **AI SDKs:** Vapi (for voice conversations), Google Gemini (question generation), OpenAI GPT-4 (feedback analysis)
- **Form Handling:** React Hook Form, Zod

---

## 🚧 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/prish20/prepwise-interview.git
cd prepwise-interview
```

### 2. Install Dependencies
```bash
npm install
# or
yarn
```

### 3. Environment Variables
Create a `.env.local` file at the root with the following values:
```env
NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_token
NEXT_PUBLIC_VAPI_WORKFOW_ID=your_workflow_id
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_CLIENT_EMAIL=your_firebase_admin_email
FIREBASE_PRIVATE_KEY=your_firebase_private_key (escaped properly)
```

### 4. Run the Development Server
```bash
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000).

---

## 🧑‍💻 Project Structure (Important Files)

```
prish20-prepwise-interview/
├── app/                # Main app structure
│   ├── (auth)/         # Auth routes: sign-in, sign-up
│   ├── (root)/         # Protected routes (dashboard, interviews)
│   ├── api/vapi/       # Vapi route for generating interview questions
├── components/         # Reusable components (Agent, AuthForm, InterviewCard, etc)
├── constants/          # Static configs (tech stack mappings, AI config)
├── firebase/           # Firebase client and admin setup
├── lib/                # Helper functions and AI SDK integrations
├── public/             # Static assets
├── types/              # TypeScript type definitions
```

---

## 📉 How It Works

### 1. **Authentication**
- Users sign in/sign up via Firebase Authentication.
- Session cookies are set securely for auth-protected routes.

### 2. **Generate Interview**
- User selects role, level, tech stack, type.
- A POST request is made to `/api/vapi/generate`.
- Gemini API (via AI SDK) returns questions.
- Questions saved to Firestore.

### 3. **AI Interview Experience**
- Uses Vapi SDK for real-time voice interaction.
- Interviewer is configured with a GPT-4 personality prompt.
- Questions are asked in voice format.
- Responses are transcribed in real-time.

### 4. **Post Interview Feedback**
- When the call ends, transcripts are saved.
- Feedback is generated via GPT-4 based on transcript.
- Feedback includes:
  - Overall score
  - Category-wise score breakdown
  - Strengths and areas of improvement

---

## 🌟 Customization

- **Tech Icons:** Pulled dynamically using Devicon CDN
- **Interview Covers:** Randomly selected from a curated list
- **Themes:** Fully customizable via Tailwind CSS and CSS variables

---

## ✅ TODOs

- Add user profile editing
- Save custom roles and tech preferences
- Add admin dashboard for interview analytics
- Support video-based mock interviews

---

## ✨ Credits

- [Vapi](https://vapi.ai/) for voice SDK
- [OpenAI](https://openai.com/) for GPT feedback
- [Google Gemini](https://ai.google/) for question generation
- [Firebase](https://firebase.google.com/) for authentication & database

---

## 🚜 Deploying to Vercel

1. Push code to GitHub
2. Link repo on [vercel.com](https://vercel.com/)
3. Add environment variables in Vercel dashboard
4. Deploy and enjoy

---

## 🚀 Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m "Add feature"`
4. Push to the branch: `git push origin feature-name`
5. Create a pull request

---

## ℹ️ License

MIT License. Feel free to use and modify for personal or educational use.

---

## 🚀 Live Demo

> Coming soon on Vercel!
