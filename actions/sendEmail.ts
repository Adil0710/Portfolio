"use server";

import { Resend } from "resend";
import { validateString } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)){
    return {
        error: "Invalid sender email"
    }
  }

  if (!validateString(message, 5000)){
    return {
        error: "Invalid message"
    }
  }

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "padil2246@gmail.com",
    subject: "Message from contact form",
    replyTo: senderEmail as string,
    text: message as string,
  });
};
