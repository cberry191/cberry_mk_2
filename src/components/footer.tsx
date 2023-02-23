import { useState } from "react";

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-white">
      <p>© 2023 Christopher Berry - All Rights Reserved</p>
      <button onClick={() => setOpen(!open)}>Privacy Policy</button>
      {open ? (
        <p className="w-3/5 mb-8">
          Christopher Berry values your privacy and understands the importance
          of keeping any personal information secure. The only information we
          will store about you is that which you provide to us. We need this
          information to offer our services to you. If you need to access,
          update, request deletion of the information we have stored about you
          or lodge a complaint, contact us via the form above.
        </p>
      ) : null}
    </div>
  );
}
