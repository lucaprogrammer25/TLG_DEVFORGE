import React, { useState } from "react";
import "../../style/NewsLetter/SubscribeInput.scss";

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
      await new Promise((resolve) => setTimeout(resolve, 5000)); // Aspetta 5 secondi prima di rimuovere lo stato "submitted"
      setFormState({ email: "", status: "idle" }); // Rimuovi lo stato dopo 5 secondi
    } catch (error) {
      setFormState({ ...formState, status: "error" });
    }
  };

  return (
    <>
      <div className="divForm">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="email">
            <h2>Join our community and stay updated on all our products</h2>
            <p>ricevi nuovi coupon</p>
            <p>resta aggiornato su tutte le nostre offerte</p>
          </label>
          <input
            className="subscribeInput"
            type="email"
            id="email"
            value={formState.email}
            onChange={handleEmailChange}
            required
          />
          <button
            type="submit"
            className="ButtonTmgCss3"
            disabled={formState.status === "submitting"}
          >
            Subscribe
          </button>
          {formState.status === "submitted" && (
            <p>Thank you for subscribing!</p>
          )}
          {formState.status === "error" && <p>Sorry, there was a problem.</p>}
        </form>
      </div>
    </>
  );
};

export default NewsletterForm;
