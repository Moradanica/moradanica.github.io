import { MdEmail } from "react-icons/md";
import { FaCopyright, FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";


export default function Contact() {
  
const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const API_URL = "https://springboot-email-api-sendgrid.onrender.com/api/email/send";
    
    // Using FormData to easily grab values by their 'name' attributes
    // const formElement = e.currentTarget.closest('form') || e.target.form;
    // const formData = new FormData(e.currentTarget.form || e.target.closest('div').parentElement);
    
    // If you prefer manual extraction to match your UI structure:
    const payload = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        // Optional: Clear form here
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error connecting to the server.");
    } finally {
      setIsSending(false);
    }
  };

  const handleTest = async () => {
    alert("Test");
  const TEST_URL = "https://springboot-email-api-sendgrid.onrender.com/api/email/test";
  
  try {
    const response = await fetch(TEST_URL); // Default is GET
    const data = await response.text();
    console.log("Server response:", data);
    alert("Connection successful: " + data);
  } catch (error) {
    console.error("Server is likely asleep or unreachable:", error);
  }
};
  return (
    <div id="contact" className="flex flex-col 
    justify-center p-20 gap-10 min-h-dvh 
    raleway-font md:gap-20 md:flex-row">
      <div className="self-center w-sm lg:w-md">
        <h2 className="font-bold text-3xl uppercase 
        tracking-wider text-slate-800 mb-8">Contact Me</h2>
        <p className="text-lg max-w-lg leading-relaxed font-medium">
          Let's Conneect! I'm open to new opportunities, collaborations, and
          interesting projects.
        </p>
        <div className="flex flex-col gap-1 pt-6  leading-relaxed font-medium tracking-wider">
          <a target="_blank"
            rel="noopener noreferrer"
            href="mailto:moradanica@gmail.com"
            aria-label="Email"
            className="flex hover:text-blue-700 transition-colors"
          ><MdEmail size={22}/>moradanica@gmail.com</a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Moradanica"
            aria-label="GitHub"
            className="flex hover:text-gray-500 transition-colors"
          >
            <FaGithub size={22} /> Github
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/danica-mora"
            aria-label="Linkedin"
            className="flex hover:text-[#0077b5] transition-colors"
          >
            <FaLinkedin size={22} /> Linkedin
          </a>
        </div>
      </div>
      <div
        className="p-5 bg-white/40 
      md:p-10"
      >
        <div
          className="pb-12 
        border-gray-900/10"
        >
          <div className="grid grid-cols-1 mt-10 gap-y-8 leading-relaxed font-medium
           md:grid-cols-6 md:gap-x-6 ">
            <div className="col-span-3 md:col-span-4 ">
              <label
                htmlFor="name"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  placeholder="Your Name"
                  id="name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  className="block w-full px-3 py-1.5  bg-white rounded-md text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="col-span-4">
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  placeholder="Email Address"
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="col-span-4">
              <label
                htmlFor="subject"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Subject
              </label>
              <div className="mt-2">
                <input
                  placeholder="Enter Email Subject"
                  id="subject"
                  type="text"
                  name="subject"
                  autoComplete="subject"
                  className="block w-full rounded-md 
                  bg-white px-3 py-1.5 text-base text-gray-900 
                  outline-1 -outline-offset-1 outline-gray-300 
                  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="col-span-6">
              <label
                htmlFor="message"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Message
              </label>
              <div className="mt-2">
                <textarea
                  placeholder="Type Message here"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  name="message"
                  id="message"
                  rows={5}
                ></textarea>
              </div>
            </div>
            <div className="col-span-2">
              <button
                className="block px-1.5 py-2 text-center whitespace-nowrap  rounded-md bg-blue-500
                hover:bg-blue-700
                hover:text-white
                hover:outline focus:outline-2 focus:-outline-offset-2 focus:outline-amber-50 sm:text-sm/6"
                onClick={handleSubmit}
             
              
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
