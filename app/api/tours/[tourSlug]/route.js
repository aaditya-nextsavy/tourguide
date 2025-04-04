import { db } from "@/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export async function GET(req, { params }) {
  const { tourSlug } = params;

  if (!tourSlug) {
    return new Response(
      JSON.stringify({ success: false, error: "tourSlug is required" }),
      { status: 400 }
    );
  }

  try {
    const toursRef = collection(db, "tours");
    const q = query(toursRef, where("tourSlug", "==", tourSlug));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      return new Response(
        JSON.stringify({ success: false, error: "Tour not found" }),
        { status: 404 }
      );
    }

    const doc = snapshot.docs[0];
    const tourData = { id: doc.id, ...doc.data() };

    return new Response(JSON.stringify({ success: true, data: tourData }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
