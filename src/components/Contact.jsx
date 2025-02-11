import React from "react";

const Contact = () => {
  return (
    <div>
      <section id="contact" className="py-16 px-5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6">Contact</h2>
          {/* <form className="grid grid-cols-1 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered"
            />
            <textarea
              placeholder="Your Message"
              className="textarea textarea-bordered"
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form> */}
          <p>Email Address: ahmedabrarariyan16@gmail.com</p>
          <p>Phone Number: +8801819996320</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
