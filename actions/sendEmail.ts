"use server";

import { Resend } from "resend";
import { validateString } from "@/lib/utils";
import Contact from "../email/contact-form";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

// Define the return type for sendEmail
interface SendEmailResponse {
  data: any | null; // Data can be null if there's an error
  error: string | null; // Allow error to be null
}

export const sendEmail = async (formData: FormData): Promise<SendEmailResponse> => {
  const senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;

  // Server-side validation
  if (!validateString(senderEmail, 500)) {
    return { data: null, error: "Invalid sender email" }; // Return error for invalid email
  }
  if (!validateString(message, 5000)) {
    return { data: null, error: "Invalid message" }; // Return error for invalid message
  }

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "padil2246@gmail.com",
      subject: "Message from contact form",
      replyTo: senderEmail,
      react: React.createElement(Contact, {
        message: message,
        senderEmail: senderEmail,
      }),
    });

    // Check if there's an error in the response data
    if (data?.error) {
      return { data: null, error: data.error.message }; // Return the error message if it exists
    }

    return { data, error: null }; // Success response
  } catch (error: any) {
    // Directly return the entire error response from Resend API
    return { data: null, error: error?.message || "An unexpected error occurred." };
  }
};