import { supabase } from "../supabaseClient";

export default function Index() {
  async function loginWithGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }

  return (
    <div>
      <h1>Bienvenido</h1>
      <button onClick={loginWithGoogle}>Login con Google</button>
    </div>
  );
}
