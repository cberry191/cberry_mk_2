import Home from "./components/home";

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { atom, useAtom } from "jotai";

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

export const authAtom = atom("");

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6LdUVackAAAAAAGLsHPraZKb7YE3LFvloltGZfhV"),
  isTokenAutoRefreshEnabled: false,
});

function App() {
  const [uid, setUid] = useAtom(authAtom);

  const auth = getAuth();
  signInAnonymously(auth)
    .then((userCredential) => {
      // console.log("Logged in as: ", userCredential.user.uid);
    })
    .catch((error) => {
      console.log(error);
    });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUid(user.uid);
      const uidAtom = atom(user.uid);
      // console.log("User in state: ", uid);
    }
  });

  return (
    <>
      <Home />
    </>
  );
}

export default App;
