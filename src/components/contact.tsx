import { atom, useAtom } from 'jotai'

export const emailAtom = atom('')

export default function contact() {
    const [email, setEmail] = useAtom(emailAtom);
    const handleEmailChange = (e) => setEmail(e.target.value);

    return (
        <div>
            CONTACT

            <input type='text' value={email} onChange={handleEmailChange} placeholder="Your Email" />
        </div>
    )
}