"use client";
import React, { useState, useRef } from "react"; // Import useState and useRef
import SectionHeading from "./section-heading";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendEmail } from "../../actions/sendEmail";
import toast from "react-hot-toast";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false); // State to manage submission status
  const formRef = useRef<HTMLFormElement>(null); // Create a ref for the form

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    setIsSubmitting(true); // Set submitting state to true

    const formData = new FormData(event.currentTarget); // Get form data
    const response = await sendEmail(formData); // Send email action

    const { data, error } = response;

    // Check if there's an error and display it
    if (error) {
      toast.error(`Error: ${error}`); // Show the error in an alert
      setIsSubmitting(false); // Reset submitting state
      return; // Stop execution after showing error
    }

    toast.success("Email sent successfully!"); // Show success message
    setIsSubmitting(false); // Reset submitting state

    // Clear the form fields
    if (formRef.current) {
      formRef.current.reset(); // Reset the form
    }
  };

  return (
    <motion.section
      id="contact"
      className="sm:mb-28 mb-20 w-[min(100%,38rem)] text-center px-5 lg:px-0 md:px-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="TextClr text-sm -mt-5">
        Please contact me directly at{" "}
        <a
          href="mailto:Padil2246@gmail.com"
          className="font-semibold underline text-black dark:text-white"
        >
          Padil2246@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col" onSubmit={handleSubmit} ref={formRef}>
        <input
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          placeholder="Your email"
          className="TextClr text-sm h-14 px-4 rounded-lg border BorderAndBg dark:focus:black/10 dark:outline:black/10 focus:outline-black/60"
        />
        <textarea
          placeholder="Your message"
          name="message"
          required
          maxLength={5000}
          className="text-sm TextClr BorderAndBg h-52 my-3 p-4 rounded-lg resize-none focus:outline-black/60"
        />
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="group dark:bg-black bg-white text-black dark:text-white w-[8rem] flex items-center justify-center gap-2 group text-sm"
          disabled={isSubmitting} // Disable when form is pending or submitting
        >
          {isSubmitting ? (
            <div className=" h-5 w-5 animate-spin rounded-full border-b-2 dark:border-white border-black"></div>
          ) : (
            <>
              Submit{" "}
              <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
            </>
          )}
        </HoverBorderGradient>
      </form>
    </motion.section>
  );
}

export default Contact;
