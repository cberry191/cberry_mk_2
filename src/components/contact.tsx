import { atom, useAtom } from "jotai";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { appAtom } from "../App";

export const nameAtom = atom("");
export const emailAtom = atom("");
export const messageAtom = atom("");

export default function contact() {
  const [enquirerName, setName] = useAtom(nameAtom);
  const handleNameChange = (e) => setName(e.target.value);

  const [email, setEmail] = useAtom(emailAtom);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const [message, setMessage] = useAtom(messageAtom);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const [app, setApp] = useAtom(appAtom);
  const db = getFirestore(app);

  async function sendMessage() {
    console.log(enquirerName, email, message);

    try {
      const docRef = await addDoc(collection(db, "messages"), {
        name: enquirerName,
        email: email,
        message: message,
      });
      console.log("Message left with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div className="flex flex-col gap-8 w-1/3 text-black">
      <input
        type="text"
        value={enquirerName}
        onChange={handleNameChange}
        placeholder="Your Name"
        className="w-1/2 pl-2"
      />
      <input
        type="text"
        value={email}
        onChange={handleEmailChange}
        placeholder="Your Email"
        className="w-1/2 pl-2"
      />
      <textarea
        value={message}
        onChange={handleMessageChange}
        placeholder="Your Message"
        className="h-40 p-2"
      />
      <input
        type="button"
        value="Send Message"
        className="h-10 border text-white"
        onClick={sendMessage}
      />
    </div>
  );
}
