import React, { useState } from "react";
import "./SubscribeInput.css"

interface FormState {
  email: string;
  status: "idle" | "submitting" | "submitted" | "error";
}

const NewsletterForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    email: "",
    status: "idle",
  });

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      email: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formState.email || !formState.email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    setFormState({ ...formState, status: "submitting" });

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setFormState({ email: "", status: "submitted" });
    } catch (error) {
      setFormState({ ...formState, status: "error" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Subscribe to our News Letter </label>
      <input
      className="subscribeInput"
        type="email"
        id="email"
        value={formState.email}
        onChange={handleEmailChange}
        required
      />
      <button type="submit" disabled={formState.status === "submitting"}>
        Subscribe
      </button>
      {formState.status === "submitted" && <p>Thank you for subscribing!</p>}
      {formState.status === "error" && <p>Sorry, there was a problem.</p>}
    </form>
  );
};

export default NewsletterForm;
