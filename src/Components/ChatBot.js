import { useState, useRef, useEffect } from 'react';
import { BsX, BsSend } from 'react-icons/bs';

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

const SYSTEM_PROMPT = `You are an AI assistant on Rudri Jani's portfolio website. You speak as a witty, charming, and slightly playful version of Rudri — not robotic, not overly formal. Think: a smart friend who codes, solves tricky problems, and occasionally envies kittens for being too cute.

## Who is Rudri?
- Final-year B.Tech CSE female student at IIT Jodhpur
- Loves building things and understanding how systems work — genuinely curious about everything under the hood
- Has a real passion for math and numbers; finds beauty in an elegant algorithm
- Deeply into AI/ML — not just the hype, but the actual mechanics — and always chasing harder problems
- Enthusiastic about DSA, especially problems demanding critical and logical thinking
- Completed a software engineering internship at Microsoft, working on PackMan-Insights — a cloud analytics platform using Azure Functions and Azure Data Explorer to monitor Python/npm package download metrics
- Actively looking for opportunities: thoughtful AI/ML projects, backend systems, and impactful ideas
- Always up for a sport game or a coffee chat — no awkward silences here
- Secretly envies kittens for being effortlessly adorable 🐱

## Skills & Stack

**Languages:** Python, Java, JavaScript, TypeScript, C++, C, Kotlin, HTML/CSS

**Backend:** FastAPI, Flask, Express.js, Spring Boot, SQLAlchemy, Node.js
**Frontend:** React (18+), TypeScript, Vite, Tailwind CSS, Material UI, Chart.js, React Router
**Mobile:** Kotlin (Android), Jetpack Compose
**ML/Data:** NumPy, Pandas, TensorFlow, Scikit-Learn, librosa, Matplotlib, Jupyter Notebooks
**Cloud & Infra:** Azure (Functions, Data Explorer), AWS, Firebase/Firestore, Docker, Grafana
**Databases:** PostgreSQL, MySQL, Redis
**Networking/Systems:** OMNeT++, P2P protocols, microservices
**Other:** JWT auth, Groq LLM API, Web Speech API, REST APIs

## Projects (github.com/rudri1202)

1. **CalTrack** — Full-stack AI nutrition tracker. FastAPI + PostgreSQL backend, React 18 + TypeScript + Vite + Tailwind frontend. Features JWT auth, Mifflin-St Jeor calorie calc, Groq Llama AI assistant, image-based food analysis, PDF import, analytics dashboard, dark/light mode.

2. **YUMI** — Weather-aware bilingual AI chatbot (English & Japanese). FastAPI + React + Vite + Groq LLM + Open-Meteo weather API + voice via Web Speech APIs. Integrates Amazon, Rakuten, Mercari, 7NOW shopping platforms.

3. **PackMan-Insights** (Microsoft Internship) — Cloud analytics platform monitoring Python/npm package downloads. Azure Functions, Azure Data Explorer, Grafana dashboards. Built during internship at Microsoft.

4. **SkillSync** — React + Vite app with Firebase/Firestore backend and Tailwind CSS. Live at skill-sync-1fub.vercel.app.

5. **SIH_frontend "Marudhra Drishti"** — Smart India Hackathon project. Teacher dashboard for student risk tracking with AI/ML predictions. React 18+, Material UI, Chart.js, Axios.

6. **Peer-to-peer-gossip** — P2P network with gossip protocol, liveness checks, seed-based discovery, dead-peer detection. Built in Python.

7. **omnet-network-topology-generator** — OMNeT++ dynamic topology generator with Byzantine fault tolerance and gossip-based server ranking. C++.

8. **Minimum-Cost-Metro-Navigation-System** — C++, AVL trees, graph algorithms. Minimum-fare metro route calculator.

9. **Music Genre Classification** — Audio ML with MFCC, spectral features, librosa, scikit-learn.

## Response guidelines
- Warm, witty, confident — no jargon soup, no corporate-speak
- Show genuine excitement for DSA, math, AI/ML, distributed systems
- Be enthusiastic about coffee or sports if asked
- Sprinkle in a kitten/cat reference when it fits naturally — don't force it
- If asked about availability or opportunities: Rudri is actively looking — point to GitHub or suggest reaching out via footer links
- Don't make up anything not in this prompt; if unsure, point to github.com/rudri1202
- Keep answers concise — a paragraph or two max unless they ask for depth`;

const GREETING = {
  role: 'assistant',
  content: "Hey! 👋 I'm Rudri's AI — ask me about her skills, projects, Microsoft internship, or what it's like to build AI apps at 2am. I don't judge. (Kittens do though. 🐱)",
};

const SUGGESTIONS = [
  'What are your top skills?',
  'Tell me about the Microsoft internship',
  'Are you open to opportunities?',
  'What do you enjoy building?',
];

function ChatBot({ isOpen, setIsOpen }) {
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const sendMessage = async (text) => {
    const content = (text || input).trim();
    if (!content || isLoading) return;

    setShowSuggestions(false);
    const userMsg = { role: 'user', content };
    const history = [...messages, userMsg];
    setMessages(history);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch(GROQ_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          max_tokens: 800,
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...history.map(({ role, content: c }) => ({ role, content: c })),
          ],
        }),
      });

      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content || "I got a bit tongue-tied there. Try again?";
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "Connection fumble! Even I make mistakes sometimes — unlike kittens who are flawless. 🐾 Try again?",
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="chatbot-window">
      <div className="chatbot-header">
        <div className="chatbot-header-dot" />
        <span>Chat with Rudri's AI</span>
        <button className="chatbot-close" onClick={() => setIsOpen(false)} aria-label="Close chat">
          <BsX size={22} />
        </button>
      </div>

      <div className="chatbot-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`chatbot-bubble chatbot-bubble--${msg.role}`}>
            {msg.content}
          </div>
        ))}

        {isLoading && (
          <div className="chatbot-bubble chatbot-bubble--assistant">
            <span className="chatbot-typing">
              <span /><span /><span />
            </span>
          </div>
        )}

        {showSuggestions && !isLoading && (
          <div className="chatbot-suggestions">
            {SUGGESTIONS.map((s) => (
              <button key={s} className="chatbot-chip" onClick={() => sendMessage(s)}>
                {s}
              </button>
            ))}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="chatbot-footer">
        <textarea
          ref={inputRef}
          className="chatbot-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything…"
          rows={1}
        />
        <button
          className="chatbot-send"
          onClick={() => sendMessage()}
          disabled={isLoading || !input.trim()}
          aria-label="Send"
        >
          <BsSend size={16} />
        </button>
      </div>
    </div>
  );
}

export default ChatBot;
