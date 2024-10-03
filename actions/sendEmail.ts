"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import Contact from "../email/contact-form";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    await resend.emails.send({
      from: "Contact form<onboarding@resend.dev>",
      to: "padil2246@gmail.com",
      subject: "Message from contact form",
      replyTo: senderEmail as string,
      react: React.createElement(Contact, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
