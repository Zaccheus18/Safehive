import React, { useRef } from "react";
import {
  CardBody,
  Input,
  Textarea,
  Button,
  Typography,
} from "@material-tailwind/react";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";

export function Contact() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const sendEmail = () => {
    const recipient = 'frenchie.chua@wvsu.edu.ph';
    const subject = 'Message from Safehive Form';
    const body = `Name: ${nameRef.current.value}\nEmail: ${emailRef.current.value}\nMessage: ${messageRef.current.value}`;
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-center lg:justify-between" style={{ minHeight: "680px" }}>
      <CardBody className="px-4 py-8 mt-2 mb-10 lg:flex lg:items-center lg:w-1/2">
        <div className="w-full lg:pr-4">
          <div className="flex flex-col gap-2 bg-white p-4 rounded-lg">
            <Typography className="text-4xl font-bold mb-5 mt-20 lg:mt-0">Contact Us</Typography>
            <div>
              <label htmlFor="name">Name</label>
              <Input
                id="name"
                type="text"
                placeholder="Your Name"
                required
                ref={nameRef} // Change inputref to ref here
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="Your Email"
                required
                ref={emailRef} // Change inputref to ref here
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <Textarea
                id="message"
                placeholder="Your Message"
                required
                ref={messageRef} // Change inputref to ref here
              />
            </div>
            <Button
              color="blue"
              ripple={true}
              className="btn-sm"
              onClick={sendEmail}
            >
              Send Message
            </Button>
          </div>
        </div>
      </CardBody>
      <div className="lg:w-1/2 lg:pl-4 flex justify-center items-center">
        <img
          src="/img/contact.png"
          alt="Contact Us Image"
          className="w-1/2"
          style={{ width: "60%" }}
        />
      </div>
    </div>
  );
}

export default Contact;
