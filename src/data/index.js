import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, query, where, getDoc } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUK-p5HcgMtxw0RgmvnnSrGVDZULce6N0",
  authDomain: "tiendadelolindo-3062a.firebaseapp.com",
  projectId: "tiendadelolindo-3062a",
  storageBucket: "tiendadelolindo-3062a.appspot.com",
  messagingSenderId: "580445361942",
  appId: "1:580445361942:web:9f3c3141ed7dc632d2e237"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);


export default firestoreDB

export async function getAllItems () {
  //referencia a la colección de items
  const miColec = collection (firestoreDB, 'product')
  //obtenemos todos los items
  const productsSnap = await getDocs(miColec)
  return productsSnap.docs.map(doc => {
    return {
      ...doc.data(),
      id: doc.id,
    } 
  });
}
  
//obtener todos los items de una categoria
export async function getItemByCategory(categoryId){
  const miColec = collection (firestoreDB, 'product')
  const queryProducts = query(miColec, where("genere", "==", categoryId));

  const productsSnap = await getDocs(queryProducts);
  return productsSnap.docs.map(doc => {
    return {
      ...doc.data(),
      id: doc.id,
    } 
  });
}  

//Obtener un solo item
export async function getItem(id){
  const miColec = collection (firestoreDB, 'product')
  const productRef = doc(miColec, id);
  const productSnap = await getDoc(productRef)
  return {...productSnap.data(),id: productSnap.id} 
}
  
