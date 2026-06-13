import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  name: z.string().trim().nonempty("Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().nonempty("Message is required").max(1000),
});

export const submitContactMessage = async (data: z.infer<typeof contactSchema>) => {
  // Validate client side using Zod schema
  const validated = contactSchema.parse(data);

  let isEmailSent = false;
  // Send email notification via Web3Forms
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  if (accessKey) {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Portfolio Message from ${validated.name}`,
          from_name: "Portfolio Contact Form",
          replyto: validated.email,
          name: validated.name,
          email: validated.email,
          message: validated.message,
        }),
      });
      if (response.ok) {
        isEmailSent = true;
      } else {
        console.error("Web3Forms error:", await response.text());
      }
    } catch (err) {
      console.error("Failed to send email notification:", err);
    }
  } else {
    console.warn("VITE_WEB3FORMS_ACCESS_KEY is not set. Email notification was not sent.");
  }

  const { error } = await supabase.from("contact_messages").insert({
    name: validated.name,
    email: validated.email,
    message: validated.message,
  });

  if (error) {
    console.error("Failed to save contact message to Supabase:", error);
    // If Supabase fails but email succeeded, we still consider the submission a success for the user
    if (!isEmailSent) {
      return { success: false as const };
    }
  }

  return { success: true as const };
};
