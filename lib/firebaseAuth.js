import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const registerUser = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      name,
      email,
      photoURL: "/assets/media/profile/user1.png", 
      location: "Gothenburg",
      dob: "1886-03-15",
      birthDate: "15th February",
      phone: "+46-7644-394-68",
      bookingHistory: [],
      newsletters: []
    });

    return user;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};
