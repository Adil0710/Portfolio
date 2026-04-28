"use client";
import React, { useState, useRef } from "react"; // Import useState and useRef
import SectionHeading from "./section-heading";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendEmail } from "../../actions/sendEmail";
import toast from "react-hot-toast";
import { contactEmail } from "@/lib/contactData";

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

    toast.success("Message sent successfully!"); // Show success message
    setIsSubmitting(false); // Reset submitting state

    // Clear the form fields
    if (formRef.current) {
      formRef.current.reset(); // Reset the form
    }
  };

  return (
    <motion.section
      id="contact"
      className="  w-[min(100%,43.5rem)] scroll-mt-16 px-5 lg:px-0 md:px-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* <SectionHeading>Contact me</SectionHeading> */}
      <p className="leading-7 max-w-full text-pretty text-xs text-foreground/60 ">
        Please contact me directly at{" "}
        <a
          href={`mailto:${contactEmail}`}
          className="font-semibold underline text-black dark:text-white"
        >
          {contactEmail}
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-5 flex flex-col"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <input
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          placeholder="Your email"
          className="leading-7 max-w-full text-pretty text-foreground/60 text-xs h-10 px-2 rounded-lg border BorderAndBg focus:outline focus:outline-[0.1px] ring-foreground/50  focus-visible:ring-[0.1px] focus:outline-foreground/50"
        />
        <textarea
          placeholder="Your message"
          name="message"
          required
          maxLength={5000}
          className="leading-7 max-w-full text-pretty text-xs text-foreground/60 BorderAndBg h-20 my-3 px-2 rounded-lg resize-none focus:outline focus:outline-foreground/50 focus:outline-[0.1px] ring-foreground/50 focus-visible:ring-[0.1px]"
        />
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="group bg-[#f4f4f0] dark:bg-[#1d1d16] text-foreground/75 w-[5rem] flex items-center justify-center gap-2 group py-1  text-xs"
          disabled={isSubmitting} // Disable when form is pending or submitting
        >
          {isSubmitting ? (
            <div className=" h-5 w-5 animate-spin rounded-full border-b-2 dark:border-white border-black"></div>
          ) : (
            <>
              Send{" "}
              <FaPaperPlane className="text-xs opacity-70 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
            </>
          )}
        </HoverBorderGradient>
      </form>
    </motion.section>
  );
}

export default Contact;
