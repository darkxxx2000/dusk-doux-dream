import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
import { supabase } from './supabaseClient'

async function loginWithGoogle() {
  await supabase.auth.signInWithOAuth({
    provider: 'google',
  })
}

;(window as any).loginWithGoogle = loginWithGoogle
