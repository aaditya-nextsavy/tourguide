
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return Response.json({ user: userCredential.user });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }
}
