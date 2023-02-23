import Home from "./components/home";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { collection, addDoc } from "firebase/firestore";
import { atom } from "jotai";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const appAtom = atom(app);

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6LdUVackAAAAAAGLsHPraZKb7YE3LFvloltGZfhV"),
  isTokenAutoRefreshEnabled: false,
});

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
