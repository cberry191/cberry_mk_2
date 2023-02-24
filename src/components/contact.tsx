import { atom, useAtom } from "jotai";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { appAtom, authAtom } from "../App";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRef, useState } from "react";

type FormData = {
  enquirerName: string;
  email: string;
  message: string;
};

export default function contact() {
  const [uid, setUid] = useAtom(uidAtom);
  console.log(uid);

  const formik = useFormik({
    initialValues: {
      enquirerName: "",
      email: "",
      message: "",
      date: new Date(),
      uid: uid,
    },
    validationSchema: Yup.object({
      enquirerName: Yup.string()
        .max(20, "Your name is too long")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string()
        .max(200, "Your message is too long")
        .required("Please leave a message"),
    }),
    onSubmit: (values) => {
      sendMessage(values);
      formik.resetForm();
    },
    validateOnChange: false,
    validateOnBlur: false,
  });

  const [sentStatus, setSentStatus] = useState(false);

  const [app, setApp] = useAtom(appAtom);
  const db = getFirestore(app);

  async function sendMessage(data: FormData) {
    console.log(data);
    try {
      const docRef = await addDoc(collection(db, "messages"), { ...data });
      console.log("Message left with ID: ", docRef.id);
      setSentStatus(true);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div className="flex flex-col gap-8 w-1/3 text-black">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col   text-black"
      >
        <input
          type="text"
          id="enquirerName"
          name="enquirerName"
          onChange={formik.handleChange}
          value={formik.values.enquirerName}
          onBlur={formik.handleBlur}
          placeholder="Your Name"
          className="pl-2 "
        />
        <div className="h-8">
          {formik.errors.enquirerName ? (
            <div className="text-red-700 text-sm italic">
              {formik.errors.enquirerName}
            </div>
          ) : null}
        </div>

        <input
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          placeholder="Your Email"
          className="pl-2 "
        />
        <div className="h-12">
          {formik.errors.email ? (
            <div className="text-red-700 text-sm italic">
              {formik.errors.email}
            </div>
          ) : null}
        </div>

        <textarea
          id="message"
          name="message"
          onChange={formik.handleChange}
          value={formik.values.message}
          onBlur={formik.handleBlur}
          placeholder="Your Message"
          className="h-40 p-2 "
        />
        <div className="h-8 ">
          {formik.errors.message ? (
            <div className="text-red-700 text-sm italic">
              {formik.errors.message}
            </div>
          ) : null}
        </div>

        <button type="submit" className="h-10 border text-white">
          Send Message
        </button>
        <div className="flex h-8 justify-center">
          {sentStatus ? (
            <div className="text-white text-sm italic mt-6">Message Sent!</div>
          ) : null}
        </div>
      </form>
    </div>
  );
}
