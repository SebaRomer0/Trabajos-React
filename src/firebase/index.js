import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfOcrWmXGBXFnj3KqCMtuP3Q44Gygsj-s",
  authDomain: "ecommerce-react-25395-6fbc5.firebaseapp.com",
  projectId: "ecommerce-react-25395-6fbc5",
  storageBucket: "ecommerce-react-25395-6fbc5.appspot.com",
  messagingSenderId: "1044652501236",
  appId: "1:1044652501236:web:3fcd6a6efed04634dad6a1",
};

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };

// Profe aca no pude hacer correr el .env no me toma los codigos y nose donde falla. Lo instale y segui los pasos pero no los muestra.
// Tambien esta creada la la hoja .env


const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;
export const getFirestore = () => firebase.firestore(app);
