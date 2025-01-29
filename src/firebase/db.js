import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const getAllItems = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const items = querySnapshot.docs.map((doc) => doc.data());

  return items;
};

export const getItemsByCategory = async (category) => {
  const q = query(
    collection(db, "products"),
    where("category", "==", category)
  );
  const querySnapshot = await getDocs(q);
  const items = querySnapshot.docs.map((doc) => doc.data());

  return items;
};

export const getProductById = async (id) => {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);

  return docSnap.exists() ? docSnap.data() : null;
};
