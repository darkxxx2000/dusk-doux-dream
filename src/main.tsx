import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { supabase } from "./supabaseClient";

async function initAuth() {
  await supabase.auth.getSession();
}

initAuth().then(() => {
  createRoot(document.getElementById("root")!).render(<App />);
});
