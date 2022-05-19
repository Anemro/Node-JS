import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, query, where, getDoc, setDoc } from 'firebase/firestore/lite';
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
const db = getFirestore(app);

const PRODUCTS = [
    {
        "id": 3,
        "title": "La Sirenita",
        "imageUrl":"https://www.elimparcial.com/__export/1607701386219/sites/elimparcial/img/2020/12/11/lasirenitafotos_22794083_275632912957687_7447981338650476544_n.jpg_423682103.jpg",
        "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
        "price": 4344,
        "stock": 13,
        "genere": "candyBar"
      }, 
      {
        "id": 4,
        "title": "Astronautas",
        "imageUrl":"https://i.pinimg.com/550x/12/5b/47/125b4749900b13cbacf81faade2a5f8f.jpg",
        "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
        "price": 4185,
        "stock": 18,
        "genere": "kitImprimible"
      }, 
      {
        "id": 5,
        "title": "Jovenes Titanes",
        "imageUrl":"https://i.pinimg.com/originals/c0/38/3d/c0383d96c7f38792e946df4fdba83216.jpg",
        "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
        "price": 1533,
        "stock": 6,
        "genere": "kitImprimible"
      }, 
      {
        "id": 6,
        "title": "Animales del Bosque",
        "imageUrl":"https://i.pinimg.com/736x/86/0d/92/860d92607167c40cb728c1b6e1bd40f7.jpg",
        "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
        "price": 2876,
        "stock": 14,
        "genere": "kitImprimible"
      }, 
      {
        "id": 7,
        "title": "Matsoft",
        "imageUrl":"./logoTienda.jpeg",
        "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
        "price": 3336,
        "stock": 8,
        "genere": "candyBar"
      },
      {
        "id": 8,
        "title": "Otcom",
        "imageUrl":"./logoTienda.jpeg",
        "description": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
        "price": 171,
        "stock": 9,
        "genere": "kitImprimible"
      }, 
      {
        "id": 9,
        "title": "Rank",
        "imageUrl":"./logoTienda.jpeg",
        "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
        "price": 4843,
        "stock": 8,
        "genere": "candyBar"
      }, 
      {
        "id": 10,
        "title": "Wrapsafe",
        "imageUrl":"./logoTienda.jpeg",
        "description": "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
        "price": 2434,
        "stock": 8,
        "genere": "candyBar"
      }, 
      {
        "id": 11,
        "title": "Sonsing",
        "imageUrl":"./logoTienda.jpeg",
        "description": "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
        "price": 4979,
        "stock": 19,
        "genere": "candyBar"
      }, 
      {
        "id": 12,
        "title": "Job",
        "imageUrl":"./logoTienda.jpeg",
        "description": "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
        "price": 2027,
        "stock": 2,
        "genere": "candyBar"
      }, 
      {
        "id": 13,
        "title": "Fix San",
        "imageUrl":"./logoTienda.jpeg",
        "description": "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
        "price": 4589,
        "stock": 20,
        "genere": "kitImprimible"
      }, 
      {
        "id": 14,
        "title": "Konklux",
        "imageUrl":"./logoTienda.jpeg",
        "description": "Quisque ut erat. Curabitur gravida nisi at nibh.",
        "price": 4477,
        "stock": 17,
        "genere": "kitImprimible"
      }, 
      {
        "id": 15,
        "title": "Y-Solowarm",
        "imageUrl":"./logoTienda.jpeg",
        "description": "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
        "price": 235,
        "stock": 7,
        "genere": "kitImprimible"
      }, 
      {
        "id": 16,
        "title": "Bytecard",
        "imageUrl":"./logoTienda.jpeg",
        "description": "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
        "price": 1109,
        "stock": 1,
        "genere": "candyBox"
      }, 
      {
        "id": 17,
        "title": "Lotlux",
        "imageUrl":"./logoTienda.jpeg",
        "description": "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
        "price": 2612,
        "stock": 14,
        "genere": "candyBar"
      }, 
      {
        "id": 18,
        "title": "Sub-Ex",
        "imageUrl":"./logoTienda.jpeg",
        "description": "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
        "price": 4951,
        "stock": 12,
        "genere": "kitImprimible"
      }, 
      {
        "id": 19,
        "title": "It",
        "imageUrl":"./logoTienda.jpeg",
        "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
        "price": 486,
        "stock": 19,
        "genere": "kitImprimible"
      }, 
      {
        "id": 20,
        "title": "Otcom",
        "imageUrl":"./logoTienda.jpeg",
        "description": "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
        "price": 2836,
        "stock": 13,
        "genere": "candyBar"
      },

];

async function dataToFireBase() {
    PRODUCTS.forEach((item)=> {
        const newItem = doc(collection(db,"product"));

        setDoc(newItem, item).then(()=>{
            console.log("document written with ID: ", newItem.id)})
            .catch(err => {
                console.error ( "error adding document: ", err);
            });
    });
}

export default dataToFireBase;