import { atom, useAtom } from "jotai";

export const emailAtom = atom("");
export const messageAtom = atom("");

export default function contact() {
  const [email, setEmail] = useAtom(emailAtom);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const [message, setMessage] = useAtom(messageAtom);
  const handleMessageChange = (e) => setMessage(e.target.value);

  return (
    <div className="flex flex-col gap-8">
      CONTACT
      <input
        type="text"
        value={email}
        onChange={handleEmailChange}
        placeholder="Your Email"
        className="w-1/4"
      />
      <input
        type="text"
        value={message}
        onChange={handleMessageChange}
        placeholder="Your Message"
        className="w-2/5 h-40"
      />
      <input
        type="button"
        value="Send Message"
        className="h-10 w-1/5 border "
      />
    </div>
  );
}
