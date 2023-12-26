import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="font-bold text-3xl p-4 m-4">ContactUs</div>
      <form className="flex flex-col gap-2">
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter Your Name"
          className="border border-black w-1/5 rounded-md px-2 py-1"
        />{" "}
        <label>Message</label>
        <input
          type="text"
          placeholder="Enter Your Message"
          className="border border-black w-1/5 rounded-md px-2 py-1"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ContactUs;
